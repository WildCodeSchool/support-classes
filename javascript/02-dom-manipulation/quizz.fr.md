# Quizz

_Il peut y avoir plusieurs bonnes réponses..._ 😈

- Comment cibler cet élément ?

  ```html
  <p id="headline">Achète mon produit !</p>
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

- J'aimerais cibler toutes les images sur ma page. Est-ce correct ?

  ```js
  const images = document.querySelectorAll('img');
  ```

  1. Yes
  2. No!

- Comment rendre le texte de ce paragraphe bleu ?

  ```html
  <p>Je m'appelle John</p>
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

- Une dernière pour la route : pour être à l'écoute d'un double clic sur un élément, on utilisera `dblclick`. Quel code est correct pour qu'un élément écoute cet événement ?
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
