var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

// Afficher le premier element enfant de body
console.log(document.body.childNodes[1]);

// Parcour des noeuds enfants de body
// document.body.childNodes.forEach(noeud => console.log(noeud));

console.log(b.childNodes[1].parentNode);