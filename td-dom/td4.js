// Les variables nom de mangas
let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

function tirage() {
    // Sélection aléatoire
    let randomIndex = Math.floor(Math.random() * mangas.length);
    let selectedManga = mangas[randomIndex];

    // Affichage du résultat
    document.getElementById("affichage").innerText = "Manga sélectionné : " + selectedManga;
}