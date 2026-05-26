const proximitDescription = {
    title: "Stage — Proximit (20 Janvier – 28 Février 2025)",
    content: `
        <div class="synopsis">
            <h3>Présentation</h3>
            <img src="/mon_portfolio/images/proximit.png" alt="Proximit" style="width:100%;border-radius:4px;margin-bottom:1rem;">
            <p>J'ai effectué mon stage au sein de l'entreprise <strong>Proximit</strong>, spécialisée dans le développement web et les solutions numériques.</p>
            <p>Durant ce stage, j'ai découvert le framework <strong>Symfony</strong>, un framework PHP open-source permettant de développer des applications web structurées et sécurisées. Il repose sur une architecture <strong>MVC</strong> (Modèle – Vue – Contrôleur), ce qui facilite l'organisation du code et sa maintenance. Symfony propose également des outils puissants comme le système de routing, la gestion des bases de données via <strong>Doctrine</strong> et le moteur de templates <strong>Twig</strong>.</p>
        </div>
        <div class="features">
            <h3>Commandes essentielles utilisées</h3>
            <ul>
                <li><strong>Création d'une page (contrôleur + vue)</strong><p><code>php bin/console make:controller NomController</code></p></li>
                <li><strong>Création d'un formulaire</strong><p><code>php bin/console make:form NomFormType</code></p></li>
                <li><strong>Création d'une entité (base de données)</strong><p><code>php bin/console make:entity NomEntity</code></p></li>
                <li><strong>Création d'un CRUD complet</strong><p><code>php bin/console make:crud NomEntity</code></p></li>
                <li><strong>Génération d'une migration</strong><p><code>php bin/console make:migration</code></p></li>
                <li><strong>Application des migrations</strong><p><code>php bin/console doctrine:migrations:migrate</code></p></li>
                <li><strong>Lancement du serveur local</strong><p><code>symfony server:start</code></p></li>
            </ul>
        </div>
        <div class="stack">
            <h3>Compétences développées</h3>
            <ul>
                <li>Framework Symfony — architecture MVC</li>
                <li>Gestion de base de données avec Doctrine</li>
                <li>Moteur de templates Twig</li>
                <li>Routing et structure d'une application PHP moderne</li>
                <li>Développement web professionnel</li>
            </ul>
        </div>`
};

function openProximitModal() {
    document.getElementById('modalTitle').textContent = proximitDescription.title;
    document.getElementById('modalContent').innerHTML = proximitDescription.content;
    document.getElementById('stageModal').classList.add('active');
}
