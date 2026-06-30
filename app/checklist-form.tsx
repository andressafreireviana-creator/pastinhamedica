"use client";

import { useState } from "react";

type Props = {
  fileHref: string;
  phoneNumber: string;
};

type Errors = { nome?: string; email?: string; telefone?: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(nome: string, email: string, telefone: string): Errors {
  const errors: Errors = {};
  if (nome.trim().length < 2) errors.nome = "Informe seu nome.";
  if (!emailRe.test(email.trim())) errors.email = "Informe um e-mail válido.";
  const digits = telefone.replace(/\D/g, "");
  if (digits.length < 10) errors.telefone = "Informe um telefone com DDD.";
  return errors;
}

export function ChecklistForm({ fileHref, phoneNumber }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function downloadFile() {
    const a = document.createElement("a");
    a.href = fileHref;
    a.download = "checklist-pastinha-medica.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(nome, email, telefone);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Lead chega à Andressa pelo WhatsApp; o aluno recebe o PDF no mesmo clique.
    const message =
      "Olá, Andressa. Quero o checklist de documentos do Pastinha Médica.\n" +
      `Nome: ${nome.trim()}\n` +
      `E-mail: ${email.trim()}\n` +
      `Telefone: ${telefone.trim()}`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    downloadFile();
    setDone(true);
  }

  if (done) {
    return (
      <div className="lead-form" aria-live="polite">
        <div className="lf-success">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12.5l4.3 4.3L19 7.2" />
          </svg>
          <div>
            <b>Checklist liberado.</b>
            <p>
              O download começou automaticamente. Se não baixou,{" "}
              <a href={fileHref} download="checklist-pastinha-medica.pdf">
                clique aqui para baixar o PDF
              </a>
              . Seu contato foi encaminhado pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate aria-labelledby="lf-title">
      <h3 id="lf-title">Baixe o checklist em PDF</h3>
      <p className="lf-sub">
        Deixe seu e-mail e telefone para receber o checklist completo dos documentos da pasta.
      </p>

      <div className="lf-field">
        <label htmlFor="lf-nome">Nome</label>
        <input
          id="lf-nome"
          name="nome"
          type="text"
          autoComplete="name"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          aria-invalid={errors.nome ? "true" : undefined}
          aria-describedby={errors.nome ? "lf-nome-err" : undefined}
          required
        />
        {errors.nome && (
          <p className="lf-error" id="lf-nome-err">
            {errors.nome}
          </p>
        )}
      </div>

      <div className="lf-field">
        <label htmlFor="lf-email">E-mail</label>
        <input
          id="lf-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="voce@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "lf-email-err" : undefined}
          required
        />
        {errors.email && (
          <p className="lf-error" id="lf-email-err">
            {errors.email}
          </p>
        )}
      </div>

      <div className="lf-field">
        <label htmlFor="lf-tel">Telefone (WhatsApp)</label>
        <input
          id="lf-tel"
          name="telefone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(14) 99999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          aria-invalid={errors.telefone ? "true" : undefined}
          aria-describedby={errors.telefone ? "lf-tel-err" : undefined}
          required
        />
        {errors.telefone && (
          <p className="lf-error" id="lf-tel-err">
            {errors.telefone}
          </p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Baixar checklist em PDF
      </button>
      <p className="lf-note">
        Usamos seu contato apenas para enviar o checklist e tirar dúvidas sobre a organização da pasta.
      </p>
    </form>
  );
}
