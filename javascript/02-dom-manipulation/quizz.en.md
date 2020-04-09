# Quizz

_There could be multiple correct answers..._ 😈

- How to target this element?

  ```html
  <p id="headline">Buy our product!</p>
  ```

  1. ```js
     document.getElementById('headline');
     ```
  2. ```js
     document.querySelector('headline');
     ```
  3. ```js
     document.querySelector('#headline');
     ```
  4. ```js
     document.getElementsByClassName('headline');
     ```

- I want to target all the images on my page. Is the following correct?

  ```js
  const images = document.querySelectorAll('img');
  ```

  1. Yes
  2. No!

- How to change this paragraph to be all in blue?

  ```html
  <p>My name is John</p>
  ```

  1. ```js
     document.getElementById('p').style.color = 'blue';
     ```
  2. ```js
     document.querySelector('p').style.color = 'blue';
     ```
  3. ```js
     document.getElementsByTagName('p')[0].style.color = 'blue';
     ```
  4. ```js
     document.getElementsByClassName('p')[0].style.color = 'blue';
     ```

- Last one: to listen to a double click event on an element, we use `dblclick`. Which code is correct for an element to listen to it?
  1. ```js
     element.addEventListener('click', () => ...);
     ```
  2. ```js
     element.removeEventListener('dblclick', () => ...);
     ```
  3. ```js
     element.addEventListener('ondblclick', () => ...);
     ```
  4. ```js
     element.addEventListener('dblclick', () => ...);
     ```
