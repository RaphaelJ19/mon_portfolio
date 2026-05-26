const webuzzDescription = {
    title: "Stage — Webuzz (05 Janvier – 13 Février 2026)",
    content: `
        <div class="synopsis">
            <h3>Présentation</h3>
            <img src="/mon_portfolio/images/webuz.png" alt="Webuzz" style="width:100%;border-radius:4px;margin-bottom:1rem;">
            <p>Durant mon stage, j'ai participé à la création et à l'amélioration du site <strong>Mamm'Aînes</strong> à l'aide de WordPress.
            J'ai travaillé sur la mise en page du site, l'organisation des différentes pages ainsi que l'intégration des contenus
            afin de proposer un site clair, moderne et accessible aux utilisateurs.</p>
            <p>J'ai également utilisé les fonctionnalités de WordPress pour gérer les thèmes, les extensions et la personnalisation du site.</p>
        </div>
        <div class="features">
            <h3>SEO — Référencement naturel</h3>
            <p>J'ai participé à l'optimisation du site pour améliorer sa visibilité sur les moteurs de recherche comme Google. Cela comprenait notamment :</p>
            <ul>
                <li>L'optimisation des titres et descriptions des pages</li>
                <li>L'utilisation de mots-clés adaptés</li>
                <li>L'amélioration de la structure du contenu</li>
                <li>L'optimisation des images et des performances du site</li>
                <li>Le travail sur le référencement local et l'accessibilité mobile</li>
            </ul>
        </div>
        <div class="stack">
            <h3>Compétences développées</h3>
            <ul>
                <li>Création de sites web sous WordPress</li>
                <li>Gestion de contenu (thèmes, extensions, personnalisation)</li>
                <li>Référencement SEO</li>
                <li>Accessibilité mobile et performances web</li>
            </ul>
        </div>`
};

function openWebuzzModal() {
    document.getElementById('modalTitle').textContent = webuzzDescription.title;
    document.getElementById('modalContent').innerHTML = webuzzDescription.content;
    document.getElementById('stageModal').classList.add('active');
}

function closeStageModal() {
    document.getElementById('stageModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('stageModal').addEventListener('click', function (e) {
        if (e.target === this) closeStageModal();
    });
});
