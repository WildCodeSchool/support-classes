/**
 * Cours de soutien JS - Boucles et fonctions
 * Deuxième exercice : sujets de cours de soutien
 *
 * Tu l'as constaté, on vote pour les sujets de soutien proposés via des emojis.
 * On va ici chercher à réaliser la même chose en JavaScript !
 *
 * On va en créer deux versions :
 *   - une simple avec juste un compteur de votes
 *   - une plus complexe où on permettra de voter avec n'importe quel emoji !
 *
 * 1. La version simple.
 *    On te fournit un tableau de sujets : `simpleTopics`.
 *    Chaque sujet est un _objet littéral_ avec deux attributs : "topic" et "votes"
 *
 *    Ecris une fonction `voteForTopic` qui reçoit en paramètres
 *      1. le tableau d'objets
 *      2. le nom d'un des topics
 *    Elle doit modifier l'objet dont le "topic" correspond au 2ème paramètre,
 *    pour augmenter son attribut "votes" de 1, puis renvoyer le tableau.
 *
 * A la fin ecris une fonction `countEmojis` prenant en 1er parametre le tableau de topics,
 *    en 2nd le nom d'un topic, et qui renvoie le nombre de votes.
 *
 * 2. La version (a peine) plus complexe
 *    On te fournit un tableau de sujets: `advancedTopics`.
 *    Chaque sujet est un objet avec deux attributs: "topic" et "emojis".
 *    Ce dernier attribut n'est plus un entier mais un tableau.
 *
 *    Ecris une fonction `voteWithEmoji` qui recoit en parametres :
 *      1. le tableau d'objets
 *      2. le nom d'un topic
 *      3. un emoji (tu peux copier-coller un emoji de Slack dans une string, cela marche !)
 *    La fonction doit modifier l'objet dont le topic corresopnd au 2eme parametre.
 *    Tu dois ajouter l'emoji a ce tableau.
 *
 */

const topics = [
  {
    topic: 'Loops and functions',
    votes: 0
  },
  {
    topic: 'DOM manipulation',
    votes: 0
  },
  {
    topic: 'POO',
    votes: 0
  },
  {
    topic: 'React - props',
    votes: 0
  },
];

