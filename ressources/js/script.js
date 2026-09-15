function connexion(event) {
    event.preventDefault();

    window.location.href = "dashboard.html";
}

    function ajouterRecette(event) {
    event.preventDefault();

    let date = document.getElementById("date").value;
    let montant = document.getElementById("montant").value;
    let categorie = document.getElementById("categorie").value;
    let libelle = document.getElementById("libelle").value;

    let liste = document.getElementById("liste-recettes");

    liste.innerHTML += `
        <tr>
            <td>${date}</td>
            <td>${montant} FCFA</td>
            <td>${categorie}</td>
            <td>${libelle}</td>
        </tr>
    `;
}
