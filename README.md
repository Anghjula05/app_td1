1er prompt :
    Voici mes spécifications.
    Ne génère pas le code final.
    Aide-moi à coder étape par étape en m'expliquant chaque fonction p5.js dont j'ai besoin.
    Commence par la section Canvas.

    Génère une application en p5.js avec un canvas gris clair de dimension 800x800.
    Deux personnages sont présents au milieu de l’écran, ils sont représentés par un cercle (pour la tête) et une ellipse (pour le torse).
    Les couleurs des personnages sont générés aléatoirement à partir d’une palette de 5 couleurs, laisse cette palette vide pour l’instant.
    Lorsque l’on clique sur un des personnages un petit cercle rouge doit apparaître sur sa tête.
    Un bouton est présent au-dessus des personnages. Lorsque l’on clique sur le bouton les personnages ‘glissent’ vers le bas pour sortir du champ et d’autres apparaissent à leur place.


Réponse :
    Bien sûr ! Je vais t'aider à coder cette application p5.js étape par étape, en me concentrant sur les explications des fonctions p5.js nécessaires à chaque section.
    Je ne générerai pas le code final complet, mais je te guiderai pour que tu puisses l'écrire toi-même, en précisant les fonctions clés, leurs paramètres et leur rôle.
    Nous commencerons par la section Canvas, comme demandé, puis nous avancerons progressivement vers les autres parties (personnages, couleurs, interactions, etc.).

    Je structurerai chaque étape avec :

    Une description de ce qu'on fait.
    Les fonctions p5.js impliquées (avec explications).
    Des conseils pour l'implémentation.
    Une suggestion pour passer à l'étape suivante.


Étape 1 : Configuration du Canvas
Objectif : Créer un canvas gris clair de 800x800 pixels dans de la fenêtre.

Étape 2 : Dessin des Personnages
Objectif : Dessiner deux personnages au milieu du canvas. Chaque personnage est composé d'un cercle (tête) et d'une ellipse (torse). Ils sont positionnés au centre horizontal, l'un à gauche et l'autre à droite.

    Pour cette partie l'IA m'a conseillé d'utiliser (width/2 - 100, height/2 - 50) et (width/2 + 100, height/2 - 50) pour la position des têtes et (width/2 - 100, height/2 + 20) et (width/2 + 100, height/2 + 20) pour celle des torses. J'ai ajusté la position des torses pour un meilleur rendu visuel.


Étape 3 : Couleurs aléatoires à partir d’une palette
Objectif : Utiliser une palette de 5 couleurs pour colorer les personnages de façon aléatoire.

    Pour cette partie l'IA m'a dit d'initialisé la palette dans setup() et d'ajouter une fonction generatePalette() qui attribue palette à un tableau de couleurs.
    fill(random(palette)); a été ajouté avant chaque objet.
    
    Après ces ajout la page web n'affiche plus rien. L'IA m'a dit d'ajouter un appel à generatePalette() dans setup() pour initialiser la palette avant le premier draw().
    Ça ne marchait toujours pas donc j'ai ajouté un noLoop(); à setup() et ai enlevé palette=[]; .


Étape 4 : Interaction clic sur un personnage
Objectif : détecter le clic sur une tête et afficher un petit cercle rouge sur cette tête.

    Pour cette partie j'ai demandé à l'IA de m'écrire la fonction mouseClicked().
    Le point rouge n'apparaîssait pas. L'IA m'a dit d'ajouter dans draw() :
        if (selectedHead === 'left') circle(leftHeadX, headY, 20);
        if (selectedHead === 'right') circle(rightHeadX, headY, 20);
    Et d'ajouter redraw(); dans mouseClicked().

Étape 5 : bouton et glissement vers le bas
Objectif : ajouter un bouton au-dessus des personnages. Lorsqu’on clique dessus, les personnages doivent glisser vers le bas et sortir du champ, puis de nouveaux personnages apparaissent à leur place.

    Pour cette partie j'ai demandé à l'IA de m'écrire l'animation.
    L'IA a aussi apporté des corrections au code :
        draw() utilise maintenant des positions calculées pour les têtes et torses.
        Le cercle rouge s’affiche sur la tête cliquée avec selectedHead.
        mouseClicked() fonctionne seulement quand l’animation est inactive et relance redraw().
        
    Les nouveaux personnages n'apparaissaient pas après le glissement. L'IA a apporté les corrections suivantes :
        Retiré noLoop() du setup(), donc draw() tourne en continu.
        Déplacé la mise à jour de offsetY dans draw() avant le dessin final.
        Enlevé le loop() inutile dans onButtonPressed().

J'ai ensuite rajouté des couleurs à la palette pour plus de diversité.