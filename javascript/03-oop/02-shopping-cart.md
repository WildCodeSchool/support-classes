# JavaScript OOP

## Sujet 2 - Panier d'achat (shopping cart)

L'idée est d'écrire deux classes principales : `Cart` (panier) et `Item` (article).

On pourra ajouter plusieurs instances de `Item` à une instance de `Cart`.

L'un des intérêts de la POO est de pouvoir créer des classes "spécialisées", de façon à leur donner des comportements spécifiques.

Par exemple, on peut "dériver" trois classes héritées de `Item`, chacune correspondant à un certain taux de TVA.

* `StandardVATItem` pour les produits et services au taux régulier de 20% de TVA,
* `ReducedVATItem` pour les produits et services au taux réduit de 5% de TVA,
* `ZeroVATItem` pour les produits et services sans TVA.

1. Commence par écrire la classe de base `Item`. Son constructeur doit accepter un paramètre : `basePrice`, et donner cette valeur à l'attribut du même nom. 
2. Ajoute une méthode `getPriceWithVAT`. Elle doit renvoyer le prix avec TVA. La TVA dans ce cas va être représentée par un nombre à virgule. Par exemple 0.2 correspond à 20%. Pour l'instant, tu ne sais pas encore combien vaut la TVA, mais pars du principe que la méthode va renvoyer `(1 + this.vat) * this.price`.
3. Ecris les trois classes qui héritent de `Item`. Toutes ont un constructeur qui accepte le même paramètre `basePrice` que la classe de base. Toutes doivent renseigner `this.vat` :

    * donner la valeur `0.2` pour `StandardVATItem`
    * donner la valeur `0.05` pour `ReducedVATItem`
    * donner la valeur `0` pour `ZeroVATItem`
4. Crée quelques instances de ces trois classes.
5. Ecris la classe `Cart`. Elle doit initialiser un attribut `items`, un tableau vide au départ.
6. Ajoute lui une méthode `addItem` qui accepte un paramètre `item` (lequel sera une instance d'une des classes dérivées de `Item`).
7. Ajoute une méthode `getTotalPrice` qui va calculer le prix total du panier d'achat, en utilisant `getPriceWithVAT` sur chacun des articles stockés dans `this.items`.
8. Crée une instance de `Cart` et ajoute lui plusieurs articles, et affiche le prix total du panier.

