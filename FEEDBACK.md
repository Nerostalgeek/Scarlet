## le non tech
- Il manque les journaux de bord. Sont-ils ailleurs ?


## Les plus
- Dockerfiles et docker-compose
- mono repo bien organisé
- code déjà bien avancé
- backend : 
  - models bien conçus
  - routage clair


## Les moins
- Dockerfile "frontend" ne build pas => `yarn run build`: "can't find /app/scripts/build.js"
- mélange syntaxe callback/syntaxe async, par exemple dans le router driverLicence. Choissisez un camp !
- ça manque de commentaires! 
- gestion des paiements "tout à la main" (garder des numéros de carte en BDD, c'est prendre énormément de risques)

## Sur quoi il faut se concentrer
- Il faut séparer le routage de la logique. Donc implémenter des controllers !
- sécurité : 
  - CORS trop laxiste (donc inutile). Astuce : mettez les noms de domaines front et back dans un .env, puis servez vous de process.env pour setup un CORS solide.
  - Rajouter des jetons anti-CSRF dans les formulaires
  - Etre plus explicite sur la config JWT (date d'expiration, ...)
- intégrer une API de paiement (stripe, mangopay, paypal, ...)  [je vous conseille Stripe, trop easy]

## Après, pour être nickel
- Des tests unitaires !! (au moins quelques un pour montrer que vous avez compris le principe et que vous connaissez les outils)
- Rédiger une doc "how to install and run".
- Ajouter des fixtures dans le repo. Un dump d'une base de données de dev, ou un script qui génère des datas.

