// permet d'ajouter un élément au dom
document.getElementById('langages').innerHTML += '<li id="c">C</li>';

// Permet de vider un élément du dom
/* document.getElementById('langages').innerHTML = ''; */

// Permet de modifier le contenu textuel d'un element, en suivant deux méthodes de selection
/* document.querySelector('h1').textContent += " de programmation"; */
document.getElementsByTagName('h1')[0].textContent += " de programmation";

// Ajout ou mise à jour d'un attribut à un élément
/* document.querySelector('h1').setAttribute('id', 'titre'); */
document.querySelector('h1').id = 'titre';

// Ajout ou modification d'une class
let titreElt = document.getElementById('titre');
titreElt.classList.remove('debut');
titreElt.classList.add('titre');

// Ajouter un element dans le dom diverses variantes
let pythonElt = document.createElement('li');
pythonElt.id = 'python';
pythonElt.textContent = 'Python';
document.getElementById('langages').appendChild(pythonElt);

let rubyElt = document.createElement('li');
rubyElt.id = 'ruby';
rubyElt.appendChild(document.createTextNode('Ruby'));
document.getElementById('langages').appendChild(rubyElt);