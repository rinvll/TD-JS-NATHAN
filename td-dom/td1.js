function trouverMotPlusLong() {
    // Recupere le texte contenu dans l'element ayant l'ID "citation"
    let citation = document.getElementById("citation").textContent;
    // Retire les ponctuations
    let mots = citation.split(/\s+|[,.'’]+/).filter(mot => mot.length > 0);
     // une variable pour garder le mot le plus long
    let motPlusLong = "";
     // Parcourt la liste des mots
    for (let mot of mots) {
        if (mot.length > motPlusLong.length) {
            motPlusLong = mot;
        }
    }
    // Affiche le résultat
    document.getElementById("motPlusLong").textContent = 
        `Le mot le plus long du paragraphe est "${motPlusLong}" avec une longueur de "${motPlusLong.length}" lettres.`;
}

// Exécute la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", trouverMotPlusLong);
