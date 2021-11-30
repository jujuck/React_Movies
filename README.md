## Préparation
Ceci est un projet Front End s'intégrant dans un module Workshop avec le repo Back End Express_MySQL_Movies
- 1/ Réaliser le workshop Express_MySQL_Movies (Part 1)
- 2/ Git clone && git Install le projet puis paramétrer son .env
- 3/ Mettre en place 3 routes avec leurs composants respectifs (/, /Single/:id, /AddMovie) Attention, en mode version React Router DOM V6
- 4/ Structure de la page : ajouter un composant Nav, Herau dessus des routes dans app.js. La structure de notre page doit rester identique lorsque l'on navigue
- 5/ Mise en place du CSS, logo du menu
- 6/ Mise en place de la bannière Hero avec une image en background et un slogan
- 7/ Page Home : mise en place d'un state movies et fetch de notre back end (pensez à lancer un deuxième process sur votre PC avec votre projet Express_MySQL_Movies)
      Attention, pour pouvoir effectuer des requetes depuis des origines différentes, il faut les autoriser.
      Retournez dans votre projet Back End, installez cors, importer le dans le fichier principale et ajouter 'app.use(cors())' au dessus de app.use(express.json()
- 8/ Mise en place d'un map sur notre state pour afficher les titres des films
- 9/ Ajouter un composant carte pour chaque film avec un titre et une image en fonction de son genre
- 10/ Ajout de la fonction OnClick avec un bouton sur notre carte pour aller à la page single avec ajout de l'id
- 11/ Page Single : récupération de l'id en params, mise en place d'un state pour un film et fetch de notre back end pour récupérer la donnée
- 12/ Mise en forme des détails avec images, titre, description, genre, annee et durée
- 13/ Ajout du bouton supprimer avec onClick => suppression en BDD et redirection vers home
- 14/ Amelioration UX, lors de la suppression un modal (nouveau composant npm react-modal ) de confirmation est mis en place, puis message de confirmation de suppresion. Lors du clic sur OK, redirection ver home
 -15/ Ajout d'un bouton Modifier qui ouvrira un modal (Restructurer le message pour une meilleure utilisation du modal)
 -16/ Dans ce modal, faire un formulaire qui récupérera les values du films pour modification, puis envoir de la requete PUT pour modifier le films. A la fermeture du modal les informations de la page doivent être à jour.
 -17/ Mettre en place la page création à partir du formulaire déjà existant en y ajoutant une method Post. Pensez à y integrer la vérification de la présence des champs, sinon message UX puis si requete succes, redirection vers home
