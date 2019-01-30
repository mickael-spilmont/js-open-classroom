function compterElements(selecteur) {
    if (selecteur.length > 1) {
        return document.querySelectorAll(selecteur).length;
    } else {
        return document.getElementsByTagName(selecteur).length;
    }
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2