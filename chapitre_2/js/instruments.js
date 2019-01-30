function infosLiens() {
    let liensElts = document.getElementsByTagName('a');

    if (liensElts.length > 0) {
        let firstLink = liensElts[0].getAttribute('href');
        let lastLink = liensElts[liensElts.length - 1].getAttribute('href');

        return `${liensElts.length}\n${firstLink}\n${lastLink}`;
    }
    return 0;
}

function possede(instrument, type) {
    let instrumentElt = document.getElementById(instrument);

    if (instrumentElt) {
        console.log(instrumentElt.classList.contains(type));
    } else {
        console.error(`Aucun element ne possède l'élément ${instrument}`);
    }
}

console.log(infosLiens() + '\n');

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur