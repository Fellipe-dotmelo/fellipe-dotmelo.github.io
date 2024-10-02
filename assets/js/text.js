const text =
  "Sou apenas um rapaz latino americano aventurado no mercado Tech, embora o começo deste resumo seja descontraído, demonstro competências neste site. Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio, estou atualmente realizando uma Especialização em Análise de Dados e Business Intelligence na Universidade Católica de Brasília. Tenho mais de 3 anos de experiência na área de Tecnologia, onde atuei como Suporte Técnico, adquirindo habilidades valiosas em resolução de problemas, persuasão e ótima comunicação. Atuei nos últimos meses na área de Dados e então, redirecionei meu foco visando crescimento na área, passei a me envolver, em processos de ETL, análise exploratória de dados e criação de Dashboards. Utilizo ferramentas como Excel, Power BI e T-SQL no SQL Server para extrair insights significativos e impulsionar a tomada de decisões informadas. Por isso, decidi iniciar a minha especialização visando ampliar meu conhecimento e obter o certificado na área. Estou determinado a solidificar minha jornada como Analista de Dados, aplicando meu conhecimento técnico e minha paixão pela Análise de Dados para impulsionar o sucesso dos negócios.";
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