// ============================================
//  TRANSLATIONS – FR / EN
// ============================================
const translations = {
    fr: {
        // Nav
        nav_about: "À propos",
        nav_experience: "Expérience",
        nav_education: "Formation",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_contact: "Contact",

        // Hero
        hero_badge: "Ouvert aux opportunités",
        hero_greeting: "Bonjour, je suis",
        hero_prefix: "Je suis ",
        hero_description: "Ingénieur logiciel & étudiant en Master spécialisé : Expert Data, IA & MLOps à Télécom Paris.",
        hero_cta_projects: "Voir mes projets",
        hero_cta_contact: "Me contacter",
        hero_scroll: "Défiler",

        // Typewriter
        typewriter_items: [
            "Ingénieur Full-Stack",
            "Étudiant en Master Spécialisé : Data, IA & MLOps",
            "en Recherche de Stages & Opportunités",
        ],

        // About
        about_title: "À propos de moi",
        about_p1: 'Ingénieur logiciel diplômé de la Faculté des Sciences de Tunis, actuellement en Master spécialisé : Expert Data, IA & MLOps à <strong>Télécom Paris</strong>, l\'une des meilleures écoles d\'ingénieurs en France et en Europe.',
        about_p2: 'Fort d\'une expérience de plus d\'un an chez <strong>Advanced Derivative Solutions</strong> en tant qu\'ingénieur logiciel, j\'ai travaillé sur des plateformes financières optimisées intégrant la gestion de devises, la facturation et la gestion de crédits.',
        about_p3: 'Passionné par les nouvelles technologies, je combine mes compétences en développement full-stack (Java/Spring Boot, Angular, React) avec mon expertise croissante en Data Science, Big Data et Machine Learning.',
        about_stat1: "Années d'expérience",
        about_stat2: "Projets réalisés",
        about_stat3: "Technologies maîtrisées",
        about_stat4: "Langues parlées",

        // Experience
        exp_title: "Expérience Professionnelle",
        exp1_date: "Août 2024 — Août 2025",
        exp1_dur: "1 an 1 mois",
        exp1_role: "Ingénieur Logiciel",
        exp1_loc: "Tunis, Tunisie",
        exp1_type: "CDI",
        exp1_d1: "Travail sur une plateforme financière optimisée intégrant la gestion de devises, la facturation et la gestion de crédits, avec une approche proactive des fluctuations de taux de change.",
        exp1_d2: "Gestion de l'import et de l'export des données clients pour assurer la cohérence et la fiabilité du système.",
        exp1_d3: "Gestion des profils et identifiants clients, garantissant une authentification sécurisée et l'intégrité des données.",

        exp2_date: "Fév 2024 — Juil 2024",
        exp2_dur: "6 mois",
        exp2_role: "Stagiaire Ingénieur Logiciel",
        exp2_loc: "Tunis, Tunisie",
        exp2_type: "Stage PFE",
        exp2_d1: "Contribution au développement d'une plateforme d'optimisation des opérations financières : gestion de comptes bancaires, gestion et affectation de factures, gestion de devises et allocation de crédits.",
        exp2_d2: "La plateforme priorise la gestion proactive des fluctuations de taux de change, essentielle dans la finance internationale.",

        exp3_date: "Juil 2023 — Août 2023",
        exp3_dur: "2 mois",
        exp3_role: "Stagiaire Ingénieur Logiciel",
        exp3_loc: "Tunisie",
        exp3_d1: "Revitalisation de l'interface utilisateur de supervision avec la bibliothèque Boosted d'Orange, visant un design cohérent aligné avec le style Orange.",
        exp3_d2: "Rôle clé dans l'assurance qualité grâce à l'automatisation complète des tests, garantissant la fonctionnalité et la fiabilité de la plateforme.",

        exp4_date: "Juin 2022 — Juil 2022",
        exp4_dur: "2 mois",
        exp4_role: "Stagiaire Développement Web",
        exp4_loc: "Tunisie",
        exp4_d1: "Contribution au développement d'un site web pour le signalement de fuites, incluant une carte interactive pour la localisation et un formulaire de soumission avec images.",
        exp4_d2: "Implémentation d'un système de notifications par email pour informer les utilisateurs de l'état de réparation des fuites signalées.",

        // Education
        edu_title: "Formation",
        edu1_date: "Sep 2025 — Présent",
        edu1_degree: "Master spécialisé — Intelligence Artificielle",
        edu1_d1: "Programme classé N°1 en Data Science & IA (Eduniversal 2024)",
        edu1_d2: "Programme intensif de 16 mois incluant 10 mois de cours et un projet de thèse de 4 à 6 mois.",
        edu1_d3: "Expertise Data de bout en bout : du Data Engineering et Big Data au MLOps en production.",
        edu1_d4: "IA avancée : curriculum approfondi en Machine Learning et Deep Learning.",

        edu2_date: "Sep 2021 — Juin 2024",
        edu2_degree: "Diplôme d'Ingénieur — Informatique",

        edu3_date: "Sep 2019 — Juin 2021",
        edu3_degree: "Cycle Préparatoire — MP Mathématiques-Physique",

        edu4_date: "Sep 2015 — Juin 2019",
        edu4_degree: "Baccalauréat — Mathématiques",
        edu4_grade: "Mention Bien",

        // Projects
        proj_title: "Projets",
        filter_all: "Tous",
        filter_ai: "IA / ML",
        filter_bigdata: "Big Data",
        filter_fullstack: "Full-Stack",
        filter_mlops: "MLOps",
        present: "Présent",

        proj1_desc: "Pipeline Data Engineering corrélant la popularité des jeux vidéo avec les cours boursiers. Extraction depuis SteamSpy, Twitch et Yahoo Finance, transformation via Apache Spark en architecture Data Lake 3 couches sur S3, corrélation de Pearson glissante et modèle XGBoost. Orchestré par Airflow, visualisé via Kibana et 100% Dockerisé.",
        proj_mlops_title: "Pipeline de Détection de Fraudes Bancaires | MLOps",
        proj_mlops_desc: "Conception d'un pipeline MLOps de bout en bout automatisant l'entraînement continu et le déploiement d'un modèle de classification de fraudes bancaires.",
        proj2_desc: "Projet Data Science « Fil Rouge » visant à segmenter les teintes de produits cosmétiques pour améliorer la précision des recommandations. Évaluation de Clustering, KNN et Gradient Boosting avec un stack Python (Pandas, NumPy, Scikit-learn).",
        proj3_desc: "Déploiement d'un cluster Hadoop complet (4 serveurs) pour analyser 50 Go d'avis Amazon. Configuration HDFS, YARN, ZooKeeper, HBase. Scripts PySpark pour le prétraitement distribué et classification via Spark ML pour l'analyse de sentiment.",
        proj4_desc: "Application ML full-stack de recommandation de recettes combinant filtrage collaboratif (SVD), clustering (HDBSCAN), prédiction de temps de cuisson, classification nutritionnelle et analyse de sentiment NLP sur 230K+ recettes et 1M+ avis. Chatbot RAG (Google Gemini), UI Streamlit, Docker et CI/CD.",
        proj5_title: "MapReduce Distribué from Scratch",
        proj5_desc: "Système MapReduce distribué en Python pour traiter 20 Go de données Common Crawl sur un setup hétérogène (Windows Master, 3 Workers Linux, NFS partagé). Pipelines WordCount, tri de fréquences distribué et détection de langue. Benchmarks avec la loi d'Amdahl.",
        proj6_title: "Upload de fichiers vers AWS",
        proj6_desc: "Application full-stack Spring Boot + React permettant aux utilisateurs d'uploader facilement des fichiers vers AWS.",
        proj7_title: "Application bancaire de gestion de rapports",
        proj7_desc: "Application bancaire de gestion de rapports annuels avec authentification des auditeurs, sélection d'agences, et ajout/téléchargement de rapports PDF.",
        proj8_title: "Gestion des Surveillants d'Examens (PFA)",
        proj8_desc: "Plateforme centralisée de gestion des surveillants universitaires avec calendrier, algorithme intelligent de recommandation de dates selon la disponibilité et attribution d'heures selon le grade.",
        proj9_title: "Application E-commerce Full-Stack",
        proj9_desc: "Application e-commerce responsive avec intégration de paiement Stripe, gestion d'état avancée via React Context API, Next.js comme backend et Sanity CMS pour la gestion de contenu.",
        proj10_title: "Application Fitness Exercises",
        proj10_desc: "Application fitness avec accès à 1000+ exercices, catégories et groupes musculaires, exemples pratiques, pagination, vidéos YouTube associées et suggestions similaires. Développée avec React et RapidAPI.",

        // Skills
        skills_title: "Compétences",
        skill_cat1: "Intelligence Artificielle",
        skill_cat3: "Langages de Programmation",
        skill_cat6: "Bases de Données",

        // Contact
        contact_title: "Contact",
        contact_subtitle: "Travaillons ensemble",
        contact_text: "N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger.",
        form_name: "Nom",
        form_message: "Message",
        form_send: "Envoyer",

        // Footer
        footer_text: "Conçu & développé avec",
        footer_top: "Retour en haut",
    },

    en: {
        // Nav
        nav_about: "About",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",

        // Hero
        hero_badge: "Open to opportunities",
        hero_greeting: "Hi, I'm",
        hero_prefix: "I'm a ",
        hero_description: "Software Engineer & Master's student in Expert Data, AI & MLOps at Télécom Paris, passionate about full-stack development, Big Data, and Artificial Intelligence.",
        hero_cta_projects: "View my projects",
        hero_cta_contact: "Get in touch",
        hero_scroll: "Scroll",

        // Typewriter
        typewriter_items: [
            "Software Engineer",
            "Master's Student: Expert Data, AI & MLOps",
            "Full-Stack Engineer",
            "Looking for Internships & Opportunities"
        ],

        // About
        about_title: "About me",
        about_p1: 'Software Engineer graduated from the Faculty of Sciences of Tunis, currently pursuing a specialized Master\'s in Expert Data, AI & MLOps at <strong>Télécom Paris</strong>, one of France\'s and Europe\'s top engineering schools.',
        about_p2: 'With over a year of experience at <strong>Advanced Derivative Solutions</strong> as a Software Engineer, I worked on optimized financial platforms integrating currency management, invoicing, and credit handling.',
        about_p3: 'Passionate about new technologies, I combine my full-stack development skills (Java/Spring Boot, Angular, React) with growing expertise in Data Science, Big Data, and Machine Learning.',
        about_stat1: "Years of experience",
        about_stat2: "Completed projects",
        about_stat3: "Technologies mastered",
        about_stat4: "Languages spoken",

        // Experience
        exp_title: "Professional Experience",
        exp1_date: "Aug 2024 — Aug 2025",
        exp1_dur: "1 year 1 month",
        exp1_role: "Software Engineer",
        exp1_loc: "Tunis, Tunisia",
        exp1_type: "Full-time",
        exp1_d1: "Worked on an optimized financial platform integrating currency management, invoicing, and credit handling, with a proactive approach to exchange rate fluctuations.",
        exp1_d2: "Managed the import and export of client data to ensure consistency and system reliability.",
        exp1_d3: "Handled client profiles and credentials, ensuring secure authentication and data integrity.",

        exp2_date: "Feb 2024 — Jul 2024",
        exp2_dur: "6 months",
        exp2_role: "Software Engineering Intern",
        exp2_loc: "Tunis, Tunisia",
        exp2_type: "Final Year Internship",
        exp2_d1: "Contributed to developing a platform focused on optimizing financial operations: bank account management, bill management and allocation, foreign exchange management, and credit allocation.",
        exp2_d2: "The platform prioritizes proactive management of exchange rate fluctuations, essential in international finance.",

        exp3_date: "Jul 2023 — Aug 2023",
        exp3_dur: "2 months",
        exp3_role: "Software Engineering Intern",
        exp3_loc: "Tunisia",
        exp3_d1: "Revitalized the supervision UI with Orange's Boosted library, aiming for a cohesive design aligned with Orange's style.",
        exp3_d2: "Played a key role in quality assurance through comprehensive testing automation, ensuring platform functionality and reliability.",

        exp4_date: "Jun 2022 — Jul 2022",
        exp4_dur: "2 months",
        exp4_role: "Web Development Intern",
        exp4_loc: "Tunisia",
        exp4_d1: "Contributed to developing a leak reporting website including an interactive map for location input and a submission form with images.",
        exp4_d2: "Implemented an email notification system to inform users about the repair status of reported leaks.",

        // Education
        edu_title: "Education",
        edu1_date: "Sep 2025 — Present",
        edu1_degree: "Specialized Master's — Artificial Intelligence",
        edu1_d1: "Top-Ranked Institution for Data Science & AI programs (Eduniversal 2024)",
        edu1_d2: "16-month intensive program including 10 months of courses and a 4-6 month thesis project.",
        edu1_d3: "End-to-End Data Expertise: from Data Engineering and Big Data to production-level MLOps.",
        edu1_d4: "Advanced AI: in-depth curriculum in Machine Learning and Deep Learning.",

        edu2_date: "Sep 2021 — Jun 2024",
        edu2_degree: "Engineer's Degree — Computer Science",

        edu3_date: "Sep 2019 — Jun 2021",
        edu3_degree: "Preparatory Cycle — MP Mathematics-Physics",

        edu4_date: "Sep 2015 — Jun 2019",
        edu4_degree: "Baccalaureate — Mathematics",
        edu4_grade: "High Honors (Mention Bien)",

        // Projects
        proj_title: "Projects",
        filter_all: "All",
        filter_ai: "AI / ML",
        filter_bigdata: "Big Data",
        filter_fullstack: "Full-Stack",
        filter_mlops: "MLOps",
        present: "Present",

        proj1_desc: "Data Engineering pipeline correlating video game popularity with gaming publishers' stock prices. Data extracted from SteamSpy, Twitch and Yahoo Finance, transformed via Apache Spark in a 3-layer Data Lake architecture on S3, rolling Pearson correlation and XGBoost prediction model. Orchestrated by Airflow, visualized via Kibana, and 100% Dockerized.",
        proj_mlops_title: "Bank Fraud Detection Pipeline | MLOps",
        proj_mlops_desc: "Design of an end-to-end MLOps pipeline automating continuous training and deployment of a bank fraud classification model.",
        proj2_desc: "Data Science \"Fil Rouge\" project aimed at segmenting cosmetic product shades to improve customer recommendation accuracy. Benchmarked Clustering, KNN, and Gradient Boosting with a Python stack (Pandas, NumPy, Scikit-learn).",
        proj3_desc: "Deployed a full Hadoop cluster (4 servers) to analyze 50 GB of Amazon reviews. Configured HDFS, YARN, ZooKeeper, HBase. Designed PySpark scripts for distributed text preprocessing and sentiment analysis classification via Spark ML.",
        proj4_desc: "Full-stack ML recipe recommendation app combining collaborative filtering (SVD), content-based clustering (HDBSCAN), cooking time prediction, nutrition classification, and NLP sentiment analysis on 230K+ recipes and 1M+ reviews. Features RAG chatbot (Google Gemini), Streamlit UI, Docker deployment and CI/CD.",
        proj5_title: "Distributed MapReduce from Scratch",
        proj5_desc: "Distributed MapReduce system in Python to process 20 GB of Common Crawl data across a heterogeneous setup (Windows Master, 3 Linux workers, shared NFS). WordCount pipelines, distributed frequency sorting, and language detection. Benchmarked with Amdahl's Law.",
        proj6_title: "File Upload Application to AWS",
        proj6_desc: "Full-stack Spring Boot + React application enabling users to easily upload files to AWS.",
        proj7_title: "Banking Report Management Application",
        proj7_desc: "Banking application for managing annual reports with auditor authentication, branch selection, and PDF report upload/download.",
        proj8_title: "Exam Invigilator Management (PFA)",
        proj8_desc: "Centralized platform for managing university exam invigilators with calendar, intelligent date recommendation algorithm based on availability, and hour assignment based on rank.",
        proj9_title: "Full-Stack E-commerce Application",
        proj9_desc: "Responsive e-commerce application with Stripe payment integration, advanced state management via React Context API, Next.js as backend, and Sanity CMS for content management.",
        proj10_title: "Fitness Exercises App",
        proj10_desc: "Fitness app with access to 1000+ exercises, categories and muscle groups, practical examples, pagination, related YouTube videos, and similar exercise suggestions. Built with React and RapidAPI.",

        // Skills
        skills_title: "Skills",
        skill_cat1: "Artificial Intelligence",
        skill_cat3: "Programming Languages",
        skill_cat6: "Databases",

        // Contact
        contact_title: "Contact",
        contact_subtitle: "Let's work together",
        contact_text: "Feel free to reach out to discuss projects, opportunities, or just to connect.",
        form_name: "Name",
        form_message: "Message",
        form_send: "Send",

        // Footer
        footer_text: "Designed & built with",
        footer_top: "Back to top",
    }
};
