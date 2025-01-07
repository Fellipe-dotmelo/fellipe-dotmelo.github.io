const text =
  "Sou um Analista de Dados em transição no mercado Tech, com formação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio e especialização em Data Analytics e Business Intelligence pela Universidade Católica de Brasília. Com mais de 4 anos de experiência em Tecnologia, comecei minha jornada na área de Suporte Técnico, onde desenvolvi fortes habilidades de resolução de problemas e comunicação. Recentemente, foquei em Dados, adquirindo experiência em processos de ETL, análise exploratória e criação de dashboards com Excel, Power BI e SQL para gerar insights estratégicos. Estou em constante evolução, estudo Python, Excel, SQL e Power BI, explorando o storytelling de dados e métricas de negócio para aprimorar minha visão analítica. Determinado a solidificar minha trajetória em Análise de Dados, busco aplicar meu conhecimento para agregar valor e impacto aos negócios.";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // Ajuste o intervalo para controlar a velocidade
  }
}

window.onload = function () {
  type(); // Iniciar a digitação automática quando a página carregar
};