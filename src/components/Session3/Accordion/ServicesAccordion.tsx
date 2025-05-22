import React, { useState } from 'react';
import './ServicesAccordion.css';

type ServicoItem = {
  titulo: string;
  descricao: string;
};

type ServicoProps = {
  servico: ServicoItem;
  aberto: boolean;
  onClick: () => void;
};


const Servico: React.FC<ServicoProps> = ({ servico, aberto, onClick }) => {
  return (
    <div className="servico">
      <div className="titulo-servico" onClick={onClick}>
        <strong>{servico.titulo}</strong>
        <span className="icone">{aberto ? '-' : '+'}</span>
      </div>
      <div className={`descricao-servico ${aberto ? 'aberto' : ''}`}>
        <p>{servico.descricao}</p>
      </div>
    </div>
  );
};

export default function ListaServicos() {
  const servicos: ServicoItem[] = [
    {
      titulo: "Consultoria ESG e Estratégias Sustentáveis",
      descricao: `Desenvolvemos e implementamos estratégias ESG para empresas, 
        governos e associações que buscam integrar sustentabilidade em sua governança 
        e operações. Nossa consultoria inclui diagnósticos personalizados, 
        definição de indicadores de impacto, matriz de materialidade, 
        elaboração de relatórios ESG e planejamento estratégico para fortalecer
        a sustentabilidade como um diferencial competitivo.`
    },
    {
      titulo: "Financiamento Climático e Captação de Recursos",
      descricao: `Apoiamos organizações na estruturação e acesso a fundos climáticos nacionais e 
                        internacionais, garantindo que projetos sustentáveis recebam o financiamento necessário
                        para serem implementados com sucesso. 
                        Realizamos consultorias personalizadas em financiamento climático, 
                        mapeamento de oportunidades, análise de elegibilidade e suporte na submissão 
                        de propostas. Além disso, promovemos articulação estratégica com parceiros públicos 
                        e privados relevantes para o projeto.`
    },
    {
      titulo: "Estudos de Caso",
      descricao: `Realizamos levantamento de ações de sustentabilidade, 
                        entrevistas com stakeholders e análises de riscos para compreender como a 
                        organização está posicionada em relação às mudanças climáticas e à transição 
                        para uma economia de baixo carbono. Nossos estudos fornecem insumos essenciais 
                        para a tomada de decisões estratégicas, permitindo que empresas e governos adotem 
                        medidas eficazes de mitigação e adaptação aos desafios climáticos.`
    },
    {
        titulo: "Articulação Governamental e Advocacy em Políticas Climáticas",
        descricao: `Facilitamos o diálogo entre empresas, associações e órgãos públicos para impulsionar 
                        políticas climáticas e estratégias de sustentabilidade. Nossa atuação inclui a construção 
                        de parcerias estratégicas, participação em fóruns e consultas públicas. Por meio do advocacy, 
                        trabalhamos para influenciar legislações, regulamentações e incentivos que viabilizem a 
                        transição para uma economia de baixo carbono, conectando o setor privado às oportunidades de 
                        impacto positivo no cenário político e regulatório.`
    },
    {
        titulo: "Acesso Global a Iniciativas Climáticas",
        descricao: `Oferecemos assessoria especializada para empresas e organizações que buscam 
        se integrar ao cenário global de sustentabilidade. Facilitamos a conexão com as principais
         iniciativas climáticas globais, como as Conferências das Partes (COP) das Nações Unidas
          — nas áreas de mudança do clima, biodiversidade e combate à desertificação — permitindo que
           nossos clientes se envolvam ativamente com políticas, financiamento e 
           parcerias internacionais para impulsionar seus projetos de impacto ambiental.`
    }
  ];

  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

  return (
    <div className="lista-servicos">
      {servicos.map((servico, index) => (
        <Servico
          key={index}
          servico={servico}
          aberto={indiceAberto === index}
          onClick={() =>
            setIndiceAberto(indiceAberto === index ? null : index)
          }
        />
      ))}
    </div>
  );
}
