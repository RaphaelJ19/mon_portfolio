const centreEquestreDescription = {
    title: "Centre Équestre — Plateforme web de gestion d'un centre équestre",
    content: `
        <div class="synopsis">
            <h3>Présentation</h3>
            <p>Application web full-stack de gestion d'un centre équestre développée en PHP/MySQL.
            Elle permet de gérer la cavalerie (chevaux), les cavaliers, les cours, les événements,
            les concours, les inscriptions et les participations. L'interface est divisée en deux
            parties : un back-office d'administration et un front-office public. Les interactions
            dynamiques sont gérées via AJAX/jQuery et le design via CSS personnalisé.</p>
        </div>
        <div class="features">
            <h3>Fonctionnalités principales</h3>
            <ul>
                <li><strong>Gestion de la cavalerie</strong>
                    <p>Ajout, modification et suppression logique des chevaux avec numéro SIRE,
                    race, robe, taille au garrot et galerie photos associée.</p>
                </li>
                <li><strong>Gestion des cavaliers</strong>
                    <p>Fiche complète par cavalier : nom, prénom, date de naissance, responsable,
                    adresse, numéro de licence et d'assurance, niveau de galop et commune.</p>
                </li>
                <li><strong>Cours & inscriptions</strong>
                    <p>Création de cours avec horaires et jours, inscription des cavaliers aux cours
                    via la table de liaison inserer, et suivi des participations (présent/absent).</p>
                </li>
                <li><strong>Calendrier & événements</strong>
                    <p>Calendrier interactif (FullCalendar) pour visualiser, ajouter, modifier et
                    supprimer des événements et concours.</p>
                </li>
                <li><strong>Galerie photos</strong>
                    <p>Upload de photos liées aux chevaux ou aux événements, stockées dans
                    uploads/photos/ et référencées en base de données.</p>
                </li>
                <li><strong>Autocomplétion dynamique</strong>
                    <p>Recherche en temps réel via AJAX sur les communes, galops, robes, races,
                    chevaux, cours et cavaliers grâce à ajax_refresh.php.</p>
                </li>
                <li><strong>Authentification</strong>
                    <p>Connexion et création de compte pour accéder au back-office d'administration.</p>
                </li>
                <li><strong>Front-office public</strong>
                    <p>Pages publiques : accueil, services, informations, cavalerie, cours,
                    événements et formulaire d'inscription en ligne.</p>
                </li>
            </ul>
        </div>
        <div class="architecture">
            <h3>Architecture technique</h3>
            <ul>
                <li><strong>Frontend</strong>
                    <p>CSS personnalisé (style.css / style-front.css), JavaScript natif et jQuery
                    pour les interactions dynamiques, autocomplétion et gestion de la sidebar/scroll.</p>
                </li>
                <li><strong>Backend</strong>
                    <p>PHP orienté objet — une classe dédiée par entité (Cavalerie, Cavalier, Cours,
                    Participation, Inserer, Photo, Evenement, Concours, Galop, Robe, Race, Commune…),
                    requêtes préparées PDO pour la sécurité.</p>
                </li>
                <li><strong>Base de données</strong>
                    <p>MySQL/MariaDB (base cebg) avec une quinzaine de tables interconnectées :
                    cavalerie, cavalier, cours, inserer, participation, photo, evenement, concours,
                    galop, robe, race, commune, pension, ordonnance, medicament.</p>
                </li>
            </ul>
        </div>
        <div class="stack">
            <h3>Stack & dépendances</h3>
            <ul>
                <li>PHP — architecture orientée objet, PDO</li>
                <li>MySQL / MariaDB — base de données relationnelle</li>
                <li>CSS personnalisé — design responsive front & back</li>
                <li>JavaScript / jQuery (AJAX) — interactions dynamiques et autocomplétion</li>
                <li>FullCalendar — calendrier interactif des événements</li>
                <li>Font Awesome — icônes</li>
                <li>XAMPP — environnement de développement local</li>
            </ul>
        </div>`
};

function openCentreEquestreModal() {
    document.getElementById('modalTitle').textContent = centreEquestreDescription.title;
    document.getElementById('modalContent').innerHTML = centreEquestreDescription.content;
    document.getElementById('projectModal').classList.add('active');
}
