/**
 * Cours de soutien PHP - Boucles et fonctions
 * Premier exercice : jeu de loto
 *
 * 1. Ecris la fonction `getNumber`, qui génère un nombre aléatoire
 * entre 1 et 59 (inclus). Utilise pour cela la fonction `rand` de PHP.
 * 2. Implémente une function nommée `drawSixNumbers` qui génère un tableau de six nombres.
 *    Elle doit bien sûr utiliser `getNumber`.
 *    Pour le début, ne te préoccupe pas des nombres dupliqués.
 *    S'il reste du temps à la fin, on pourra revenir sur cette question.
 * 3. Utilise la fonction deux fois :
 *      - d'abord pour générer les choix du joueur (stocke-les dans `$playersChoices`)
 *      - ensuite pour générer les résultats du jeu (stocke-les dans `$gameResults`)
 * 4. Crée une autre fonction : `computeScore`, qui retourne combien des nombres choisis
 *    par le joueur ont été trouvé dans les résultats du jeu. Cette fonction devrait prendre
 *    en 1er paramètre les choix du joueur, et en 2nd paramètre le tableau de résultats.
 * 5. Affiche les choix du joueur, les résultats du jeu et le score du joueur.
 */

