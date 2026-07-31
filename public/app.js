const view = document.getElementById("view");
const globalSearch = document.getElementById("globalSearch");
const architecture=[
{id:'ger',name:'Gerenciais',type:'Dimensão',desc:'Processos que direcionam, planejam, monitoram e avaliam a organização, garantindo governança, controles internos da gestão e melhoria.',color:'red',icon:'🏛',children:[
 {id:'gov',name:'Governança',type:'Macroprocesso',children:[
  {id:'govinst',name:'Governança Institucional',type:'Processo',children:[
   {id:'instancias',name:'Gestão das Instâncias de Governança',type:'Subprocesso'},
   {id:'decisoesgov',name:'Acompanhamento das Decisões de Governança',type:'Subprocesso'},
   {id:'integridade',name:'Gestão da Integridade',type:'Subprocesso'}]},
  {id:'gestproc',name:'Gestão de Processos',type:'Processo',children:[
   {id:'arquitetura',name:'Arquitetura de Processos',type:'Subprocesso'},
   {id:'modelagem',name:'Modelagem de Processos',type:'Subprocesso'},
   {id:'padronizacao',name:'Padronização de Processos',type:'Subprocesso'},
   {id:'melhoria',name:'Melhoria Contínua',type:'Subprocesso'}]},
  {id:'riscos',name:'Gestão de Riscos',type:'Processo',children:[
   {id:'identriscos',name:'Identificação de Riscos',type:'Subprocesso'},
   {id:'avalriscos',name:'Análise e Avaliação de Riscos',type:'Subprocesso'},
   {id:'tratriscos',name:'Tratamento de Riscos',type:'Subprocesso'},
   {id:'monriscos',name:'Monitoramento de Riscos',type:'Subprocesso'}]},
  {id:'controlesgestao',name:'Controles Internos da Gestão',type:'Processo',children:[
   {id:'estruturacaocontroles',name:'Estruturação dos Controles Internos da Gestão',type:'Subprocesso'},
   {id:'orientacaocontroles',name:'Orientação e Suporte às Unidades',type:'Subprocesso'},
   {id:'monitoramentocontroles',name:'Monitoramento dos Controles Internos da Gestão',type:'Subprocesso'},
   {id:'supervisaotecnica',name:'Supervisão Técnica',type:'Subprocesso'}]}]},
 {id:'planejamento',name:'Planejamento e Gestão Estratégica',type:'Macroprocesso',children:[
  {id:'planestrat',name:'Planejamento Estratégico',type:'Processo',children:[{id:'formestrat',name:'Formulação da Estratégia',type:'Subprocesso'},{id:'desdobestrat',name:'Desdobramento da Estratégia',type:'Subprocesso'},{id:'revestrat',name:'Revisão da Estratégia',type:'Subprocesso'}]},
  {id:'desempenho',name:'Gestão do Desempenho',type:'Processo',children:[{id:'indicadores',name:'Gestão de Indicadores',type:'Subprocesso'},{id:'monestrat',name:'Monitoramento Estratégico',type:'Subprocesso'}]},
  {id:'projetos',name:'Gestão de Projetos',type:'Processo',children:[{id:'portfolio',name:'Gestão do Portfólio',type:'Subprocesso'},{id:'projestrat',name:'Gestão de Projetos Estratégicos',type:'Subprocesso'}]}]},
 {id:'integracao',name:'Integração Governamental',type:'Macroprocesso',children:[
  {id:'relinst',name:'Relacionamento Institucional',type:'Processo',children:[{id:'relgov',name:'Relações Governamentais',type:'Subprocesso'},{id:'coopinst',name:'Cooperação Institucional',type:'Subprocesso'}]},
  {id:'parcerias',name:'Gestão de Parcerias',type:'Processo',children:[{id:'convenios',name:'Convênios',type:'Subprocesso'},{id:'acordos',name:'Acordos de Cooperação',type:'Subprocesso'}]}]},
 {id:'informacao',name:'Gestão da Informação e Conhecimento',type:'Macroprocesso',children:[
  {id:'documental',name:'Gestão Documental',type:'Processo',children:[{id:'proddoc',name:'Produção Documental',type:'Subprocesso'},{id:'arquivamento',name:'Arquivamento',type:'Subprocesso'}]},
  {id:'conhecimento',name:'Gestão do Conhecimento',type:'Processo',children:[{id:'licoes',name:'Gestão de Lições Aprendidas',type:'Subprocesso'},{id:'boaspraticas',name:'Gestão de Boas Práticas',type:'Subprocesso'}]}]}]},
{id:'fin',name:'Finalísticos',type:'Dimensão',desc:'Processos que geram valor diretamente para a sociedade, cumprindo a missão institucional do CBMMG.',color:'blue',icon:'⛑',children:[
 {id:'grd',name:'Gestão do Risco de Desastres',type:'Macroprocesso',children:[
  {id:'avalrisco',name:'Avaliação do Risco',type:'Processo',children:[{id:'estudos',name:'Estudos de Risco',type:'Subprocesso'},{id:'mapeamentos',name:'Mapeamento de Áreas de Risco',type:'Subprocesso'}]},
  {id:'prevencao',name:'Prevenção',type:'Processo',children:[{id:'educacao',name:'Educação Pública',type:'Subprocesso'},{id:'campanhas',name:'Campanhas Preventivas',type:'Subprocesso'}]},
  {id:'preparacao',name:'Preparação',type:'Processo',children:[{id:'planos',name:'Planejamento para Emergências',type:'Subprocesso'},{id:'exercicios',name:'Exercícios e Simulados',type:'Subprocesso'}]}]},
 {id:'desastres',name:'Gestão de Desastres',type:'Macroprocesso',children:[
  {id:'resposta',name:'Resposta Operacional',type:'Processo',children:[{id:'incendios',name:'Combate a Incêndios',type:'Subprocesso'},{id:'salvamentos',name:'Salvamentos',type:'Subprocesso'},{id:'aph',name:'Atendimento Pré-Hospitalar',type:'Subprocesso'},{id:'pp',name:'Emergências com Produtos Perigosos',type:'Subprocesso'}]},
  {id:'coordops',name:'Coordenação das Operações',type:'Processo',children:[{id:'comandoops',name:'Comando Operacional',type:'Subprocesso'},{id:'interagencias',name:'Coordenação Interagências',type:'Subprocesso'}]},
  {id:'recuperacao',name:'Recuperação',type:'Processo',children:[{id:'humanitario',name:'Apoio Humanitário',type:'Subprocesso'}]}]},
 {id:'scip',name:'Segurança Contra Incêndio e Pânico',type:'Macroprocesso',children:[
  {id:'licenciamento',name:'Licenciamento',type:'Processo',children:[{id:'analiseproj',name:'Análise de Projetos',type:'Subprocesso'},{id:'vistorias',name:'Vistorias',type:'Subprocesso'},{id:'fiscalizacao',name:'Fiscalização',type:'Subprocesso'}]},
  {id:'normatizacao',name:'Normatização Técnica',type:'Processo',children:[{id:'elabit',name:'Elaboração de Instruções Técnicas',type:'Subprocesso'}]}]}]},
{id:'sup',name:'Suporte',type:'Dimensão',desc:'Processos que fornecem recursos, infraestrutura e suporte necessários ao funcionamento e à execução das atividades finalísticas.',color:'green',icon:'⚙',children:[
 {id:'logtic',name:'Gestão Logística e TIC',type:'Macroprocesso',children:[
  {id:'patrimonial',name:'Gestão Patrimonial',type:'Processo',children:[{id:'incorporacao',name:'Incorporação de Bens',type:'Subprocesso'},{id:'inventario',name:'Inventário Patrimonial',type:'Subprocesso'},{id:'desfazimento',name:'Desfazimento de Bens',type:'Subprocesso'}]},
  {id:'suprimentos',name:'Gestão de Suprimentos',type:'Processo',children:[{id:'plansupri',name:'Planejamento de Suprimentos',type:'Subprocesso'},{id:'armazenagem',name:'Armazenagem',type:'Subprocesso'}]},
  {id:'frota',name:'Gestão da Frota',type:'Processo',children:[{id:'manutfrota',name:'Manutenção da Frota',type:'Subprocesso'}]},
  {id:'contratacoes',name:'Gestão das Contratações',type:'Processo',children:[{id:'plancontr',name:'Planejamento da Contratação',type:'Subprocesso'},{id:'selecao',name:'Seleção do Fornecedor',type:'Subprocesso'},{id:'gestcontr',name:'Gestão Contratual',type:'Subprocesso'}]},
  {id:'tic',name:'Gestão de TIC',type:'Processo',children:[{id:'infra',name:'Gestão da Infraestrutura de TIC',type:'Subprocesso'},{id:'sistemas',name:'Gestão de Sistemas',type:'Subprocesso'}]}]},
 {id:'orcfin',name:'Gestão de Orçamento e Finanças',type:'Macroprocesso',children:[
  {id:'orcamentaria',name:'Gestão Orçamentária',type:'Processo',children:[{id:'planorc',name:'Planejamento Orçamentário',type:'Subprocesso'},{id:'execorc',name:'Execução Orçamentária',type:'Subprocesso'}]},
  {id:'financeira',name:'Gestão Financeira',type:'Processo',children:[{id:'progfin',name:'Programação Financeira',type:'Subprocesso'},{id:'execfin',name:'Execução Financeira',type:'Subprocesso'}]},
  {id:'contabil',name:'Gestão Contábil',type:'Processo',children:[{id:'conformidade',name:'Conformidade Contábil',type:'Subprocesso'},{id:'prestcontas',name:'Prestação de Contas',type:'Subprocesso'}]},
  {id:'ressarcimento',name:'Gestão do Ressarcimento ao Erário',type:'Processo',children:[{id:'cobranca',name:'Cobrança Administrativa',type:'Subprocesso'},{id:'controleress',name:'Controle dos Ressarcimentos',type:'Subprocesso'}]}]},
 {id:'pessoas',name:'Gestão de Pessoas',type:'Macroprocesso',children:[
  {id:'ingmov',name:'Ingresso e Movimentação',type:'Processo',children:[{id:'provimento',name:'Provimento',type:'Subprocesso'}]},
  {id:'desenvpessoas',name:'Desenvolvimento de Pessoas',type:'Processo',children:[{id:'capacitacao',name:'Capacitação',type:'Subprocesso'}]},
  {id:'admpessoal',name:'Administração de Pessoal',type:'Processo',children:[{id:'vidafunc',name:'Gestão da Vida Funcional',type:'Subprocesso'}]},
  {id:'saude',name:'Saúde e Qualidade de Vida',type:'Processo',children:[{id:'saudeocup',name:'Saúde Ocupacional',type:'Subprocesso'}]}]},
 {id:'comunicacao',name:'Comunicação Organizacional',type:'Macroprocesso',children:[
  {id:'cominst',name:'Comunicação Institucional',type:'Processo',children:[{id:'cominterna',name:'Comunicação Interna',type:'Subprocesso'},{id:'comexterna',name:'Comunicação Externa',type:'Subprocesso'}]},
  {id:'relsociedade',name:'Relacionamento com a Sociedade',type:'Processo',children:[{id:'imprensa',name:'Relacionamento com a Imprensa',type:'Subprocesso'},{id:'ouvidoria',name:'Ouvidoria',type:'Subprocesso'}]}]},
 {id:'ensino',name:'Ensino, Treinamento e Desenvolvimento',type:'Macroprocesso',children:[
  {id:'formacao',name:'Formação Militar',type:'Processo',children:[{id:'forminicial',name:'Formação Inicial',type:'Subprocesso'}]},
  {id:'capacitacaoens',name:'Capacitação Profissional',type:'Processo',children:[{id:'especializacao',name:'Especialização',type:'Subprocesso'}]},
  {id:'pesquisa',name:'Pesquisa e Desenvolvimento',type:'Processo',children:[{id:'pesqinst',name:'Pesquisa Institucional',type:'Subprocesso'}]}]}]}
];

const processGovernance={
 govinst:{owner:'Comandante-Geral',manager:'Estado-Maior',guardian:'Estado-Maior',executors:'Alto-Comando; Estado-Maior; instâncias colegiadas',systems:'SEI; painéis corporativos'},
 gestproc:{owner:'Chefe do Estado-Maior',manager:'Unidade central de gestão por processos',guardian:'Unidade central de gestão por processos',executors:'Todas as Unidades do CBMMG',systems:'Portal Corporativo de Processos; Bizagi; SEI'},
 riscos:{owner:'Chefe do Estado-Maior',manager:'Unidade central de gestão de riscos',guardian:'Unidade central de gestão de riscos',executors:'Proprietários e gestores de riscos; Unidades do CBMMG',systems:'Sistema corporativo de riscos; SEI'},
 controlesgestao:{owner:'Dirigentes das Unidades',manager:'Unidades responsáveis pelos controles internos da gestão',guardian:'Unidade central de orientação e supervisão',executors:'Primeira e segunda linhas de atuação',systems:'SEI; sistemas corporativos de gestão'},
 planestrat:{owner:'Comandante-Geral',manager:'Estado-Maior',guardian:'Estado-Maior',executors:'Estado-Maior; Diretorias; Comandos Operacionais',systems:'Painéis estratégicos; SEI'},
 desempenho:{owner:'Chefe do Estado-Maior',manager:'Estado-Maior',guardian:'Estado-Maior',executors:'Unidades responsáveis pelos indicadores',systems:'Painéis estratégicos; BI'},
 projetos:{owner:'Chefe do Estado-Maior',manager:'Unidade responsável pelo portfólio',guardian:'Unidade responsável pela metodologia de projetos',executors:'Gerentes e equipes de projetos',systems:'Sistema de projetos; SEI'},
 relinst:{owner:'Comandante-Geral',manager:'Gabinete do Comando',guardian:'Gabinete do Comando',executors:'Gabinete; Estado-Maior; unidades demandantes',systems:'SEI'},
 parcerias:{owner:'Comandante-Geral',manager:'Unidade responsável pela parceria',guardian:'Unidade técnica competente pela matéria',executors:'Unidades partícipes',systems:'SEI; sistemas estaduais de convênios'},
 documental:{owner:'Chefe do Estado-Maior',manager:'Unidade responsável pela gestão documental',guardian:'Unidade responsável pela política arquivística',executors:'Todas as Unidades',systems:'SEI'},
 conhecimento:{owner:'Chefe do Estado-Maior',manager:'Unidade responsável pela gestão do conhecimento',guardian:'Unidade responsável pela metodologia',executors:'Todas as Unidades',systems:'Portal Corporativo; repositórios institucionais'},
 avalrisco:{owner:'Comandante Operacional',manager:'Unidades responsáveis por proteção e defesa civil',guardian:'Unidade técnica de gestão do risco de desastres',executors:'Comandos Operacionais; Unidades Operacionais',systems:'Sistemas de defesa civil; geoprocessamento'},
 prevencao:{owner:'Comandante Operacional',manager:'Unidades responsáveis por prevenção',guardian:'Unidade técnica de prevenção',executors:'Unidades Operacionais; comunicação social',systems:'Sistemas operacionais; canais institucionais'},
 preparacao:{owner:'Comandante Operacional',manager:'Unidades responsáveis por preparação',guardian:'Unidade técnica operacional',executors:'Unidades Operacionais; parceiros interagências',systems:'Sistemas operacionais; SEI'},
 resposta:{owner:'Comandante Operacional',manager:'Comandos Operacionais e Unidades Operacionais',guardian:'Unidade técnica operacional competente',executors:'Batalhões; Companhias Independentes; frações operacionais',systems:'Sistema de atendimento e despacho; radiocomunicação'},
 coordops:{owner:'Comandante Operacional',manager:'Comando Operacional',guardian:'Estado-Maior Operacional',executors:'Comandos Operacionais; Unidades Operacionais',systems:'Sistema de comando e controle; radiocomunicação'},
 recuperacao:{owner:'Comandante Operacional',manager:'Unidades responsáveis por proteção e defesa civil',guardian:'Unidade técnica de recuperação',executors:'Unidades Operacionais; órgãos parceiros',systems:'Sistemas de defesa civil; SEI'},
 licenciamento:{owner:'Diretor responsável pela Segurança Contra Incêndio e Pânico',manager:'Unidades de Segurança Contra Incêndio e Pânico',guardian:'Diretoria técnica de SCIP',executors:'Unidades de análise, vistoria e fiscalização',systems:'Sistema de Licenciamento; SEI'},
 normatizacao:{owner:'Diretor responsável pela Segurança Contra Incêndio e Pânico',manager:'Diretoria técnica de SCIP',guardian:'Diretoria técnica de SCIP',executors:'Comissões técnicas; especialistas; unidades de SCIP',systems:'SEI; portal de normas técnicas'},
 patrimonial:{owner:'Diretor de Logística e Finanças',manager:'Subdiretoria de Apoio Logístico',guardian:'Subdiretoria de Apoio Logístico',executors:'Seções administrativas; almoxarifados; unidades detentoras',systems:'SIAD; SEI'},
 suprimentos:{owner:'Diretor de Logística e Finanças',manager:'Subdiretoria de Apoio Logístico',guardian:'Subdiretoria de Apoio Logístico',executors:'Unidades gestoras e requisitantes',systems:'SIAD; Portal de Compras; SEI'},
 frota:{owner:'Diretor de Logística e Finanças',manager:'Subdiretoria de Apoio Logístico',guardian:'Subdiretoria de Apoio Logístico',executors:'Centros de manutenção; Unidades detentoras',systems:'SIAD; sistema de frota'},
 contratacoes:{owner:'Ordenador de Despesas competente',manager:'Unidade responsável pela contratação',guardian:'Diretoria de Logística e Finanças',executors:'Equipes de planejamento; agentes de contratação; gestores e fiscais',systems:'Portal de Compras MG; SEI; SIAFI-MG'},
 tic:{owner:'Diretor de Logística e Finanças',manager:'Subdiretoria de Tecnologia e Sistemas',guardian:'Subdiretoria de Tecnologia e Sistemas',executors:'Equipes de TIC; pontos focais das Unidades',systems:'Central de Serviços; sistemas corporativos; SEI'},
 orcamentaria:{owner:'Diretor de Logística e Finanças',manager:'Assessoria de Contabilidade e Finanças',guardian:'Assessoria de Contabilidade e Finanças',executors:'Gerências; Unidades Executoras; SOFI',systems:'SIAFI-MG; SIGPlan; SEI'},
 financeira:{owner:'Diretor de Logística e Finanças',manager:'Assessoria de Contabilidade e Finanças',guardian:'Assessoria de Contabilidade e Finanças',executors:'Gerências; Unidades Executoras; SOFI',systems:'SIAFI-MG; SEI'},
 contabil:{owner:'Diretor de Logística e Finanças',manager:'Assessoria de Contabilidade e Finanças',guardian:'Assessoria de Contabilidade e Finanças',executors:'Contadores; SOFI; Unidades Executoras',systems:'SIAFI-MG; SEI'},
 ressarcimento:{owner:'Diretor de Logística e Finanças',manager:'Subdiretoria responsável pela cobrança e controle',guardian:'Diretoria de Logística e Finanças',executors:'Unidades apuradoras; DRH; DLF; SOFI',systems:'SEI; SIAFI-MG; sistemas de arrecadação'},
 ingmov:{owner:'Diretor de Recursos Humanos',manager:'Diretoria de Recursos Humanos',guardian:'Diretoria de Recursos Humanos',executors:'Seções de pessoal; Unidades do CBMMG',systems:'Sistema de gestão de pessoas; SEI'},
 desenvpessoas:{owner:'Diretor de Recursos Humanos',manager:'Diretoria de Recursos Humanos',guardian:'Diretoria de Recursos Humanos',executors:'Unidades de capacitação; chefias',systems:'Sistema de gestão de pessoas; SEI'},
 admpessoal:{owner:'Diretor de Recursos Humanos',manager:'Diretoria de Recursos Humanos',guardian:'Diretoria de Recursos Humanos',executors:'Seções de pessoal; Unidades do CBMMG',systems:'Sistema de gestão de pessoas; SEI'},
 saude:{owner:'Diretor de Recursos Humanos',manager:'Unidade de saúde e qualidade de vida',guardian:'Diretoria de Recursos Humanos',executors:'Profissionais de saúde; chefias; Unidades',systems:'Sistemas de saúde ocupacional; SEI'},
 cominst:{owner:'Comandante-Geral',manager:'Assessoria de Comunicação Organizacional',guardian:'Assessoria de Comunicação Organizacional',executors:'Pontos focais de comunicação; Unidades',systems:'Portal institucional; intranet; redes institucionais'},
 relsociedade:{owner:'Comandante-Geral',manager:'Assessoria de Comunicação Organizacional',guardian:'Assessoria de Comunicação Organizacional',executors:'Assessoria de comunicação; Ouvidoria; Unidades',systems:'Ouvidoria; portal institucional; redes institucionais'},
 formacao:{owner:'Comandante da Academia de Bombeiros Militar',manager:'Academia de Bombeiros Militar',guardian:'Academia de Bombeiros Militar',executors:'Escolas; coordenações de curso; corpo docente',systems:'Sistema acadêmico; SEI'},
 capacitacaoens:{owner:'Comandante da Academia de Bombeiros Militar',manager:'Academia de Bombeiros Militar',guardian:'Academia de Bombeiros Militar',executors:'Escolas; centros de treinamento; instrutores',systems:'Sistema acadêmico; SEI'},
 pesquisa:{owner:'Comandante da Academia de Bombeiros Militar',manager:'Academia de Bombeiros Militar',guardian:'Academia de Bombeiros Militar',executors:'Pesquisadores; docentes; unidades técnicas',systems:'Repositório institucional; SEI'}
};
function govOfProcess(processId){return processGovernance[processId]||{owner:'A definir',manager:'A definir',guardian:'A definir',executors:'A definir',systems:'A definir'}}
function hierarchyRows(){const rows=[];architecture.forEach(d=>d.children.forEach(m=>m.children.forEach(p=>(p.children||[]).forEach(sp=>rows.push({dimension:d,macro:m,process:p,subprocess:sp,gov:govOfProcess(p.id)})))));return rows;}

const index={},parent={};
function walk(nodes,p=null){nodes.forEach(n=>{index[n.id]=n;parent[n.id]=p;if(n.children)walk(n.children,n.id)})}
walk(architecture);

let wizardStep=1;
let wizardData={titulo:'',unidade:'DLF/ACF',dimensao:'',macroprocesso:'',processo:'',justificativa:'',objetivo:'',escopo:'',dono:'',unidadeGestora:'',guardiao:'',executores:'',sistemas:'',arquivo:''};

function setView(name){
 document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
 const map={home:renderHome,catalog:renderInstitutionalCatalog,processes:renderInstitutionalCatalog,architecture:renderArchitecture,mine:renderMine,wizard:renderWizard,dashboard:renderDashboard,norms:renderNorms,governance:renderGovernance,faq:renderFAQ};
 (map[name]||renderHome)();
}
document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>setView(b.dataset.view));

function footerHTML(){
 return `<footer class="portal-footer"><div><strong>Portal Corporativo de Processos do CBMMG</strong><br><span>Protótipo navegável — versão 13.0</span></div><div>Arquitetura Corporativa de Processos</div></footer>`;
}
function dimensionCard(d){
 return `<button class="catalog-card dimension-catalog-card" onclick="openNode('${d.id}')" style="text-align:left;width:100%;border-top:4px solid ${d.color==='red'?'#a81720':d.color==='blue'?'#135a9c':'#287143'}"><div class="overline">${d.type}</div><h3>${d.name}</h3><p>${d.desc||'Explore os macroprocessos desta dimensão.'}</p><div class="meta">Explorar →</div></button>`;
}
function renderHome(){
 const ger=architecture.find(d=>d.id==='ger');
 const fin=architecture.find(d=>d.id==='fin');
 const sup=architecture.find(d=>d.id==='sup');
 const macroCards=(d,cls)=>d.children.map(m=>`<button class="porter-macro ${cls}" onclick="openArchitectureDimension('${d.id}')"><span>${m.type}</span><strong>${m.name}</strong></button>`).join('');
 view.innerHTML=`<div class="home-v8">
  <section class="value-explorer porter-section">
   <div class="value-explorer-head"><div><h2>Arquitetura de Processos do CBMMG</h2><p>Estrutura institucional dos processos, organizada a partir da Cadeia de Valor do Corpo de Bombeiros Militar de Minas Gerais.</p></div></div>
   <div class="porter-board">
    <div class="porter-side-label"><span>Capacidades institucionais</span></div>
    <div class="porter-content">
     <div class="porter-lane managerial-lane">
      <div class="porter-lane-title"><span>Direcionamento</span><strong>${ger.name}</strong><small>${ger.desc||''}</small></div>
      <div class="porter-macro-grid">${macroCards(ger,'managerial')}</div>
     </div>
     <div class="porter-lane support-lane">
      <div class="porter-lane-title"><span>Sustentação</span><strong>${sup.name}</strong><small>${sup.desc||''}</small></div>
      <div class="porter-macro-grid">${macroCards(sup,'support')}</div>
     </div>
     <div class="porter-lane finalistic-lane">
      <div class="porter-lane-title"><span>Entregas à sociedade</span><strong>${fin.name}</strong><small>${fin.desc||''}</small></div>
      <div class="porter-macro-grid">${macroCards(fin,'finalistic')}</div>
     </div>
    </div>
    <div class="porter-value-output"><span>VALOR PÚBLICO</span><strong>Proteção da vida, do patrimônio e do meio ambiente</strong></div>
   </div>
   <div class="porter-legend"><span><i class="legend-dot managerial"></i>Gerenciais</span><span><i class="legend-dot finalistic"></i>Finalísticos</span><span><i class="legend-dot support"></i>Suporte</span></div>
  </section>
 </div>${footerHTML()}`
}


function mappingStatus(processId){
 const statusByProcess={
  govinst:'published',gestproc:'modeled',riscos:'validation',controlesgestao:'modeling',
  planestrat:'published',desempenho:'modeled',projetos:'modeling',
  relinst:'validation',parcerias:'notstarted',documental:'modeled',conhecimento:'modeling',
  prevencao:'published',preparacao:'modeled',resposta:'validation',recuperacao:'modeling',
  scip:'published',fiscalizacao:'modeled',atendimento:'modeling',
  logistica:'modeled',patrimonio:'published',contratacoes:'validation',orcamento:'modeled',
  financeiro:'modeling',contabil:'published',ressarcimento:'validation',
  ingmov:'modeled',desenvpessoas:'modeling',admpessoal:'published',saude:'validation',
  cominst:'published',relsociedade:'modeled',formacao:'published',capacitacaoens:'modeling',pesquisa:'notstarted'
 };
 const labels={
  modeled:'Modelado',modeling:'Em modelagem',validation:'Em validação',
  published:'Publicado',adjustments:'Ajustes solicitados',notstarted:'Não iniciado'
 };
 const key=statusByProcess[processId]||'modeled';
 return {key,label:labels[key]};
}

function subprocessMappingStatus(subprocessId){
 const statuses=['published','modeled','modeling','validation','adjustments','notstarted'];
 const labels={
  modeled:'Modelado',modeling:'Em modelagem',validation:'Em validação',
  published:'Publicado',adjustments:'Ajustes solicitados',notstarted:'Não iniciado'
 };
 let hash=0;
 for(let i=0;i<subprocessId.length;i++) hash=(hash*31+subprocessId.charCodeAt(i))>>>0;
 const key=statuses[hash%statuses.length];
 return {key,label:labels[key]};
}

function renderInstitutionalCatalog(){
 const esc=v=>String(v??'—').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const records=processRecords();
 const totals={dimensions:architecture.length,macros:architecture.reduce((a,d)=>a+d.children.length,0),processes:records.length,subprocesses:hierarchyRows().length};
 const palette={red:{accent:'#a81720',soft:'#fff5f5'},blue:{accent:'#135a9c',soft:'#f2f7fc'},green:{accent:'#287143',soft:'#f2f8f4'}};
 const statusClass={modeled:'status-mapped',modeling:'status-progress',validation:'status-review',published:'status-published',adjustments:'status-adjustments',notstarted:'status-notstarted'};
 const statusTag=id=>{const s=mappingStatus(id);return `<span class="status-tag ${statusClass[s.key]||'status-mapped'}">${esc(s.label)}</span>`};
 const renderList=(query='',dimensionId='')=>{
  const q=query.trim().toLowerCase();
  const blocks=[];
  architecture.filter(d=>!dimensionId||d.id===dimensionId).forEach(d=>{
   const macros=[];
   d.children.forEach(m=>{
    const cards=[];
    m.children.forEach(p=>{
     const g=govOfProcess(p.id), st=mappingStatus(p.id);
     const subprocessSearch=(p.children||[]).map(x=>`${x.name} ${subprocessMappingStatus(x.id).label}`).join(' ');
     const hay=[d.name,m.name,p.name,subprocessSearch,g.owner,g.manager,g.guardian,g.executors,g.systems].join(' ').toLowerCase();
     if(q&&!hay.includes(q))return;
     cards.push(`<article class="process-card-full">
      <div class="process-card-head"><div><button type="button" onclick="openProcess('${p.id}')" title="Abrir visão 360° do processo">${esc(p.name)}</button><small>${esc(m.name)} • ${esc(d.name)}</small></div><div class="process-card-head-actions"><button type="button" class="process-360-link" onclick="openProcess('${p.id}')">Processo 360° <span aria-hidden="true">›</span></button></div></div>
      <div class="process-card-body">
       <div class="catalog-info full"><label>Subprocessos</label><div class="subprocess-list">${(p.children||[]).map(sp=>{const ss=subprocessMappingStatus(sp.id);return `<button type="button" class="subprocess-chip subprocess-chip-action" onclick="openSubprocessCatalog('${sp.id}')" title="Consultar informações do subprocesso ${esc(sp.name)}"><span class="subprocess-chip-name">${esc(sp.name)}</span><span class="subprocess-chip-meta"><span class="status-tag ${statusClass[ss.key]||'status-mapped'}">${esc(ss.label)}</span><span class="subprocess-chip-consult">Consultar</span><span class="subprocess-chip-arrow" aria-hidden="true">›</span></span></button>`}).join('')||'<strong>Não cadastrados</strong>'}</div><small class="subprocess-help">Selecione um subprocesso para consultar seu detalhamento institucional.</small></div>
       <div class="catalog-info"><label>Dono do Processo</label><strong>${esc(g.owner)}</strong></div>
       <div class="catalog-info"><label>Gestor do Processo</label><strong>${esc(g.manager)}</strong></div>
       <div class="catalog-info"><label>Guardião Técnico-Metodológico</label><strong>${esc(g.guardian)}</strong></div>
       <div class="catalog-info wide"><label>Principais Executores</label><strong>${esc(g.executors)}</strong></div>
       <div class="catalog-info full"><label>Sistema(s) Corporativo(s)</label><strong>${esc(g.systems)}</strong></div>
      </div>
     </article>`);
    });
    if(cards.length)macros.push(`<section class="macro-block"><div class="macro-head"><h3>${esc(m.name)}</h3><span>${cards.length} processo${cards.length===1?'':'s'}</span></div><div class="process-stack">${cards.join('')}</div></section>`);
   });
   if(macros.length){const c=palette[d.color]||palette.blue;blocks.push(`<section class="dimension-block" style="--dim-accent:${c.accent};--dim-soft:${c.soft}"><div class="dimension-head"><div><div class="eyebrow">Dimensão da Cadeia de Valor</div><h2>${esc(d.name)}</h2><p>${esc(d.desc)}</p></div><div class="count">${macros.length} macroprocesso${macros.length===1?'':'s'}</div></div>${macros.join('')}</section>`)}
  });
  return blocks.join('')||'<div class="catalog-empty"><strong>Nenhum processo encontrado.</strong><br>Revise o termo pesquisado ou limpe os filtros.</div>';
 };
 view.innerHTML=`<section class="catalog-final">
  <div class="catalog-page-head"><div><div class="eyebrow">Inventário institucional de processos</div><h1>Catálogo Institucional de Processos</h1><p>Entenda como o CBMMG entrega valor à sociedade por meio de seus processos.</p></div><button class="btn btn-red" onclick="setView('wizard')">＋ Cadastrar processo modelado</button></div>
  <div class="catalog-kpis"><div class="catalog-kpi"><strong>${totals.dimensions}</strong><span>Dimensões</span></div><div class="catalog-kpi"><strong>${totals.macros}</strong><span>Macroprocessos</span></div><div class="catalog-kpi"><strong>${totals.processes}</strong><span>Processos</span></div><div class="catalog-kpi"><strong>${totals.subprocesses}</strong><span>Subprocessos</span></div></div>
  <div class="catalog-toolbar"><div><label for="catalogSearch">Pesquisar no catálogo</label><input id="catalogSearch" placeholder="Processo, subprocesso, dono, gestor, executor, sistema ou situação da modelagem"></div><button class="btn btn-muted" type="button" id="catalogClear">Limpar filtros</button></div>
  <div class="catalog-tabs"><button class="catalog-tab-button active" data-dimension="">Todas as dimensões</button><button class="catalog-tab-button" data-dimension="ger">Gerenciais</button><button class="catalog-tab-button" data-dimension="fin">Finalísticos</button><button class="catalog-tab-button" data-dimension="sup">Suporte</button></div>
  <div id="catalogContent">${renderList()}</div>
 </section>${footerHTML()}`;
 let selected=''; const search=document.getElementById('catalogSearch'); const content=document.getElementById('catalogContent');
 const apply=()=>content.innerHTML=renderList(search.value,selected);
 search.addEventListener('input',apply);
 document.querySelectorAll('.catalog-tab-button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.catalog-tab-button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');selected=btn.dataset.dimension||'';apply()}));
 document.getElementById('catalogClear').addEventListener('click',()=>{search.value='';selected='';document.querySelectorAll('.catalog-tab-button').forEach((x,i)=>x.classList.toggle('active',i===0));apply()});
}


function openSubprocessCatalog(subprocessId){
 const sp=index[subprocessId];
 if(!sp)return;
 const processId=parent[subprocessId];
 const process=index[processId];
 const macro=index[parent[processId]];
 const dimension=index[parent[parent[processId]]];
 const g=govOfProcess(processId);
 const st=subprocessMappingStatus(subprocessId);
 const statusClass={modeled:'status-mapped',modeling:'status-progress',validation:'status-review',published:'status-published',adjustments:'status-adjustments',notstarted:'status-notstarted'};
 const esc=v=>String(v??'—').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 closeSubprocessCatalog();
 const overlay=document.createElement('div');
 overlay.id='subprocessCatalogModal';
 overlay.className='subprocess-modal-backdrop';
 overlay.setAttribute('role','presentation');
 overlay.innerHTML=`<section class="subprocess-modal" role="dialog" aria-modal="true" aria-labelledby="subprocessModalTitle">
  <header class="subprocess-modal-head">
   <div><div class="eyebrow">Detalhamento do subprocesso</div><h2 id="subprocessModalTitle">${esc(sp.name)}</h2><p>Consulta institucional vinculada ao processo ${esc(process.name)}.</p></div>
   <button type="button" class="subprocess-modal-close" aria-label="Fechar detalhamento" onclick="closeSubprocessCatalog()">×</button>
  </header>
  <div class="subprocess-modal-body">
   <div class="subprocess-context"><span>${esc(dimension.name)}</span><span>${esc(macro.name)}</span><span>${esc(process.name)}</span><span class="status-tag ${statusClass[st.key]||'status-mapped'}">${esc(st.label)}</span></div>
   <div class="subprocess-summary">
    <div class="subprocess-summary-item full"><label>Objetivo do Subprocesso</label><strong>Padronizar e assegurar a execução controlada do subprocesso ${esc(sp.name)}, em conformidade com as diretrizes do processo ${esc(process.name)}.</strong></div>
    <div class="subprocess-summary-item"><label>Situação da Modelagem</label><strong>${esc(st.label)}</strong></div>
    <div class="subprocess-summary-item"><label>Processo Vinculado</label><strong>${esc(process.name)}</strong></div>
    <div class="subprocess-summary-item"><label>Dono do Processo</label><strong>${esc(g.owner)}</strong></div>
    <div class="subprocess-summary-item"><label>Gestor do Processo</label><strong>${esc(g.manager)}</strong></div>
    <div class="subprocess-summary-item"><label>Guardião Técnico-Metodológico</label><strong>${esc(g.guardian)}</strong></div>
    <div class="subprocess-summary-item"><label>Unidade Responsável</label><strong>${esc(g.manager)}</strong></div>
    <div class="subprocess-summary-item full"><label>Principais Executores</label><strong>${esc(g.executors)}</strong></div>
    <div class="subprocess-summary-item full"><label>Sistema(s) Corporativo(s) de Apoio</label><strong>${esc(g.systems)}</strong></div>
    <div class="subprocess-summary-item"><label>Versão</label><strong>2.1</strong></div>
    <div class="subprocess-summary-item"><label>Última Atualização</label><strong>15/05/2026</strong></div>
   </div>
   <section class="subprocess-modal-section"><h3>Entradas e entregas principais</h3><div class="subprocess-flow"><div class="subprocess-flow-item"><strong>Entradas</strong><br>Demandas, requisitos normativos, dados e informações de suporte.</div><div class="subprocess-flow-arrow">→</div><div class="subprocess-flow-item"><strong>Entregas</strong><br>Produto ou serviço concluído, registros de controle e informações para monitoramento.</div></div></section>
   <div class="subprocess-modal-actions"><button type="button" class="btn btn-muted" onclick="alert('Abertura demonstrativa do PDF BPMN do subprocesso ${esc(sp.name)}.')">Abrir BPMN</button><button type="button" class="btn btn-red" onclick="closeSubprocessCatalog();openProcess('${processId}')">Abrir Processo 360°</button></div>
  </div>
 </section>`;
 overlay.addEventListener('click',e=>{if(e.target===overlay)closeSubprocessCatalog()});
 document.body.appendChild(overlay);
 document.body.classList.add('subprocess-modal-open');
 overlay.querySelector('.subprocess-modal-close').focus();
}
function closeSubprocessCatalog(){
 const modal=document.getElementById('subprocessCatalogModal');
 if(modal)modal.remove();
 document.body.classList.remove('subprocess-modal-open');
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSubprocessCatalog();closeProcessCatalog()}});

function resetCatalogFilters(){
 const s=document.getElementById('catalogSearch');if(s){s.value='';s.dispatchEvent(new Event('input'))}
 document.querySelectorAll('.catalog-dimension-tab').forEach((x,i)=>x.classList.toggle('active',i===0));
}

function pathOf(id){const p=[];let cur=id;while(cur){p.unshift(index[cur]);cur=parent[cur]}return p}
function openNode(id){const n=index[id];if(!n)return;renderNode(n)}
function renderCatalogRoot(){ setView('catalog'); }
function renderNode(n){
 const path=pathOf(n.id);
 if(!n.children||!n.children.length){renderDetail(n);return}
 view.innerHTML=`<div class="catalog-header"><div class="breadcrumb"><button onclick="renderCatalogRoot()">Catálogo</button>${path.map((x,i)=>`<span>›</span>${i===path.length-1?`<strong>${x.name}</strong>`:`<button onclick="openNode('${x.id}')">${x.name}</button>`}`).join('')}</div><span style="font-size:12px;color:var(--red);font-weight:800;text-transform:uppercase">${n.type}</span><h1>${n.name}</h1><p>${n.desc||`Selecione um dos itens abaixo para avançar na arquitetura institucional.`}</p></div>
 <div class="catalog-grid">${n.children.map(c=>`<div class="catalog-card" onclick="openNode('${c.id}')"><div class="overline">${c.type}</div><h3>${c.name}</h3><p>${c.children?`Consulte os ${c.children.length} elementos subordinados a este nível.`:'Abra a página institucional do subprocesso.'}</p><div class="meta">Abrir →</div></div>`).join('')}</div>${footerHTML()}`;
}
function renderDetail(n){
 const path=pathOf(n.id);
 view.innerHTML=`<div class="breadcrumb"><button onclick="renderCatalogRoot()">Catálogo</button>${path.map((x,i)=>`<span>›</span>${i===path.length-1?`<strong>${x.name}</strong>`:`<button onclick="openNode('${x.id}')">${x.name}</button>`}`).join('')}</div>
 <div class="detail"><div class="detail-head"><span class="badge">Publicado</span><h1>${n.name}</h1><p style="color:var(--muted);margin:0">Página institucional do subprocesso.</p></div>
 <div class="tabs"><button class="tab active" data-tab="overview">Visão 360°</button><button class="tab" data-tab="bpmn">Modelagem BPMN</button><button class="tab" data-tab="relations">Relacionamentos</button><button class="tab" data-tab="norms">Normativos</button><button class="tab" data-tab="history">Versões</button></div>
 <div class="tab-body" id="tabBody">${overviewHTML(n)}</div></div>${footerHTML()}`;
 document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');document.getElementById('tabBody').innerHTML=({overview:overviewHTML,bpmn:bpmnHTML,relations:relationsHTML,norms:normsHTML,history:historyHTML})[t.dataset.tab](n)});
}
function overviewHTML(n){return `<div class="info-grid">
 <div class="info"><label>Objetivo</label><strong>Padronizar e assegurar a execução controlada do subprocesso ${n.name}.</strong></div>
 <div class="info"><label>Dono do Processo</label><strong>${govOfProcess((n.type==='Processo'?n.id:parent[n.id])).owner}</strong></div>
 <div class="info"><label>Unidade gestora</label><strong>Unidade técnica responsável</strong></div>
 <div class="info"><label>Clientes</label><strong>Unidades do CBMMG e partes interessadas</strong></div>
 <div class="info"><label>Entradas</label><strong>Demandas, requisitos normativos e informações de suporte</strong></div>
 <div class="info"><label>Saídas</label><strong>Entrega concluída e registros para monitoramento</strong></div>
 <div class="info"><label>Indicadores</label><strong>Prazo, conformidade e efetividade da entrega</strong></div>
 <div class="info"><label>Sistemas Corporativos de Apoio</label><strong>${govOfProcess((n.type==='Processo'?n.id:parent[n.id])).systems}</strong></div><div class="info"><label>Guardião Técnico-Metodológico</label><strong>${govOfProcess((n.type==='Processo'?n.id:parent[n.id])).guardian}</strong></div><div class="info"><label>Principais Executores</label><strong>${govOfProcess((n.type==='Processo'?n.id:parent[n.id])).executors}</strong></div>
 <div class="info"><label>Riscos relacionados</label><strong>Integração prevista com o módulo de gestão de riscos</strong></div>
 <div class="info"><label>Versão vigente</label><strong>2.1 • Publicada em 15/05/2026</strong></div></div>`}
function bpmnHTML(n){return `<div class="section-head" style="margin-top:0"><div><h2>Modelagem BPMN</h2><p>Visualização demonstrativa do arquivo exportado do Bizagi.</p></div><button class="btn btn-red">Abrir PDF</button></div><div class="bpmn"><div class="step">Receber demanda</div><div class="arrow">→</div><div class="step">Analisar requisitos</div><div class="arrow">→</div><div class="step">Executar ${n.name}</div><div class="arrow">→</div><div class="step">Registrar entrega</div></div>`}
function relationsHTML(n){return `<div class="section-head" style="margin-top:0"><div><h2>Relacionamentos do subprocesso</h2><p>Visão de encadeamento e integração com outros processos.</p></div></div>
<div class="relation-flow"><div class="relation-node"><small>Processo anterior</small><br><strong>Recebimento e análise da demanda</strong></div><div class="relation-arrow">→</div><div class="relation-node"><small>Processo atual</small><br><strong>${n.name}</strong></div><div class="relation-arrow">→</div><div class="relation-node"><small>Processos relacionados</small><br><strong>Gestão documental, riscos e desempenho</strong></div></div>`}
function normsHTML(){return `<table class="table"><thead><tr><th>Normativo</th><th>Tipo</th><th>Situação</th></tr></thead><tbody><tr><td>Metodologia de Gestão de Processos do CBMMG</td><td>Diretriz</td><td><span class="badge">Vigente</span></td></tr><tr><td>Manual técnico da unidade gestora</td><td>Manual</td><td><span class="badge">Vigente</span></td></tr></tbody></table>`}
function historyHTML(){return `<table class="table"><thead><tr><th>Versão</th><th>Data</th><th>Responsável</th></tr></thead><tbody><tr><td>2.1</td><td>15/05/2026</td><td>Guardião da Metodologia</td></tr><tr><td>2.0</td><td>04/02/2026</td><td>Unidade gestora</td></tr></tbody></table>`}


let selectedProcessId='';
function processRecords(){
 const records=[];
 architecture.forEach(d=>d.children.forEach(m=>m.children.forEach(p=>records.push({dimension:d,macro:m,process:p,gov:govOfProcess(p.id)}))));
 return records;
}
function processAccent(d){return d.color==='red'?'#a81720':d.color==='green'?'#287143':'#135a9c'}
function openArchitectureDimension(dimensionId){
 setView('architecture');
 const selector=document.getElementById('archDimension');
 if(selector){selector.value=dimensionId;paintArchitecture();}
}
function openProcess(processId){
 const p=index[processId];
 if(!p)return;
 selectedProcessId=processId;
 closeProcessCatalog();
 const overlay=document.createElement('div');
 overlay.id='processCatalogDrawer';
 overlay.className='process-drawer-backdrop';
 overlay.setAttribute('role','presentation');
 overlay.innerHTML=`<aside class="process-drawer" role="dialog" aria-modal="true" aria-labelledby="processDrawerTitle">
  <div class="process-drawer-topbar"><div><div class="eyebrow">Catálogo Institucional</div><strong id="processDrawerTitle">Visão Processo 360°</strong></div><button type="button" class="process-drawer-close" onclick="closeProcessCatalog()" aria-label="Fechar Processo 360°">×</button></div>
  <div class="process-drawer-content">${process360HTML(p)}</div>
 </aside>`;
 overlay.addEventListener('click',e=>{if(e.target===overlay)closeProcessCatalog()});
 document.body.appendChild(overlay);
 document.body.classList.add('process-drawer-open');
 overlay.querySelector('.process-drawer-close').focus();
}
function closeProcessCatalog(){
 const drawer=document.getElementById('processCatalogDrawer');
 if(drawer)drawer.remove();
 document.body.classList.remove('process-drawer-open');
}
function renderProcesses(){
 const records=processRecords();
 view.innerHTML=`<div class="processes-page">
  <section class="processes-head"><div><div class="breadcrumb"><button onclick="setView('home')">Página inicial</button><span>›</span><strong>Processos</strong></div><h1>Consulta Institucional de Processos</h1><p>Localize um processo por nome, posição na Cadeia de Valor ou responsabilidade. A visão 360° é apresentada na própria página, sem criar uma etapa adicional de navegação.</p></div><div class="processes-head-actions"><div class="processes-head-meta"><strong>${records.length}</strong>processos disponíveis para consulta no protótipo</div><button class="btn btn-red" onclick="setView('wizard')">＋ Cadastrar processo modelado</button></div></section>
  <section class="process-filterbar">
   <div class="search-field"><label>Pesquisar processo</label><input id="processSearch" placeholder="Digite o nome, macroprocesso, unidade ou sistema"></div>
   <div><label>Dimensão</label><select id="processDimension"><option value="">Todas</option>${architecture.map(d=>`<option value="${d.id}">${d.name}</option>`).join('')}</select></div>
   <div><label>Macroprocesso</label><select id="processMacro"><option value="">Todos</option></select></div>
   <div><label>Dono do processo</label><select id="processOwner"><option value="">Todos</option>${[...new Set(records.map(r=>r.gov.owner))].sort().map(x=>`<option>${x}</option>`).join('')}</select></div>
   <button class="btn btn-muted" onclick="resetProcessFilters()">Limpar</button>
  </section>
  <section class="process-shell"><aside class="process-results"><div class="process-results-head"><strong>Resultados</strong><span id="processResultCount"></span></div><div class="process-result-list" id="processResultList"></div></aside><main class="process-detail-zone" id="processDetailZone"></main></section>
 </div>${footerHTML()}`;
 ['processSearch','processDimension','processMacro','processOwner'].forEach(id=>document.getElementById(id).addEventListener(id==='processSearch'?'input':'change',()=>{if(id==='processDimension')updateProcessMacroOptions();paintProcessDirectory()}));
 updateProcessMacroOptions();
 paintProcessDirectory();
}
function updateProcessMacroOptions(){
 const dimensionId=document.getElementById('processDimension')?.value||'';
 const macroSelect=document.getElementById('processMacro'); if(!macroSelect)return;
 const previous=macroSelect.value;
 const macros=architecture.filter(d=>!dimensionId||d.id===dimensionId).flatMap(d=>d.children);
 macroSelect.innerHTML=`<option value="">Todos</option>${macros.map(m=>`<option value="${m.id}">${m.name}</option>`).join('')}`;
 if(macros.some(m=>m.id===previous))macroSelect.value=previous;
}
function filteredProcessRecords(){
 const q=(document.getElementById('processSearch')?.value||'').trim().toLowerCase();
 const d=document.getElementById('processDimension')?.value||'';
 const m=document.getElementById('processMacro')?.value||'';
 const o=document.getElementById('processOwner')?.value||'';
 return processRecords().filter(r=>(!d||r.dimension.id===d)&&(!m||r.macro.id===m)&&(!o||r.gov.owner===o)&&(!q||[r.process.name,r.macro.name,r.dimension.name,r.gov.owner,r.gov.manager,r.gov.systems].join(' ').toLowerCase().includes(q)));
}
function resetProcessFilters(){
 ['processSearch','processDimension','processMacro','processOwner'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''});updateProcessMacroOptions();paintProcessDirectory();
}
function paintProcessDirectory(){
 const records=filteredProcessRecords();
 const count=document.getElementById('processResultCount');if(count)count.textContent=`${records.length} encontrado(s)`;
 if(selectedProcessId&&!records.some(r=>r.process.id===selectedProcessId))selectedProcessId='';
 const list=document.getElementById('processResultList');
 list.innerHTML=records.length?records.map(r=>`<button class="process-result ${selectedProcessId===r.process.id?'active':''}" style="--process-accent:${processAccent(r.dimension)}" onclick="selectProcess('${r.process.id}')"><div class="result-context">${r.dimension.name} · ${r.macro.name}</div><h3>${r.process.name}</h3><div class="result-meta"><b>${r.gov.owner}</b><span>${(r.process.children||[]).length} subprocesso(s) ›</span></div></button>`).join(''):`<div class="empty-state" style="border:0"><strong>Nenhum processo encontrado.</strong><br>Revise os filtros informados.</div>`;
 const detail=document.getElementById('processDetailZone');
 if(selectedProcessId&&index[selectedProcessId])detail.innerHTML=process360HTML(index[selectedProcessId]);
 else detail.innerHTML=`<div class="process-empty"><div class="process-empty-inner"><div class="process-empty-icon">◎</div><h2>Selecione um processo</h2><p>Os resultados permanecem disponíveis à esquerda. Ao selecionar um processo, esta área apresenta sua visão institucional completa, com contexto, subprocessos, governança, sistemas, normativos e histórico.</p></div></div>`;
}
function selectProcess(id){selectedProcessId=id;paintProcessDirectory()}
function process360HTML(p){
 const path=pathOf(p.id),d=path[0],m=path[1],g=govOfProcess(p.id),subs=p.children||[],st=mappingStatus(p.id);
 return `<article class="process360"><header class="process360-head"><div class="process360-context"><span>${d.name}</span><span>›</span><span>${m.name}</span><span>›</span><strong>Processo</strong></div><div class="process360-title-row"><div><h2>${p.name}</h2><p>${p.desc||`Conjunto coordenado de entregas e responsabilidades relacionadas a ${p.name.toLowerCase()}.`}</p></div><span class="process360-status">${st.label}</span></div><div class="process360-facts"><div class="process360-fact"><label>Dono</label><strong>${g.owner}</strong></div><div class="process360-fact"><label>Gestor</label><strong>${g.manager}</strong></div><div class="process360-fact"><label>Subprocessos</label><strong>${subs.length} cadastrados</strong></div><div class="process360-fact"><label>Versão vigente</label><strong>2.1 · 15/05/2026</strong></div></div></header>
 <nav class="process360-tabs"><button class="process360-tab active" onclick="changeProcess360Tab(this,'summary','${p.id}')">Visão geral</button><button class="process360-tab" onclick="changeProcess360Tab(this,'subprocesses','${p.id}')">Modelagem BPMN</button><button class="process360-tab" onclick="changeProcess360Tab(this,'governance','${p.id}')">Governança</button><button class="process360-tab" onclick="changeProcess360Tab(this,'references','${p.id}')">Normativos e sistemas</button><button class="process360-tab" onclick="changeProcess360Tab(this,'history','${p.id}')">Histórico</button></nav><div class="process360-body" id="process360Body">${process360TabHTML('summary',p)}</div></article>`;
}
function changeProcess360Tab(button,tab,id){button.parentElement.querySelectorAll('.process360-tab').forEach(x=>x.classList.remove('active'));button.classList.add('active');document.getElementById('process360Body').innerHTML=process360TabHTML(tab,index[id])}
function process360TabHTML(tab,p){
 const g=govOfProcess(p.id),subs=p.children||[];
 if(tab==='subprocesses')return `<div class="p360-section-title"><div><h3>Modelagem BPMN e subprocessos</h3><p>Desdobramento operacional do processo e acesso à representação BPMN.</p></div><button class="btn btn-muted" onclick="alert('Abertura demonstrativa do PDF consolidado do Bizagi.')">Abrir modelo BPMN</button></div><div class="subprocess-directory">${subs.map((s,i)=>`<div class="subprocess-directory-item"><span class="subprocess-number">${String(i+1).padStart(2,'0')}</span><div><strong>${s.name}</strong><small>Subprocesso vinculado a ${p.name}</small></div><button onclick="renderSubprocessPreview('${s.id}')">Consultar</button></div>`).join('')||'<div class="empty-state">Nenhum subprocesso cadastrado.</div>'}</div>`;
 if(tab==='governance')return `<div class="p360-section-title"><div><h3>Governança e responsabilidades</h3><p>Papéis institucionais associados ao processo.</p></div></div><div class="p360-grid"><div class="p360-card"><label>Dono do processo</label><strong>${g.owner}</strong></div><div class="p360-card"><label>Gestor do processo</label><strong>${g.manager}</strong></div><div class="p360-card"><label>Guardião técnico-metodológico</label><strong>${g.guardian}</strong></div><div class="p360-card"><label>Principais executores</label><strong>${g.executors}</strong></div></div>`;
 if(tab==='references')return `<div class="p360-section-title"><div><h3>Referenciais e suporte corporativo</h3><p>Normativos principais, sistemas e documentos associados.</p></div></div><div class="p360-grid"><div class="p360-card"><label>Sistemas corporativos</label><strong>${g.systems}</strong></div><div class="p360-card"><label>Normativo principal</label><strong>Diretriz institucional aplicável ao processo</strong></div><div class="p360-card"><label>Documentação técnica</label><strong>Manual, modelos e orientações da unidade gestora</strong></div><div class="p360-card"><label>Integrações previstas</label><strong>Indicadores, riscos e repositório documental</strong></div></div>`;
 if(tab==='history')return `<div class="p360-section-title"><div><h3>Histórico de versões</h3><p>Rastreabilidade das alterações e publicações do processo.</p></div></div><table class="table"><thead><tr><th>Versão</th><th>Data</th><th>Situação</th><th>Responsável</th></tr></thead><tbody><tr><td>2.1</td><td>15/05/2026</td><td><span class="badge">Vigente</span></td><td>Guardião da metodologia</td></tr><tr><td>2.0</td><td>04/02/2026</td><td>Substituída</td><td>Unidade gestora</td></tr></tbody></table>`;
 return `<div class="p360-section-title"><div><h3>Visão geral do processo</h3><p>Síntese institucional para compreensão rápida do propósito e das entregas.</p></div></div><div class="p360-grid"><div class="p360-card"><label>Objetivo</label><strong>Assegurar a execução coordenada e padronizada do processo ${p.name}, em conformidade com as diretrizes institucionais.</strong></div><div class="p360-card"><label>Escopo</label><strong>Compreende os subprocessos, responsabilidades, entradas e entregas vinculados ao processo.</strong></div><div class="p360-card"><label>Entradas principais</label><strong>Demandas institucionais, requisitos normativos, dados e recursos de suporte.</strong></div><div class="p360-card"><label>Saídas principais</label><strong>Entregas concluídas, registros de controle e informações para monitoramento.</strong></div><div class="p360-card"><label>Clientes e partes interessadas</label><strong>Unidades do CBMMG, órgãos parceiros e sociedade, conforme a natureza da entrega.</strong></div><div class="p360-card"><label>Desempenho</label><strong>Monitoramento por prazo, conformidade, qualidade e efetividade das entregas.</strong></div></div><div class="p360-actionbar"><button class="btn btn-muted" onclick="alert('Exportação demonstrativa da ficha do processo.')">Exportar ficha</button><button class="btn btn-red" onclick="changeProcess360Tab(document.querySelectorAll('.process360-tab')[1],'subprocesses','${p.id}')">Ver subprocessos</button></div>`;
}
function renderSubprocessPreview(id){
 const s=index[id],p=index[parent[id]];if(!s||!p)return;
 document.getElementById('process360Body').innerHTML=`<div class="p360-section-title"><div><h3>${s.name}</h3><p>Detalhamento do subprocesso dentro da visão 360° do processo ${p.name}.</p></div><button class="btn btn-muted" onclick="document.querySelectorAll('.process360-tab')[1].click()">Voltar aos subprocessos</button></div>${overviewHTML(s)}<div class="p360-actionbar"><button class="btn btn-red" onclick="alert('Abertura demonstrativa do PDF BPMN deste subprocesso.')">Abrir BPMN</button></div>`;
}

let architectureViewMode='panorama';
function renderArchitecture(){
 view.innerHTML=`<div class="panorama-head"><div><div class="breadcrumb"><button onclick="setView('home')">Página inicial</button><span>›</span><strong>Arquitetura Corporativa</strong></div><h1>Visão Panorâmica da Arquitetura de Processos</h1><p>Visualize, em uma única tela, como as dimensões, os macroprocessos e os processos se organizam na Cadeia de Valor do CBMMG.</p></div><div class="panorama-actions"><button class="btn btn-outline" onclick="resetArchitectureFilters()">Limpar filtros</button><button class="btn btn-outline" onclick="alert('Exportação demonstrativa do protótipo.')">↓ Exportar</button></div></div>
 <div class="panorama-toolbar"><div class="panorama-search"><label>Localizar na arquitetura</label><input id="archSearch" placeholder="Digite o nome de um macroprocesso ou processo"></div><div><label>Exibir dimensão</label><select id="archDimension"><option value="">Todas as dimensões</option>${architecture.map(d=>`<option value="${d.id}">${d.name}</option>`).join('')}</select></div><div class="panorama-legend"><span><i class="legend-dot managerial"></i>Gerenciais</span><span><i class="legend-dot finalistic"></i>Finalísticos</span><span><i class="legend-dot support"></i>Suporte</span></div></div>
 <div id="archOverview"></div><div id="archContent"></div><p class="arch-note">A visão panorâmica apresenta a estrutura institucional. Os detalhes de governança, subprocessos, normativos e sistemas estão disponíveis no Processo 360° integrado ao Catálogo Institucional.</p>${footerHTML()}`;
 ['archSearch','archDimension'].forEach(id=>document.getElementById(id).addEventListener(id==='archSearch'?'input':'change',paintArchitecture));
 paintArchitecture();
}
function resetArchitectureFilters(){document.getElementById('archSearch').value='';document.getElementById('archDimension').value='';paintArchitecture()}
function filteredArchitectureRows(){
 const q=(document.getElementById('archSearch')?.value||'').trim().toLowerCase(),d=document.getElementById('archDimension')?.value||'';
 return hierarchyRows().filter(r=>(!d||r.dimension.id===d)&&(!q||[r.dimension.name,r.macro.name,r.process.name].join(' ').toLowerCase().includes(q)));
}
function paintArchitecture(){
 const rows=filteredArchitectureRows();
 const overview=document.getElementById('archOverview');
 if(overview){
  const dimensions=[...new Set(rows.map(r=>r.dimension.id))].length;
  const macros=[...new Set(rows.map(r=>r.macro.id))].length;
  const processes=[...new Set(rows.map(r=>r.process.id))].length;
  overview.innerHTML=rows.length?`<div class="panorama-summary"><span><strong>${dimensions}</strong> dimensão(ões) exibida(s)</span><span><strong>${macros}</strong> macroprocesso(s)</span><span><strong>${processes}</strong> processo(s)</span><small>Clique em um processo para abrir sua visão 360°.</small></div>`:'';
 }
 document.getElementById('archContent').innerHTML=rows.length?architecturePanoramaHTML(rows):`<div class="empty-state"><strong>Nenhum item encontrado.</strong><br>Revise a dimensão selecionada ou o termo pesquisado.</div>`;
}
function architecturePanoramaHTML(rows){
 const palette={red:{accent:'#a81720',soft:'#fff4f4',label:'Gerenciais'},blue:{accent:'#135a9c',soft:'#f2f7fc',label:'Finalísticos'},green:{accent:'#287143',soft:'#f2f8f4',label:'Suporte'}};
 const visibleDimensions=architecture.filter(d=>rows.some(r=>r.dimension.id===d.id));
 return `<div class="panorama-board">${visibleDimensions.map(d=>{
  const dr=rows.filter(r=>r.dimension.id===d.id),theme=palette[d.color]||palette.blue;
  const macros=d.children.filter(m=>dr.some(r=>r.macro.id===m.id));
  const processCount=new Set(dr.map(r=>r.process.id)).size;
  return `<section class="dimension-lane" style="--lane:${theme.accent};--lane-soft:${theme.soft}">
   <header class="dimension-lane-head"><div><span class="dimension-kicker">Dimensão</span><h2>${d.name}</h2><p>${d.desc||''}</p></div><div class="dimension-count"><strong>${macros.length}</strong><span>macroprocessos</span><strong>${processCount}</strong><span>processos</span></div></header>
   <div class="macro-grid">${macros.map(m=>{
    const processes=m.children.filter(p=>dr.some(r=>r.process.id===p.id));
    return `<article class="macro-card"><div class="macro-card-head"><div><span>Macroprocesso</span><h3>${m.name}</h3></div><b>${processes.length}</b></div><div class="process-stack">${processes.map(p=>`<button class="process-chip" onclick="openProcess('${p.id}')"><span>${p.name}</span><i>↗</i></button>`).join('')}</div></article>`;
   }).join('')}</div>
  </section>`;
 }).join('')}</div>`;
}
function renderGovernance(){
 view.innerHTML=`<div class="catalog-header"><div class="breadcrumb"><button onclick="setView('home')">Página inicial</button><span>›</span><strong>Governança de Processos</strong></div><h1>Governança de Processos</h1><p>Acompanhamento do ciclo de validação, aprovação metodológica e publicação dos processos institucionais.</p></div>
 <div class="status-grid">
  <div class="status-card"><span class="badge">Em elaboração</span><strong>8</strong><small>Modelagens em construção</small></div>
  <div class="status-card"><span class="badge" style="background:#fff3cd;color:#7a5a00">Validação</span><strong>5</strong><small>Aguardando unidades interessadas</small></div>
  <div class="status-card"><span class="badge" style="background:#e8eefc;color:#2649a2">Aprovação</span><strong>3</strong><small>Aguardando dono do processo</small></div>
  <div class="status-card"><span class="badge">Publicação</span><strong>18</strong><small>Subprocessos publicados</small></div>
 </div>
 <div class="section-head"><div><h2>Fluxo de governança</h2><p>Sequência proposta para implantação.</p></div></div>
 <div class="workflow">
  <div class="workflow-step"><div class="num">1</div><strong>Modelagem</strong><p>Unidade elabora o modelo no Bizagi e registra os metadados.</p></div>
  <div class="workflow-step"><div class="num">2</div><strong>Validação</strong><p>Unidades interessadas analisam interfaces e responsabilidades.</p></div>
  <div class="workflow-step"><div class="num">3</div><strong>Aprovação</strong><p>O dono do processo aprova o conteúdo institucional.</p></div>
  <div class="workflow-step"><div class="num">4</div><strong>Análise metodológica</strong><p>O guardião verifica arquitetura, padrão e completude.</p></div>
  <div class="workflow-step"><div class="num">5</div><strong>Publicação</strong><p>A versão vigente é disponibilizada no Catálogo.</p></div>
 </div>${footerHTML()}`;
}
function renderMine(){view.innerHTML=`<div class="catalog-header"><h1>Meus Processos</h1><p>Acompanhe processos favoritos, recentes e sob sua responsabilidade.</p></div><div class="cards cards-4" style="margin-top:18px">${['Planejamento da Contratação','Inventário Patrimonial','Controle dos Ressarcimentos','Modelagem de Processos'].map((x,i)=>`<div class="catalog-card" onclick="openNode('${['plancontr','inventario','controleress','modelagem'][i]}')"><div class="overline">${i<2?'Favorito':'Em acompanhamento'}</div><h3>${x}</h3><p>Última atualização registrada no protótipo.</p><div class="meta">Abrir →</div></div>`).join('')}</div>${footerHTML()}`}
function renderDashboard(){view.innerHTML=`<div class="catalog-header"><h1>Painéis Gerenciais</h1><p>Visão gerencial simplificada da cobertura e do estágio de publicação dos processos.</p></div><div class="cards cards-4" style="margin-top:18px">${[['Macroprocessos','12'],['Processos','31'],['Subprocessos','65'],['Publicados','18']].map(x=>`<div class="catalog-card"><div class="overline">Indicador</div><h3 style="font-size:32px">${x[1]}</h3><p>${x[0]}</p></div>`).join('')}</div>${footerHTML()}`}
function renderNorms(){view.innerHTML=`<div class="catalog-header"><h1>Normativos e Metodologia</h1><p>Documentos orientadores da gestão por processos no CBMMG.</p></div><div class="catalog-grid"><div class="catalog-card"><div class="overline">Manual</div><h3>Metodologia de Gestão de Processos</h3><p>Diretrizes para identificação, modelagem, validação e publicação.</p><div class="meta">Consultar →</div></div><div class="catalog-card"><div class="overline">Orientação</div><h3>Padrão de Modelagem BPMN</h3><p>Regras institucionais para modelagem no Bizagi.</p><div class="meta">Consultar →</div></div></div>${footerHTML()}`}
function renderAbout(){view.innerHTML=`<div class="catalog-header"><h1>Sobre o Portal</h1><p>O Portal Corporativo de Processos organiza a Cadeia de Valor do CBMMG e facilita o acesso às informações sobre processos e subprocessos.</p></div>${footerHTML()}`}
function renderFAQ(){view.innerHTML=`<div class="catalog-header"><h1>Perguntas Frequentes</h1><p>Respostas rápidas para dúvidas sobre navegação e gestão por processos.</p></div><div class="catalog-grid"><div class="catalog-card"><h3>O que é um macroprocesso?</h3><p>É um conjunto amplo de processos relacionados a uma entrega institucional relevante.</p></div><div class="catalog-card"><h3>Onde ficam as atividades?</h3><p>As atividades e tarefas permanecem representadas no modelo BPMN, não na árvore do catálogo.</p></div><div class="catalog-card"><h3>Quem aprova um processo?</h3><p>O dono do processo aprova o conteúdo antes da análise metodológica e da publicação.</p></div><div class="catalog-card"><h3>Como solicitar alteração?</h3><p>Use o módulo Nova Modelagem ou a função de revisão na página do subprocesso.</p></div></div>${footerHTML()}`}

function renderWizard(){
 const labels=['Identificação','Arquitetura','Metadados','BPMN','Revisão'];
 view.innerHTML=`<div class="catalog-header"><h1>Cadastrar Processo Modelado</h1><p>Assistente integrado ao Catálogo para registrar o processo, sua governança e o arquivo de modelagem BPMN antes do encaminhamento para validação.</p></div><div class="catalog-status-note"><strong>Situação inicial da modelagem:</strong> <span class="status-tag status-notstarted">Não iniciado</span></div><div class="wizard" style="margin-top:18px"><div class="wizard-steps">${labels.map((x,i)=>`<div class="wizard-step ${wizardStep===i+1?'active':''}" onclick="goWizard(${i+1})">${i+1}. ${x}</div>`).join('')}</div><div class="form-card">${wizardStepHTML()}</div></div>${footerHTML()}`;
 bindWizard();
}
function wizardStepHTML(){
 if(wizardStep===1)return `<div class="form-grid"><div class="field"><label>Nome do processo mapeado *</label><input id="wTitulo" value="${wizardData.titulo}" placeholder="Ex.: Planejamento da Contratação"></div><div class="field"><label>Unidade proponente *</label><select id="wUnidade"><option>DLF/ACF</option><option>SDAL</option><option>SDTS</option><option>DRH</option></select></div><div class="field" style="grid-column:1/-1"><label>Justificativa *</label><textarea id="wJustificativa">${wizardData.justificativa||''}</textarea></div></div>${wizardFooter(false,true)}`;
 if(wizardStep===2)return `<div class="form-grid"><div class="field"><label>Dimensão *</label><select id="wDimensao"><option value="">Selecione</option>${architecture.map(d=>`<option value="${d.id}" ${wizardData.dimensao===d.id?'selected':''}>${d.name}</option>`).join('')}</select></div><div class="field"><label>Macroprocesso *</label><select id="wMacro"><option value="">Selecione</option>${(index[wizardData.dimensao]?.children||[]).map(n=>`<option value="${n.id}" ${wizardData.macroprocesso===n.id?'selected':''}>${n.name}</option>`).join('')}</select></div><div class="field"><label>Processo *</label><select id="wProcesso"><option value="">Selecione</option>${(index[wizardData.macroprocesso]?.children||[]).map(n=>`<option value="${n.id}" ${wizardData.processo===n.id?'selected':''}>${n.name}</option>`).join('')}</select></div></div>${wizardFooter(true,true)}`;
 if(wizardStep===3)return `<div class="form-grid"><div class="field" style="grid-column:1/-1"><label>Objetivo *</label><textarea id="wObjetivo">${wizardData.objetivo}</textarea></div><div class="field" style="grid-column:1/-1"><label>Escopo *</label><textarea id="wEscopo">${wizardData.escopo}</textarea></div><div class="field"><label>Dono do processo *</label><input id="wDono" value="${wizardData.dono}"></div><div class="field"><label>Gestor do Processo *</label><input id="wUnidadeGestora" value="${wizardData.unidadeGestora}"></div><div class="field"><label>Guardião Técnico-Metodológico *</label><input id="wGuardiao" value="${wizardData.guardiao}"></div><div class="field"><label>Principais Executores *</label><input id="wExecutores" value="${wizardData.executores}"></div><div class="field" style="grid-column:1/-1"><label>Sistemas Corporativos de Apoio</label><input id="wSistemas" value="${wizardData.sistemas}"></div></div>${wizardFooter(true,true)}`;
 if(wizardStep===4)return `<div class="field"><label>Arquivo PDF do Bizagi *</label><input id="wArquivo" type="file" accept=".pdf"><p style="color:var(--muted)">${wizardData.arquivo||'Nenhum arquivo selecionado'}</p></div>${wizardFooter(true,true)}`;
 return `<div class="catalog-card"><div class="overline">Revisão final</div><h3>${wizardData.titulo||'Título não informado'}</h3><p><strong>Unidade:</strong> ${wizardData.unidade}<br><strong>Dimensão:</strong> ${index[wizardData.dimensao]?.name||'—'}<br><strong>Macroprocesso:</strong> ${index[wizardData.macroprocesso]?.name||'—'}<br><strong>Processo:</strong> ${index[wizardData.processo]?.name||'—'}<br><strong>Arquivo:</strong> ${wizardData.arquivo||'—'}</p></div>${wizardFooter(true,false,true)}`;
}
function wizardFooter(back,next,submit=false){return `<div class="actions"><div>${back?'<button class="btn btn-muted" onclick="wizardBack()">Voltar</button>':''}</div><div>${next?'<button class="btn btn-red" onclick="wizardNext()">Avançar</button>':''}${submit?'<button class="btn btn-red" onclick="submitWizard()">Encaminhar</button>':''}</div></div>`}
function bindWizard(){
 const bind=(id,key,event='input')=>{const el=document.getElementById(id);if(el)el.addEventListener(event,e=>wizardData[key]=e.target.value)};
 bind('wTitulo','titulo');bind('wUnidade','unidade','change');bind('wJustificativa','justificativa');bind('wObjetivo','objetivo');bind('wEscopo','escopo');bind('wDono','dono');bind('wUnidadeGestora','unidadeGestora');bind('wGuardiao','guardiao');bind('wExecutores','executores');bind('wSistemas','sistemas');
 const d=document.getElementById('wDimensao');if(d)d.onchange=e=>{wizardData.dimensao=e.target.value;wizardData.macroprocesso='';wizardData.processo='';renderWizard()}
 const m=document.getElementById('wMacro');if(m)m.onchange=e=>{wizardData.macroprocesso=e.target.value;wizardData.processo='';renderWizard()}
 const p=document.getElementById('wProcesso');if(p)p.onchange=e=>wizardData.processo=e.target.value;
 const f=document.getElementById('wArquivo');if(f)f.onchange=e=>{wizardData.arquivo=e.target.files?.[0]?.name||'';renderWizard()}
}
function wizardNext(){if(wizardStep===1&&(!wizardData.titulo.trim()||!wizardData.justificativa.trim()))return alert('Preencha título e justificativa.');if(wizardStep===2&&(!wizardData.dimensao||!wizardData.macroprocesso||!wizardData.processo))return alert('Selecione dimensão, macroprocesso e processo.');if(wizardStep===3&&(!wizardData.objetivo.trim()||!wizardData.escopo.trim()||!wizardData.dono.trim()||!wizardData.unidadeGestora.trim()||!wizardData.guardiao.trim()||!wizardData.executores.trim()))return alert('Preencha os metadados obrigatórios.');if(wizardStep===4&&!wizardData.arquivo)return alert('Selecione o arquivo PDF.');wizardStep++;renderWizard()}
function wizardBack(){wizardStep--;renderWizard()}
function goWizard(n){if(n<=wizardStep){wizardStep=n;renderWizard()}}
function submitWizard(){view.innerHTML=`<div class="catalog-header" style="text-align:center;padding:55px"><div style="font-size:52px;color:#287143">✓</div><h1>Modelagem encaminhada</h1><p>O item foi encaminhado, de forma simulada, para validação técnica.</p><button class="btn btn-red" onclick="setView('mine')">Ir para Meus Processos</button></div>${footerHTML()}`}

globalSearch?.addEventListener('keydown',e=>{if(e.key==='Enter'){const q=e.target.value.toLowerCase();const result=processRecords().find(r=>[r.process.name,r.macro.name,r.dimension.name].join(' ').toLowerCase().includes(q));if(result)openProcess(result.process.id);else alert('Nenhum processo encontrado no protótipo.')}})
try {
  const initialView = new URLSearchParams(window.location.search).get('view');
  if (initialView && ['home','catalog','processes','wizard','dashboard','norms','governance','faq','mine'].includes(initialView)) setView(initialView==='processes'?'catalog':initialView);
  else renderHome();
} catch (error) {
  console.error(error);
  view.innerHTML = `<div class="empty-state"><strong>Não foi possível carregar o protótipo.</strong><br>Detalhe técnico: ${error.message}</div>`;
}
