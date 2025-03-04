function construirePyramide() {
    let lignes = document.getElementById("ligne-pyramide").value;  // Récupère le nombre de lignes entré par l'utilisateur
    let pyramide = ""; // Variable qui garde la pyramide
    
    if (isNaN(lignes) || lignes <= 0) { // Vérifie si l'entrée est un nombre valide et supérieur à 0
        alert("Veuillez entrer un nombre valide de lignes.");
        return;
    }

    for (let i = 1; i <= lignes; i++) {
        let tirets = "-".repeat(lignes - i);  // Tirets pour l'alignement
        let etoiles = "*".repeat(2 * i - 1);   // Étoiles
        pyramide += tirets + etoiles + tirets + "<br>"; // Assemble et ajoute un retour à la ligne
    }

    document.getElementById("pyramide").style.fontFamily = "monospace"; // Police monospace pour alignement
    document.getElementById("pyramide").innerHTML = pyramide.replace(/ /g, "&nbsp;"); // Remplacement des espaces pour HTML
}
