const projectDescription = {
    mobile_meuble: {
        title: "mobile_meuble — Application Flutter de location de biens meublés",
        content: `
            <div class="synopsis">
                <h3>Présentation</h3>
                <p>Application mobile Flutter connectée à une API PHP/MySQL locale permettant de rechercher,
                consulter et réserver des biens meublés (appartements, maisons, gîtes).
                L'interface est entièrement en français et suit une architecture MVC claire :
                modèles Dart, services HTTP et pages Flutter.</p>
            </div>
            <div class="features">
                <h3>Fonctionnalités principales</h3>
                <ul>
                    <li><strong>Accueil avec recherche et filtres</strong>
                        <p>Barre de recherche par ville, filtres avancés (prix, prestations, couchages, animaux)
                        et liste paginée des biens en grille 2 colonnes.</p>
                    </li>
                    <li><strong>Détail d'un bien</strong>
                        <p>Photo, description, caractéristiques (superficie, couchages, animaux),
                        prestations sous forme de chips, avis notés avec étoiles.</p>
                    </li>
                    <li><strong>Réservation</strong>
                        <p>Sélection des dates d'arrivée/départ, vérification de disponibilité en temps réel,
                        calcul du total et confirmation en base de données.</p>
                    </li>
                    <li><strong>Carte interactive</strong>
                        <p>Carte OpenStreetMap (flutter_map) avec marqueurs pour chaque bien géolocalisé,
                        géolocalisation de l'utilisateur, distance à vol d'oiseau et fiche rapide au tap.</p>
                    </li>
                </ul>
            </div>
            <div class="architecture">
                <h3>Architecture technique</h3>
                <ul>
                    <li><strong>Frontend</strong>
                        <p>Flutter/Dart — navigation par BottomNavigationBar (Accueil / Carte),
                        FutureBuilder pour les appels asynchrones, StatefulWidget pour les états locaux.</p>
                    </li>
                    <li><strong>Backend</strong>
                        <p>API REST en PHP avec prepared statements MySQL.
                        Endpoints : biens paginés et filtrés, détail d'un bien, disponibilité, réservation.</p>
                    </li>
                    <li><strong>Modèles</strong>
                        <p>Bien (avec Prestation et Avis imbriqués), Prestation — sérialisés via fromJson/toJson.</p>
                    </li>
                </ul>
            </div>
            <div class="stack">
                <h3>Stack & dépendances</h3>
                <ul>
                    <li>Flutter · Dart</li>
                    <li>http — appels API REST</li>
                    <li>flutter_map + latlong2 — carte OpenStreetMap</li>
                    <li>geolocator — géolocalisation GPS</li>
                    <li>flutter_localizations — localisation française</li>
                    <li>PHP + MySQL (XAMPP) — backend local</li>
                </ul>
            </div>`
    }
};

function openModal(projectKey) {
    const project = projectDescription[projectKey];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalContent').innerHTML = project.content;
    document.getElementById('projectModal').classList.add('active');
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('projectModal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
});
