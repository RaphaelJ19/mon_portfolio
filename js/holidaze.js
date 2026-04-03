const holidazeDescription = {
    title: "Holidaze — Plateforme web de location de biens meublés",
    content: `
        <div class="synopsis">
            <h3>Présentation</h3>
            <p>Application web full-stack de location de vacances développée en PHP/MySQL permettant
            aux voyageurs de rechercher et réserver des hébergements meublés (appartements, maisons, villas, gîtes),
            et aux propriétaires de gérer leurs annonces. L'interface suit une architecture MVC claire avec
            des classes PHP dédiées, des appels AJAX pour les interactions dynamiques et Tailwind CSS pour le design.</p>
        </div>
        <div class="features">
            <h3>Fonctionnalités principales</h3>
            <ul>
                <li><strong>Recherche avancée avec filtres dynamiques</strong>
                    <p>Autocomplétion des communes via l'API Geo du gouvernement français,
                    filtres en temps réel par type de bien, fourchette de prix, prestations
                    et affichage instantané des résultats via AJAX sans rechargement de page.</p>
                </li>
                <li><strong>Détail d'un bien</strong>
                    <p>Galerie photos, description complète, caractéristiques (superficie, couchages, animaux),
                    liste des prestations, avis et notes des locataires, tarifs saisonniers.</p>
                </li>
                <li><strong>Système de réservation</strong>
                    <p>Sélection des dates, vérification de disponibilité, calcul automatique du prix
                    selon les saisons et confirmation en base de données.</p>
                </li>
                <li><strong>Carte interactive</strong>
                    <p>Visualisation géographique de tous les biens disponibles avec marqueurs
                    et accès rapide à la fiche de chaque bien.</p>
                </li>
                <li><strong>Espace propriétaire</strong>
                    <p>Création et gestion des annonces, upload de photos, définition des tarifs
                    par saison, gestion des prestations et suivi des réservations.</p>
                </li>
                <li><strong>Dashboard administrateur</strong>
                    <p>Validation des biens avant publication, modération des avis,
                    gestion des utilisateurs, du personnel et des services de ménage.</p>
                </li>
            </ul>
        </div>
        <div class="architecture">
            <h3>Architecture technique</h3>
            <ul>
                <li><strong>Frontend</strong>
                    <p>Tailwind CSS pour le design responsive, JavaScript natif avec Fetch API
                    pour les appels AJAX, autocomplétion et filtres dynamiques sans rechargement.</p>
                </li>
                <li><strong>Backend</strong>
                    <p>PHP orienté objet avec architecture MVC — classes dédiées par entité
                    (BiensController, ReservationController, UtilisateurController…),
                    requêtes préparées PDO pour la sécurité.</p>
                </li>
                <li><strong>Base de données</strong>
                    <p>MySQL/MariaDB avec une quinzaine de tables interconnectées :
                    bien, commune, reservation, utilisateur, tarifs, saison, prestation,
                    avis, type_bien, personnel, menage.</p>
                </li>
            </ul>
        </div>
        <div class="stack">
            <h3>Stack & dépendances</h3>
            <ul>
                <li>PHP — architecture MVC, PDO</li>
                <li>MySQL / MariaDB — base de données relationnelle</li>
                <li>Tailwind CSS — design responsive</li>
                <li>JavaScript (Fetch API / AJAX) — interactions dynamiques</li>
                <li>API Geo gouvernementale — autocomplétion des communes</li>
                <li>Font Awesome — icônes</li>
                <li>XAMPP — environnement de développement local</li>
            </ul>
        </div>`
};

function openHolidazeModal() {
    document.getElementById('modalTitle').textContent = holidazeDescription.title;
    document.getElementById('modalContent').innerHTML = holidazeDescription.content;
    document.getElementById('projectModal').classList.add('active');
}
