# Roteiro de Entrevista — Eduardo Edson Batista Cordeiro Alves
**Data:** 11/07/2026

---

## 1. Abertura ("Fale sobre você" / "Conte-me seu percurso")

Estrutura sugerida (60–90 segundos): presente → passado relevante → por que está aqui.

> "Sou Engenheiro de Software FullStack Sênior, com mais de 10 anos de experiência em desenvolvimento web e mobile. Atualmente trabalho na Glintt Global, atendendo o cliente Galp, desenvolvendo sistemas fullstack com Next.js, NestJS e Prisma sobre MongoDB, PostgreSQL e MySQL, além de automações em Python na AWS.
>
> Antes disso, passei por um contrato via TEKsystems atendendo a Vodafone UK, na migração da plataforma de gestão de ciclo de vida de dispositivos (DLM) para React, e por três anos na Integer Consulting, atendendo Vodafone Portugal e Pairpoint em projetos de migração de sistemas legados e desenvolvimento de produtos.
>
> Minha base foi construída no INMET, no Brasil, onde passei cinco anos modernizando sistemas públicos de meteorologia, migrando de PHP para React e Node.js, e desenvolvendo APIs e aplicativos usados por milhares de pessoas.
>
> Gosto de ambientes ágeis, migração de sistemas legados e resolver problemas reais — e estou buscando [inserir motivo específico da vaga/empresa]."

---

## 2. Pontos-chave por experiência (para usar quando perguntarem sobre cargos específicos)

### Glintt Global (client: Galp) | Nov 2025 – Presente
- Desenvolvimento fullstack com Next.js e NestJS, ORM com Prisma em três bancos diferentes (MongoDB, PostgreSQL, MySQL).
- Automação de backend com Python Lambdas na AWS, processamento de arquivos via S3.
- Gestão de entrega via Jira e documentação em Confluence.
- *Se perguntarem "o que você entrega no dia a dia":* fale sobre a rotina de sprint, colaboração com o time e exemplos concretos de features recentes (personalize com um caso real antes da entrevista).

### TEKsystems (Contrato — Vodafone UK) | Jun–Out 2025
- Consultor Frontend em contrato, migração do sistema DLM (Device Lifecycle Management) para React.
- Internacionalização da plataforma, incluindo versão em alemão.
- Integração de autenticação via Azure AD.
- *Ponto de atenção:* deixe claro que foi um contrato de prazo definido (staffing), não churn — evita a leitura errada de instabilidade.

### Integer Consulting | Mai 2022 – Jun 2025
- Vodafone Portugal: componentes reutilizáveis com AEM e Vue.js; depois, scripts Python para migração de páginas AEM.
- Pairpoint: sistema de vitrine de produtos (React/TypeScript + Tornado/Python), implantado em AWS EC2.
- Dois clientes, dois times, ambos em Scrum/Kanban.

### INMET — Instituto Nacional de Meteorologia | Mai 2017 – Mar 2022
- Migração de sistemas legados em PHP para React e Node.js.
- Aplicativo mobile (React Native) para previsão do tempo.
- APIs REST públicas para dados meteorológicos.
- Scripts Python para migração de dados históricos preservando integridade.

### Interlegis (Senado Federal) e BEPiD (Apple)
- Base sólida: LMS em Django/Python, squad de Scrum de 5 pessoas, e programa de formação iOS da Apple (Objective-C) — mostra trajetória desde cedo na carreira.

---

## 3. Perguntas comportamentais prováveis (método STAR: Situação, Tarefa, Ação, Resultado)

1. **"Conte sobre um desafio técnico difícil que você resolveu."**
   > "No INMET, o instituto de meteorologia do governo brasileiro, herdei sistemas legados escritos em PHP que já não acompanhavam o volume de acessos nem a necessidade de manutenção. A tarefa era migrar essas plataformas para React e Node.js sem interromper o serviço público de previsão do tempo, usado diariamente por milhares de pessoas. Minha ação foi mapear módulo por módulo, priorizando as APIs mais críticas primeiro, construindo as novas APIs REST em paralelo ao sistema antigo e migrando os dados históricos com scripts Python que validavam a integridade antes de cada corte. O resultado foi uma transição sem downtime perceptível para o usuário final, com um sistema mais fácil de manter e evoluir depois."

2. **"Como você lida com prazos apertados ou mudança de escopo?"**
   > "Na Integer Consulting, tanto no time da Vodafone Portugal quanto no da Pairpoint, trabalhávamos com sprints curtos de três a quatro semanas em Scrum. Quando o escopo mudava no meio do sprint, minha abordagem era sempre alinhar com o Product Owner o que era realmente urgente, quebrar a entrega em partes menores que pudessem ser validadas mais cedo, e ser transparente sobre o que não caberia no prazo em vez de comprometer qualidade silenciosamente."

3. **"Descreva uma vez que você trabalhou com um time novo ou em outro país."**
   > "No contrato via TEKsystems para a Vodafone UK, trabalhei 100% remoto com um time no Reino Unido, migrando o sistema DLM para React e depois entregando a internacionalização da plataforma, incluindo a versão em alemão. O desafio ali não era só técnico, mas de comunicação assíncrona e fuso horário — passei a documentar decisões por escrito no Confluence e usar PRs bem descritos para reduzir a dependência de reuniões síncronas."

4. **"Por que tantas mudanças de empresa recentemente?"**
   > "Boa parte dessas mudanças recentes vieram de contratos de consultoria e staffing, não de decisão pessoal de sair. Na TEKsystems e na Integer Consulting, eu era alocado a clientes específicos com prazos definidos — quando o contrato ou o projeto terminava, eu buscava o próximo desafio. Isso me deu uma exposição grande a diferentes stacks, times e domínios em pouco tempo, o que hoje é uma vantagem: me adapto rápido a contextos novos."

5. **"Qual seu maior ponto fraco?"**
   > "Historicamente eu tendia a só documentar depois que o código já estava pronto, o que às vezes dificultava o handoff pra outras pessoas do time. Percebi isso claramente no INMET, onde sistemas antigos tinham pouca documentação e isso tornava a migração mais lenta. Hoje eu tento documentar decisões arquiteturais logo no início, mesmo que de forma simples, exatamente pra não repetir esse problema nos projetos que lidero."

---

## 4. Perguntas técnicas prováveis (com resposta sugerida)

1. **Diferenças entre REST e decisões de arquitetura que você já tomou.**
   > "Eu penso em REST em camadas: recursos bem definidos, verbos HTTP semânticos, e versionamento explícito quando a API é consumida por múltiplos clientes. Na Glintt Global, por exemplo, as APIs que construo com NestJS seguem essa lógica, com DTOs de validação na entrada e serialização consistente na saída, o que facilita o consumo tanto pelo frontend quanto por integrações externas."

2. **Como você estrutura autenticação (Azure AD, JWT, etc.).**
   > "No projeto da Vodafone UK, integrei Azure AD para autenticação corporativa, o que significa delegar identidade e sessão para um provedor centralizado em vez de gerenciar senha e sessão na própria aplicação. Em projetos onde não há um provedor corporativo, uso JWT com refresh token, mantendo o token de acesso de vida curta e validando escopo/permissão em cada rota protegida."

3. **Experiência prática com Prisma/ORM vs. queries diretas.**
   > "Uso Prisma quando o time se beneficia de tipagem forte e migrations versionadas — é o caso na Glintt Global, onde o Prisma unifica o acesso a MongoDB, PostgreSQL e MySQL com uma API consistente. Já em cenários de consulta muito específica ou otimização de performance crítica, prefiro cair para query nativa, porque o ORM às vezes gera SQL subótimo para casos complexos de agregação."

4. **Como decide entre PostgreSQL, MySQL e MongoDB para um caso de uso.**
   > "Prefiro PostgreSQL ou MySQL quando os dados são naturalmente relacionais e exigem integridade referencial forte — foi o padrão no INMET e na Integer Consulting. MongoDB entra quando o modelo de dados é mais flexível ou evolui rápido, como parte do que uso hoje na Glintt Global para determinados domínios de dados menos estruturados."

5. **Processo de migração de sistema legado — como garante integridade de dados.**
   > "O padrão que uso é: primeiro mapear o schema e as regras de negócio embutidas no sistema antigo (muitas vezes não documentadas), depois escrever scripts de migração — geralmente em Python — que rodam em lote e validam contagem de registros e checksums antes e depois. Fiz isso tanto no INMET quanto na migração de páginas AEM na Vodafone Portugal: nunca migro em uma tacada só, sempre em lotes que permitem reverter se algo não bater."

6. **CI/CD: como configurou pipelines com GitHub Actions/Docker em projetos pessoais.**
   > "Nos meus projetos pessoais, uso Docker para empacotar a aplicação de forma consistente entre ambiente local e produção, e GitHub Actions para rodar testes e build a cada push, com deploy automático para VPS quando a branch principal passa no pipeline. Isso reduz o 'funciona na minha máquina' e dá feedback rápido antes de qualquer coisa ir pro ar."

---

## 5. Perguntas para fazer ao entrevistador

- "Como é a rotina de sprint e quem participa das decisões de arquitetura?"
- "Quais os principais desafios técnicos do time nos próximos 6 meses?"
- "Como a empresa lida com dívida técnica e sistemas legados?"
- "Como é o processo de onboarding e quem seria meu gestor direto?"

---

## 6. Fechamento

> "Tenho experiência sólida em migração de sistemas, entrega ágil e trabalho com times distribuídos. Acredito que posso contribuir rapidamente com [time/projeto específico] e adoraria entender os próximos passos do processo."

---

**Lembrete:** substitua qualquer frase entre colchetes `[ ]` com informações específicas da vaga antes da entrevista. Não use números ou métricas que você não consiga confirmar se perguntado a fundo.
