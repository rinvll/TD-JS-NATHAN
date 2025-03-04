function palindrome() {
    // Récupérer le mot saisi
    let mot = document.getElementById("id-mot-saisi").value.trim();

    // Verifi si l'entrée est vide et fais recommencer si c'est vide
    if (!mot) {
        alert("Veuillez entrer un mot !");
        return;
    }

    // Mettre le mot en majuscules
    let motNormalise = mot.toUpperCase();
    
    // Inverse le mot
    let motInverse = motNormalise.split("").reverse().join("");

    // Verifi si c'est un palindrome
    let message = `Mot saisi : ${motNormalise}<br>À l'envers : ${motInverse}<br>`;
    if (motNormalise === motInverse) {
        message += "<strong>Ce mot est un palindrome</strong>";
    } else {
        message += "<strong>Ce mot n'est pas un palindrome</strong>";
    }

    // Affiche le résultat
    document.getElementById("resultat").innerHTML = message;
}
