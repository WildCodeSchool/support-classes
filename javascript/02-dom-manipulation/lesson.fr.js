// -- Cibler des éléments

// Comment cibler des éléments principaux ?
const head = document.head;
const body = document.body;

// Comment cicler des éléments par balise/tag HTML ?
// <div>
//   <p>...</p>
//   <p>...</p>
// </div>
const paragraphs = document.getElementsByTagName('p');

// Comment cibler des éléments par ID ?
// <img src="..." id="my-image" />
const image = document.getElementById('my-image');
const slowImage = document.querySelector('#my-image');

// Comment cibler des éléments par classe CSS ?
// <img src="..." class="blue" />
// <p class="blue">...</p>
const blueTags = document.getElementsByClassName('blue');
const slowBlueTags = document.querySelectorAll('.blue');

// *Récap*
// Par balise HTML : document.getElementsByTagName(nomBalise)
// Par attribut id : document.getElementById(id)
// Par attribut class : document.getElementsByClassName(nomClasse)
// Par sélecteur CSS :
// - Elément unique : document.querySelector(selector)
// - Plusieurs éléments : document.querySelectorAll(selector)

// -- Changer les propriétés des éléments

// Comment changer la valeur d'un attribut d'un élément dynamiquement ?
const image = document.getElementById('my-image');
image.src = 'https://mywebsite.com/my-image.png';
image.style.border = '2px solid black';
image.anyAttribute = newAttributeValue;

// Et pour plusieurs éléments ? ...on utilise une boucle !
const images = document.getElementsByTagName('img');
for (const image of images) {
  image.width = '300px';
}
// Equivalent à :
// for (let i = 0; i <= images.length; i++) {
//   const image = images[i];
//   image.width = '300px';
// }

// *Récap*
// - Pour un élément unique, il faut d'abord le cibler, puis changer la valeur
//   de l'attribut via ses propriétés, par exemple element.style, element.src...
// - Pour plusieurs éléments, il faut les cibler en utilisant une méthode qui
//   retourne une liste/un tableau d'éléments (getElementsByTagName, querySelectorAll),
//   puis boucler sur cette liste, en les modifiant un par un

// -- Evénements

// Comment permettre à un élément *d'être à l'écoute* d'évènements ?
function onClickImage(event) {
  // event.target fait référence à l'élément cliqué
  event.target.style.borderColor = 'red';
}

document.getElementById('my-image').addEventListener('click', onClickImage);

// Et si je ne souhaite plus écouter cet événement ?
// NOTE: attention, vous devez passer la même référence de la fonction passée
//       auprès d'addEventListener
document.getElementById('my-image').removeEventListener('click', onClickImage);

// *Récap*
// Être à l'écoute d'événements sur un élément :
// element.addEventListener(nomEvenement, callback)
// Arrêter d'écouter l'événement :
// element.removeEventListener(nomEvenement, callback)
// => callback doit correspondre à la même référence utilisée
//    avec addEventListener
