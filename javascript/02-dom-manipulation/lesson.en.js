// -- Target elements

// How do we target main elements?
const head = document.head;
const body = document.body;

// How do we target elements by tag?
// <div>
//   <p>...</p>
//   <p>...</p>
// </div>
const paragraphs = document.getElementsByTagName('p');

// How do we target elements by ID?
// <img src="..." id="my-image" />
const image = document.getElementById('my-image');
const slowImage = document.querySelector('#my-image');

// How do we target elements by class?
// <img src="..." class="blue" />
// <p class="blue">...</p>
const blueTags = document.getElementsByClassName('blue');
const slowBlueTags = document.querySelectorAll('.blue');

// *Recap*
// By HTML tag: document.getElementsByTagName(tagName)
// By id attribute: document.getElementById(id)
// By class attribute: document.getElementsByClassName(className)
// By any CSS selector:
// - Single element: document.querySelector(selector)
// - Multiple elements: document.querySelectorAll(selector)

// -- Change elements properties

// How do I dynamically change an element attribute?
const image = document.getElementById('my-image');
image.src = 'https://mywebsite.com/my-image.png';
image.style.border = '2px solid black';
image.anyAttribute = newAttributeValue;

// What about multiple elements? ...use a loop!
const images = document.getElementsByTagName('img');
for (const image of images) {
  image.width = '300px';
}
// Similar to:
// for (let i = 0; i <= images.length; i++) {
//   const image = images[i];
//   image.width = '300px';
// }

// *Recap*
// - For a single element, target it first, then change any attribute
//   through that element properties (e.g. element.style, element.src...)
// - For multiple elements, target them using a target method which
//   returns an array of elements (getElementsByTagName, querySelectorAll),
//   then loop over them, and update them one by one

// -- Events

// How do I make an element *listen* to an event?
function onClickImage(event) {
  // event.target refers to the clicked element
  event.target.style.borderColor = 'red';
}

document.getElementById('my-image').addEventListener('click', onClickImage);

// What if I don't want this element to listen to that event anymore?
// NOTE: careful, you need to pass the same function reference as its second parameter
document.getElementById('my-image').removeEventListener('click', onClickImage);

// *Recap*
// Listen for events on an element: element.addEventListener(eventName, callback)
// Stop listening: element.removeEventListener(eventName, callback)
// => callback should be the same function in order to stop listening to it
