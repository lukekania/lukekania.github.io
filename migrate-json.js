// One-time migration script: updates projects.json to be the complete source of truth
// matching the current index.html display. Run once, then delete this file.

const fs = require("fs");
const projects = JSON.parse(fs.readFileSync("projects.json", "utf8"));

function p(id) {
  return projects.find((p) => p.itemId === String(id));
}

// ── itemId 0: Python Applikation (Private) ──
p(0).role = ["Full Stack Engineer", "Architekt"];

// ── itemId 1: Internship (Employment) ──
p(1).role = ["Data Engineering Intern / Software Engineering Intern"];
p(1).industry = ["Luft- und Raumfahrt"];
p(1).description =
  "Mitarbeit an drei Projekten in der Abteilung Digital Cargo Lab, Digital Solutions und IT-Architecture.";
p(1).technischesUmfeld =
  "Jupyter Notebook, Atom, Anaconda, Python, sql, sqlite3, shell/bash, npm, command-line-tools, sqlStudio, Microsoft Azure Data Bricks, Apache Spark, Scala, Microsoft Azure Data Factory, Postman, Swagger.io, Swagger.ui, Microsoft Office, Windows, MacOS X";
p(1).subProjects = [
  {
    title: "Process Mining",
    bulletpoints: [
      "Entwicklung von Python-Skripten zur Extraktion und Aufbereitung von Daten aus verschiedenen Quellen (Data Mining)",
      "Datenverarbeitung mit NumPy und Pandas",
      "Erstellung einer SQLite-Datenbankstruktur inkl. Entitäten, Attributen und Import-Schnittstelle",
      "Dokumentation der Skripte für interne Weiterentwicklung",
      "Durchführung von Exploratory Data Analysis (EDA)",
      "Aufbau einer Datenbasis für einen geplanten Data Hub",
      "Entwurf einer Architektur für eine MS-Azure-Umgebung",
      "Unterstützung bei der Implementierung von Azure Blob Storage, Azure Data Factory und Azure Databricks (Scala, Apache Spark)",
      "Evaluierung verschiedener Process-Mining-Tools (PafNow, Celonis, Disco)",
    ],
  },
  {
    title: "API-Management",
    bulletpoints: [
      "Einarbeitung in Swagger und OpenAPI-Spezifikationen",
      "Erstellung von JSON-Schemas mit Node.js und CLI-Tools",
      "Durchführung von API-Tests mit Postman",
      "Dokumentation mehrerer interner APIs",
    ],
  },
  {
    title: "Trendradar",
    bulletpoints: [
      "Recherche aktueller Technologien in den Bereichen Air Cargo, Logistik, Operations und Luftfahrt",
      "Entwicklung eines methodischen Vorgehens zur Bewertung des Innovationsstands",
      "Durchführung explorativer Befragungen",
      "Erstellung einer strukturierten Trend- und Technologiedokumentation für das interne Trend-Scouting weitere Nutzung und Visualisierung des Trendscouting",
    ],
  },
];

// ── itemId 2: OncoMi / Planung... (Private) ──
p(2).role = ["Co-Gründer", "Software Engineer", "Architekt"];
p(2).endDate = "12/2023";
p(2).technischesUmfeld =
  "React-Native, TypeScript, shell/bash, Husky, yarn, Metro, Babel, Terraform, Infrastructure as a Code, Amazon Web Services, JavaScript, Python, PostgreSQL, Atlassian Jira, Framer X, Figma, MS Office, Google Meet, Google Design Sprint, GitHub";

// ── itemId 3: Office Management (Employment) ──
p(3).role = ["Junior Web Engineer"];
p(3).employer = "COM Software GmbH";
p(3).industry = ["Intern", "Software Entwicklung", "Beratung"];

// ── itemId 4: User Interface (Employment) ──
p(4).role = [
  "Technical Lead Frontend",
  "Junior Web Engineer",
  "Junior Cloud Engineer",
  "Junior Consultant",
];
p(4).employer = "COM Software GmbH";
p(4).industry = ["Versicherung", "Finanz-Dienstleistung"];

// ── itemId 5: Migrationsprojekt (Employment) ──
p(5).role = [
  "Technical Lead Frontend",
  "Junior Full Stack Engineer",
  "Junior Cloud Engineer",
  "Junior Consultant",
];
p(5).employer = "COM Software GmbH";
p(5).industry = ["Versicherung", "Finanz-Dienstleistung"];

// ── itemId 6: Portfolio Management Tool (Private, sold to COM) ──
p(6).role = ["Junior Full Stack Engineer"];
p(6).displayIndustry = "Endkunde: Intern, Software Entwicklung, Beratung";

// ── itemId 7: Native Mobile App (Private, sold to COM) ──
p(7).role = ["Junior Web Engineer"];
p(7).displayIndustry = "Endkunde: Intern, Software Entwicklung, Beratung";

// ── itemId 9: Framework-Migration (Employment) ──
p(9).role = [
  "Technical Lead Frontend",
  "Junior Web Engineer",
  "Junior Cloud Engineer",
  "Junior Consultant",
];
p(9).employer = "COM Software GmbH";
p(9).industry = ["Versicherung", "Finanz-Dienstleistung"];

// ── itemId 10: Code Generator (Employment) ──
p(10).role = ["Full Stack Engineer"];
p(10).employer = "COM Software GmbH";
p(10).industry = ["Intern", "Software Entwicklung", "Beratung"];

// ── itemId 11: Migrations-Betreuung (Employment) ──
p(11).role = [
  "Technical Lead Frontend",
  "Full Stack Engineer",
  "Cloud Engineer",
];
p(11).employer = "COM Software GmbH";
p(11).industry = ["Versicherung", "Finanz-Dienstleistung"];

// ── itemId 13: Migration K8s (Employment) ──
p(13).role = ["Full Stack Engineer", "Cloud Engineer", "DevOps"];
p(13).employer = "COM Software GmbH";
p(13).industry = ["Intern", "Software Entwicklung", "Beratung"];

// ── itemId 14: Cloud Migration Portfolio (Employment) ──
p(14).role = [
  "Full Stack Engineer",
  "Cloud Engineer",
  "DevOps",
  "Architekt",
];
p(14).employer = "COM Software GmbH";
p(14).industry = ["Intern", "Software Entwicklung", "Beratung"];
p(14).description =
  "Migration einer bestehenden Anwendung für Mitarbeiterprofile in eine cloudfähige Microservice-Architektur.";
p(14).bulletpoints = [
  "Entwicklung eines Services zur Erstellung dynamischer HTML-Templates",
  "Entwicklung eines Services zur Generierung von PDF-Dokumenten im Corporate Design",
  "Bereitstellung eines vollständigen Mitarbeiterprofils zur Weitergabe nach Akquise-Terminen",
  "Entwicklung eines User Interface mit Funktionen zur Datenverwaltung",
];
p(14).technischesUmfeld =
  "Microsoft Azure, AKS, Kubernetes, K8s, HELM, Docker, Traefik, Java, Maven, Spring Boot, Spring Data, Spring Security Spring Web, Mockito, Python, wsgi, Flask, Angular, TypeScript, JavaScript, npm, Node.js, Karma, Jasmine, Express, PostgreSQL, Mustache, Git, GitHub, GitHub Actions";

// ── itemId 15: Digitalisierungsprojekt (Employment) ──
p(15).title =
  "Digitalisierungsprojekt verschiedener Bereiche im Öffentlichen Dienst";
p(15).role = ["Full Stack Engineer", "Lead Engineer", "Architekt", "DevOps"];
p(15).employer = "S&N Invent AG";
p(15).endDate = "";
p(15).description =
  "Weiterentwicklung der bestehenden Systemlandschaft und Unterstützung bei architekturellen Entscheidungen. Die Lösung dient der Erfassung, Berechnung und Verteilung von Kosten in Behörden wie Finanzämtern, Handelsregistern und Justizbehörden. Kern des Systems ist eine zentrale Anwendung, die komplexe Prozesse und Berechnungen ausführt und Informationen an Satellitenanwendungen der Landesbehörden verteilt. Ziel ist eine transparente und rechtlich einheitliche Abwicklung aller fachlichen und technischen Schnittstellen. Nachfolgend sind meine Beiträge in laufenden und abgeschlossenen Teilprojekten aufgeführt.";
p(15).subProjects = [
  {
    title:
      "1. Weitere Umsetzung von Teilprojekt - 4. Weiterentwicklung bestehender Applikationen - mit dem selben technischen Umfeld",
    bulletpoints: [],
  },
  {
    title:
      "2. Migration bestehender Anwendung und zusätzlich neuem Authentifizierungsverfahren",
    bulletpoints: [
      "Migration mehrerer Anwendungen von JBoss zu Spring Boot",
      "Integration staatlich vorgeschriebener Authentifizierungsverfahren",
      "Unterstützung bei der Vorbereitung der Migration in eine Private-Cloud-Umgebung",
      "Durchführung von Entwickler-, Unit- und End-to-End-Tests",
      "Abstimmung mit Stakeholdern und Teilnahme an SCRUM-Meetings",
    ],
    technischesUmfeld:
      "Angular, TypeScript, JavaScript, Node.js, Jest, npm, Java, Spring Boot, Spring Data, Spring Security, JBoss, Maven, Hibernate, JPA, MS SQL Server, Oracle, OAuth, shell/bash, Docker, Git, GitLab, GitLab Pipelines, Nexus",
  },
  {
    title: "3. Weiterentwicklung aufgrund EU-Gesetzesänderungen",
    bulletpoints: [
      "Umsetzung neuer Anforderungen von Ministerien und Einbezug aktueller Gesetzesänderung (EU)",
      "Planung und Integration neuer Funktionen in die bestehende Softwarelandschaft",
      "Weiterentwicklung und Bereitstellung von Schnittstellen für interne Teams und externe Dienstleister",
      "Durchführung von Entwickler-, Unit- und End-to-End-Tests",
      "Regelmäßige Abstimmungen mit Stakeholdern und Teilnahme an SCRUM-Meetings",
    ],
    technischesUmfeld:
      "Angular, TypeScript, JavaScript, Node.js, npm, Java, Maven, MS SQL Server, Oracle, Docker, shell/bash, Git, GitLab, GitLab Pipelines, Nexus, REST, SOAP, OpenAPI, Swagger, Postman",
  },
  {
    title:
      "4. Weiterentwicklung bestehender Applikationen (Projekttitel unterliegt Geheimhaltung)",
    bulletpoints: [
      "Umsetzung neuer Anforderungen von Ministerien und Einbezug aktueller Gesetzesänderung (Bund)",
      "Planung und Integration neuer Funktionen in die bestehende Softwarelandschaft",
      "Durchführung von Entwickler-, Unit- und End-to-End-Tests",
      "Regelmäßige Abstimmungen mit Stakeholdern und Teilnahme an SCRUM-Meetings",
    ],
    technischesUmfeld:
      "Angular, TypeScript, JavaScript, Jest, Node.js, npm, Java, JBoss, Maven, MS SQL Server, Oracle, Docker, Git, GitLab, GitLab Pipelines, Nexus",
  },
  {
    title: "5. Angular Schulung",
    bulletpoints: [
      "Durchführung interner Angular-Schulungen",
      "Vermittlung von Architekturprinzipien und Best Practices",
    ],
    technischesUmfeld:
      "Angular, TypeScript, RxJS, NgRX, Node.js, npm, NxWorkspace, Docker, Git, GitLab, GitLab Pipelines",
  },
  {
    title: "6. Refactoring/Modernisierung (Laufend)",
    bulletpoints: [
      "Schrittweise Migration von Angular 12 auf aktuell Angular 20.3.10",
      "Modernisierung der bestehenden Anwendungs- und Frontend-Architektur",
      "Refactoring und Weiterentwicklung mehrerer Webanwendungen",
      "Einführung und Umsetzung etablierter Frontend-Best-Practices",
      "Planung und Integration von Refactoring-Maßnahmen parallel zur Feature-Entwicklung",
      "Leitung von Workshops und Unterstützung von Teammitgliedern",
      "Migration von 14 Angular-Projekten in ein NxWorkspace-Monorepository",
      "Reduzierung von Build- und Wartungsaufwänden sowie deutliche Beschleunigung von Onboarding-Zeiten",
      "Core-Projekt-Größe (Frontend) von > 10GB auf < 5GB trotz laufender Entwicklung und neuer Features",
      "Durchführung von Entwickler-, Unit- und End-to-End-Tests",
    ],
    technischesUmfeld:
      "Angular, TypeScript, Node.js, npm, NxWorkspace, Docker, Jenkins, Git, GitLab, GitLab Pipelines",
  },
  {
    title: "7. Umstellung/Einführung CI/CD",
    bulletpoints: [
      "Migration von Jenkins Pipeline mit Frontend-Build über Maven auf Build mit Node.js, Docker und GitLab",
      "Vorbereitung auf die Migration in eine private Cloud",
      "Implementierung einer CI/CD Pipeline für sämtliche Frontend Projekte mit Testing, Linting, Sonar, Dependency- und Containerscanning",
      "Entwicklertests, Unittests, E2E Testing",
    ],
    technischesUmfeld:
      "Angular, Node.js, npm, shell/bash, Docker, Kubernetes, Helm, AWS, Jest, Sonar, Jenkins, Git, GitLab, GitLab Pipelines",
  },
];

// ── itemId 16: Persönliche Website (Private) ──
p(16).description =
  "Entwicklung einer persönlichen Portfolio-Website mit Build-State und Lighthouse Analyse zur Darstellung von Projekten, Ausbildung, Zertifikaten und Kontaktinformationen. Aktuell erfolgt eine Migration zu Vue.js sowie ein Serverumzug zu Hetzner.";
p(16).technischesUmfeld =
  "Vue.js, Angular, Angular Material, Vite, Material Icons, RxJS, npm, TypeScript, Karma, Jasmine, ESLint, Prettier, Lighthouse, Git, GitHub, GitHub Actions, GitHub Dependabot";

// ── itemId 17: Forschungsprojekt / CEDR.AI.PO (Private) ──
p(17).role = ["Architekt", "Software Engineer", "AI Engineer"];
p(17).technischesUmfeld =
  "Python, TensorFlow, Scikit, Scapy, Numpy, Scipy, Docker, shell/bash, MQTT, REST, WebSockets, Rasperry Pi, InfluxDB, PyCharm, Mac OS X, Linux Debian, Angular, Angular Material, RxJS, npm, TypeScript, Jasmine, Karma, paho-mqtt, PostgreSQL, scikit-learn, mlxtend, PyTorch, NLTK, rouge, protobuf, schedule, Pandas, Git, GitHub, GitHub Actions, GitHub Dependabot";

// ── itemId 18: Karboniq (Private) ──
p(18).displayTimeframe = "Seit 03/2025 (Release und Go-Live anstehend)";

// ── itemId 19: Treasr (Private) ──
p(19).displayTimeframe = "Seit 05/2025 (Release und Go-Live anstehend)";
p(19).description =
  "Entwicklung einer Anwendung zur Verwaltung und Analyse von Portfolios und Watchlists mit Fokus auf Performance-Tracking, Fundamentaldaten, Finanzkennzahlen und Marktdaten.";
p(19).bulletpoints = [
  "Anlage und Verwaltung von Portfolios und Watchlists auf Basis von Aktientickern einschließlich Berechnung der Performance seit Kauf",
  "Bereitstellung von Fundamentaldaten zu allen im Portfolio bzw. in der Watchlist enthaltenen Unternehmen",
  "Integration eines Newsfeeds mit unternehmensbezogenen Nachrichten",
  "Entwicklung eines Analysemoduls zur Berechnung finanzieller Kennzahlen und Durchführung von Stresstests",
  "Entwicklung eines Ideenmoduls (z. B. Trimming, Momentum) basierend auf Daten aus Momentum-ETFs (keine Anlageberatung)",
  "Implementierung verschiedener Subscription-Modelle",
  "Mehrsprachiger Support (Deutsch und Englisch)",
  "Entwicklung einer Marketing-Website",
];
p(19).techStacks = [
  {
    label: "Backend",
    technologies:
      "FastAPI, Uvicorn, Python, PostgreSQL, psycopg2-binary, SQLAlchemy, SQLModel, Alembic, PyJWT, python-jose, Passlib, argon2-cffi, bcrypt, fastapi-csrf-protect, slowapi, Redis, Stripe, Pandas, openpyxl, yfinance, APScheduler, feedparser, httpx, Pydantic, python-json-logger, python-dotenv, python-multipart, pip, uv, Ruff, Docker, pytest, pytest-asyncio, pytest-cov, pytest-mock, Faker, freezegun",
  },
  {
    label: "Frontend",
    technologies:
      "Angular, Angular Material, Tailwind CSS, RxJS, npm, TypeScript, PostCSS, Vitest, ESLint, Prettier, Docker, Git, GitHub, GitHub Actions, GitHub Dependabot",
  },
  {
    label: "Marketing-Website",
    technologies:
      "Angular, Angular SSR, Angular Material, Tailwind CSS, RxJS, npm, TypeScript, PostCSS, Vitest, ESLint, Prettier, Docker, Git, GitHub, GitHub Actions, GitHub Dependabot",
  },
];

// ── itemId 20: Beratung Business Modelling (Private) ──
p(20).role = ["Consultant", "Software Engineer"];

// ── Write output ──
fs.writeFileSync("projects.json", JSON.stringify(projects, null, 2) + "\n");
console.log("projects.json updated successfully.");
