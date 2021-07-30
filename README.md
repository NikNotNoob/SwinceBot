# SwinceBot

SwinceBot est un bot vraiment épais qui sert à faire plein de trucs pour les étudiants en Génie Info.

## Fonctionalités et amélioration en développement

Liste des fonctionnalités sur lesquelles je développe en ce moment :

- Transformation de PDF en PDF lisible : Puisque plusieurs sont tannés de ne pas pouvoir faire Ctrl-F sur les documents PDFs fournis par l'université, puisqu'ils sont photocopiés, je travaille sur une commande qui va pouvoir ajouter du texte en arrière plan d'un document PDF fourni en paramètre afin qu'il en soit possible de faire de la recherche, en utilisant l'API Cloud Vision de Google; ![Utilisation de l'api](https://media.discordapp.net/attachments/810629264805330995/870535572752568350/unknown.png)

Liste de fonctionalités futures:

- Intégration d'un API mathématique tel que WolframAlpha pour solutionner des équations directement avec le bot;

- Polls et votes;

- Système de notifications pour de nouvelles notes qui sortent;

Liste d'améliorations futures :

- Fonctions de lecture et écriture de fichier simplifiés afin de toujours créer un fichier et les dossiers qui le contiennent s'ils n'existent pas;

- Implémentation de TypeScript pour les commandes et évenements qui contiennent la même syntaxe;

- Placement des compteurs de soinces dans une BD;

- Paramétrisation de la variable `debug` dans le fichier `auth.json`;

## Prérequis

Utilisez [NodeJS](https://nodejs.org/en/download/) et installer les dépendances avec npm.

```bash
npm install
```

Afin de configurer le projet, il doit exister un fichier `auth.json` à la racine du projet, contenant les paramètres suivants.

```json
{
	"token": "{INSÉRER VOTRE TOKEN DE BOT DISCORD ICI}",
	"debugMode": false
}
```

Si jamais vous voulez changer le préfix d'utilisation du bot, il faut le changer dans `config.json`. Le préfix est `>` par défaut.

```json
{
	"prefix": "{PRÉFIX QUE VOUS VOULEZ}"
}
```

## Utilisation

Pour démarrer le bot, simplement utiliser l'utilitaire `npm`.

```bash
npm start
```

Il est aussi possible de le démarrer directement à partir de la commande `node`.

```bash
node bot.js
```

## Contribution

J'accèpte les contributions en bières ou coupes de vins, mais si vous voulez aider avec le bot, vous pouvez me contacter sur Discord: Nik#9393
