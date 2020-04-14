# JavaScript OOP (Object-Oriented Programming)

## Sujet 1 - Formes géométriques

Par avance : désolé si tu n'as jamais eu la bosse des maths ! Mais rassure-toi, la géométrie n'est qu'un prétexte pour travailler sur les classes et instances.

### Exercice 1

1. Ecris une classe `Shape`.
2. Son constructeur doit accepter **un** paramètre `color`, et l'utiliser pour initialiser l'attribut du même nom sur une nouvelle instance.
3. Crée deux instances de `Shape` avec des couleurs différentes.
4. Ajoute une méthode `toString()` à la classe. Si tu appelles cette méthode sur une instance initialisée avec la couleur `red`, elle doit te renvoyer la chaîne : `Shape of color: red`.
5. Utilise `console.log` pour visualiser ce que renvoie cette méthode pour les deux instances que tu as créées précédemment.

### Exercice 2

1. Ecris une classe `Rectangle` qui **hérite** de `Shape`.
2. Son constructeur doit accepter **trois** paramètres (attention, tu vas probablement avoir besoin d'utiliser le constructeur de la classe parente) :

    1. `color` - comme pour `Shape` et à la même position,
    2. `longSize` - la longueur du côté le plus long,
    3. `shortSize` - la longueur du côté le plus court
3. Crée deux instances de `Rectangle`, avec des couleurs, et tailles de côtés différentes.
4. Ré-écris la méthode `toString()` dans la classe `Rectangle`. Elle va "remplacer" celle de la classe parente (le terme anglais est "override", traduit de façon approximative par "redéfinir"). Appelée sur une instance de `Rectangle`, elle doit renvoyer: `Rectangle of color: color and dimensions: Lxl` (en remplaçant `color` par l'attribut `color`, `L` par l'attribut `longSize`, `l` par l'attribut `shortSize`).
5. Ecris la méthode `getArea` qui permet de calculer l'aire (surface) du rectangle ; la formule mathématique est AxB (où A est un côté et B est l'autre côté).
6. Ecris la méthode `getPerimeter` qui permet de calculer le périmètre du rectangle ; la formule mathématique est 2xA + 2xB.

### Exercice 3

1. Ecris une classe `Circle` qui hérire de `Shape`.
2. Son constructeur doit accepter **deux** paramètres :

    1. `color`
    2. `radius` - le rayon du cercle
3. Crée deux instances de `Circle`, avec des couleurs et rayons différents.
4. Ré-écris la méthode `toString`, qui doit renvoyer : `Circle of color: color and radius: r` (en remplaçant `color` et `r` par les attributs `color` et `radius` respectivement).
5. Ecris la méthode `getArea` pour calculer l'aire ; formule : Pi x r² (en JS on peut accéder à Pi par `Math.PI` qui n'est pas une fonction mais une constante du langage).
6. Ecris la méthode `getPerimeter` pour calculer le périmètre ; formule : 2 x Pi x r
