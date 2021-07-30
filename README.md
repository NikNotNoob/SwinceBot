# SwinceBot

SwinceBot est un bot vraiment épais qui sert à faire plein de trucs pour les étudiants en Génie Info.

## Prérequis

Utilisez [NodeJS](https://pip.pypa.io/en/stable/) et installer les dépendances avec npm.

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
