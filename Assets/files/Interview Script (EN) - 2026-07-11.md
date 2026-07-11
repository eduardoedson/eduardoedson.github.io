# Interview Script — Eduardo Edson Batista Cordeiro Alves
**Date:** July 11, 2026

---

## 1. Opening ("Tell me about yourself")

Suggested structure (60–90 seconds): present → relevant past → why you're here.

> "I'm a Senior Full Stack Software Engineer with 10+ years of experience in web and mobile development. I currently work at Glintt Global, on the Galp account, building fullstack systems with Next.js, NestJS and Prisma across MongoDB, PostgreSQL and MySQL, along with backend automation in Python on AWS.
>
> Before that, I was on a contract engagement via TEKsystems supporting Vodafone UK, migrating their Device Lifecycle Management (DLM) platform to React, and I spent three years at Integer Consulting, supporting Vodafone Portugal and Pairpoint on legacy migration and product development projects.
>
> My foundation was built at INMET in Brazil, where I spent five years modernizing public meteorological systems, migrating from PHP to React and Node.js, and building APIs and apps used by thousands of people.
>
> I enjoy agile environments, legacy system migration, and solving real-world problems — and I'm looking for [insert specific reason for this role/company]."

---

## 2. Key talking points by role

### Glintt Global (client: Galp) | Nov 2025 – Present
- Fullstack development with Next.js and NestJS, ORM layer with Prisma across three different databases (MongoDB, PostgreSQL, MySQL).
- Backend automation with Python Lambdas on AWS, file processing via S3.
- Delivery tracked in Jira, documentation in Confluence.
- *If asked "what does your day-to-day look like":* describe the sprint routine, team collaboration, and a concrete recent feature (personalize with a real example before the interview).

### TEKsystems (Contract — Vodafone UK) | Jun–Oct 2025
- Contract Frontend Consultant, migrated the DLM (Device Lifecycle Management) system to React.
- Delivered platform internationalization, including the German version.
- Integrated Azure AD authentication.
- *Note:* make clear this was a fixed-term staffing contract, not churn — avoids being misread as job instability.

### Integer Consulting | May 2022 – Jun 2025
- Vodafone Portugal: reusable components with AEM and Vue.js; later, Python scripts for AEM page migration.
- Pairpoint: product showcase system (React/TypeScript + Tornado/Python), deployed on AWS EC2.
- Two clients, two teams, both in Scrum/Kanban.

### INMET — National Institute of Meteorology (Brazil) | May 2017 – Mar 2022
- Migrated legacy PHP systems to React and Node.js.
- Built a mobile app (React Native) for weather forecasting.
- Public REST APIs for meteorological data.
- Python scripts for historical data migration while preserving data integrity.

### Interlegis (Federal Senate) and BEPiD (Apple)
- Solid foundation: LMS built in Django/Python, 5-person Scrum squad, and Apple's iOS training program (Objective-C) — shows an early, deliberate career trajectory.

---

## 3. Likely behavioral questions (STAR method: Situation, Task, Action, Result)

1. **"Tell me about a difficult technical challenge you solved."**
   > "At INMET, Brazil's national meteorological institute, I inherited legacy systems written in PHP that could no longer keep up with traffic or maintenance needs. The task was to migrate these platforms to React and Node.js without interrupting the public weather forecast service used daily by thousands of people. My action was to map the system module by module, prioritizing the most critical APIs first, building the new REST APIs in parallel with the old system, and migrating historical data with Python scripts that validated integrity before each cutover. The result was a transition with no noticeable downtime for end users, and a system that was far easier to maintain and evolve afterward."

2. **"How do you handle tight deadlines or shifting scope?"**
   > "At Integer Consulting, on both the Vodafone Portugal and Pairpoint teams, we worked in short three-to-four-week Scrum sprints. When scope shifted mid-sprint, my approach was always to align with the Product Owner on what was truly urgent, break delivery into smaller pieces that could be validated earlier, and be transparent about what wouldn't fit rather than quietly compromising quality."

3. **"Describe a time you worked with a new team or across countries."**
   > "On the TEKsystems contract supporting Vodafone UK, I worked fully remote with a team based in the UK, migrating the DLM system to React and later delivering platform internationalization, including the German version. The challenge wasn't only technical but about asynchronous communication and time zones — I started documenting decisions in writing on Confluence and writing well-described PRs to reduce dependency on synchronous meetings."

4. **"Why so many company changes recently?"**
   > "Much of that recent movement came from consulting and staffing contracts, not a personal decision to leave. At TEKsystems and Integer Consulting, I was staffed on specific client engagements with defined timelines — when the contract or project ended, I moved to the next challenge. That gave me broad exposure to different stacks, teams, and domains in a short time, which today is an advantage: I adapt quickly to new contexts."

5. **"What's your biggest weakness?"**
   > "Historically I tended to document only after the code was already done, which sometimes made handoff to other team members harder. I saw this clearly at INMET, where legacy systems had little documentation, which slowed down the migration. Today I try to document architectural decisions early on, even briefly, specifically to avoid repeating that problem on projects I lead."

---

## 4. Likely technical questions (with suggested answer)

1. **REST design trade-offs and architecture decisions you've made.**
   > "I think about REST in layers: well-defined resources, semantic HTTP verbs, and explicit versioning when the API is consumed by multiple clients. At Glintt Global, for example, the APIs I build with NestJS follow that logic, with validation DTOs on input and consistent serialization on output, which makes them easy to consume from both frontend and external integrations."

2. **How you structure authentication (Azure AD, JWT, etc.).**
   > "On the Vodafone UK project, I integrated Azure AD for corporate authentication, which means delegating identity and session management to a centralized provider instead of handling passwords and sessions in the application itself. In projects without a corporate identity provider, I use JWT with refresh tokens, keeping access tokens short-lived and validating scope/permissions on every protected route."

3. **Hands-on experience with Prisma/ORM vs. raw queries.**
   > "I use Prisma when the team benefits from strong typing and versioned migrations — that's the case at Glintt Global, where Prisma unifies access to MongoDB, PostgreSQL and MySQL behind a consistent API. For very specific queries or performance-critical optimization, I'll drop down to native queries, since ORMs sometimes generate suboptimal SQL for complex aggregations."

4. **How you choose between PostgreSQL, MySQL, and MongoDB for a given use case.**
   > "I prefer PostgreSQL or MySQL when data is naturally relational and needs strong referential integrity — that was the standard at INMET and Integer Consulting. MongoDB comes in when the data model is more flexible or evolves quickly, which is part of what I use today at Glintt Global for certain less-structured data domains."

5. **Legacy migration process — how you ensure data integrity.**
   > "My standard process is: first map the schema and the business rules embedded in the old system (often undocumented), then write migration scripts — usually in Python — that run in batches and validate record counts and checksums before and after. I did this both at INMET and during the AEM page migration at Vodafone Portugal: I never migrate everything in one shot, always in batches that allow rollback if something doesn't match."

6. **CI/CD: how you set up pipelines with GitHub Actions/Docker in personal projects.**
   > "In my personal projects, I use Docker to package the application consistently between local and production environments, and GitHub Actions to run tests and builds on every push, with automatic deploy to a VPS once the main branch passes the pipeline. That cuts down on 'works on my machine' issues and gives fast feedback before anything goes live."

---

## 5. Questions to ask the interviewer

- "What does the sprint routine look like, and who's involved in architecture decisions?"
- "What are the team's main technical challenges over the next 6 months?"
- "How does the company handle technical debt and legacy systems?"
- "What does onboarding look like, and who would be my direct manager?"

---

## 6. Closing

> "I have solid experience in system migration, agile delivery, and working with distributed teams. I believe I can contribute quickly to [specific team/project] and would love to understand the next steps in the process."

---

**Reminder:** replace any bracketed `[ ]` text with role-specific details before the interview. Don't use numbers or metrics you can't confidently back up if probed further.
