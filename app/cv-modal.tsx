"use client";

import { useRef } from "react";

export function CvExampleModal() {
  const ref = useRef<HTMLDialogElement>(null);

  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  return (
    <>
      <button className="btn btn-gold" type="button" onClick={open}>
        <svg className="ico-arrow" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
        Exemplo de uma estrutura curricular
      </button>

      <dialog
        ref={ref}
        className="cv-dialog"
        aria-label="Exemplo de estrutura curricular"
        onClick={(e) => {
          if (e.target === ref.current) close();
        }}
      >
        <div className="cv-dialog-inner">
          <button className="cv-dialog-close" type="button" aria-label="Fechar" onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <article className="cv-paper">
            <span className="cv-tag">Exemplo fictício</span>
            <header className="cv-head">
              <div className="cv-name">Marina Almeida Ribeiro</div>
              <div className="cv-role">Medicina · Universidade Federal de Vale Verde</div>
              <div className="cv-contact">São Paulo, SP · contato@exemplo.com · (00) 00000-0000 · dados fictícios</div>
            </header>
            <div className="cv-section">
              <div className="cv-label">Formação Acadêmica</div>
              <div className="cv-entry">
                <div className="et"><b>Graduação em Medicina</b><span>2019-2024</span></div>
                <p>Universidade Federal de Vale Verde (instituição fictícia, utilizada apenas para demonstração).</p>
              </div>
            </div>
            <div className="cv-section">
              <div className="cv-label">Atividades Acadêmicas</div>
              <div className="cv-entry">
                <div className="et"><b>Monitoria em Clínica Médica</b><span>2022-2023</span></div>
                <p>Departamento de Clínica Médica · 120 horas · seleção por desempenho acadêmico.</p>
              </div>
              <div className="cv-entry">
                <div className="et"><b>Liga Acadêmica de Cardiologia</b><span>2021-2023</span></div>
                <p>Membro efetivo e diretora de pesquisa · organização de cursos e ações de extensão.</p>
              </div>
              <div className="cv-entry">
                <div className="et"><b>Iniciação Científica (PIBIC)</b><span>2022-2023</span></div>
                <p>Projeto &quot;Marcadores inflamatórios na insuficiência cardíaca&quot; · bolsa de iniciação científica.</p>
              </div>
              <div className="cv-entry">
                <div className="et"><b>Apresentação em Congresso</b><span>2023</span></div>
                <p>XII Congresso de Clínica Médica (fictício) · apresentação oral de trabalho.</p>
              </div>
              <div className="cv-entry">
                <div className="et"><b>Publicação de Resumo</b><span>2023</span></div>
                <p>Anais do XII Congresso de Clínica Médica (fictício) · resumo expandido.</p>
              </div>
              <div className="cv-entry">
                <div className="et"><b>Projeto de Extensão</b><span>2021-2022</span></div>
                <p>&quot;Saúde na Comunidade&quot; · ações de educação em saúde em unidades básicas.</p>
              </div>
            </div>
            <div className="cv-section">
              <div className="cv-label">Premiações</div>
              <div className="cv-entry">
                <div className="et"><b>Menção honrosa</b><span>2023</span></div>
                <p>Mostra Científica de Vale Verde (fictícia) · categoria pesquisa clínica.</p>
              </div>
            </div>
            <p className="cv-foot">Documento ilustrativo, com dados fictícios, criado exclusivamente para demonstrar a organização visual das informações. Não representa pessoa real.</p>
          </article>
          <p className="cv-caption">A estrutura final é adaptada aos critérios da banca escolhida e aos seus documentos reais.</p>
        </div>
      </dialog>
    </>
  );
}
