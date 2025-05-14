
# Guide d'intégration WordPress pour Solio Group

Ce document explique les étapes précises pour intégrer ce site React avec WordPress comme CMS headless.

## 1. Configuration WordPress

### Installation et configuration initiale
1. **Installer WordPress** sur votre hébergement
2. **Configurer un domaine** pour votre WordPress (ex: `cms.soliogroup.com`)
3. **Installer les plugins essentiels** :
   - **ACF (Advanced Custom Fields)** - Pour les champs personnalisés
   - **ACF to REST API** - Pour exposer les champs ACF via l'API REST
   - **Custom Post Type UI** - Pour créer des types de contenu personnalisés
   - **JWT Authentication for WP-API** - Pour sécuriser l'API REST

### Configuration CORS pour l'API
Ajouter ce code au fichier `.htaccess` de votre WordPress :
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
</IfModule>

# Enable CORS
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "GET, POST, OPTIONS, PUT, DELETE"
  Header set Access-Control-Allow-Headers "Authorization, Content-Type"
</IfModule>
```

### Structure du contenu WordPress

1. **Types de contenu personnalisés** :
   - Créer des types pour : `actualites`, `evenements`, `projets`, `emplois`
   - Configurer les champs appropriés pour chaque type

2. **Pages WordPress** :
   - Créer des pages pour : Accueil, Présentation, Mission & Vision, etc.
   - Utiliser ACF pour structurer le contenu de chaque page

3. **Taxonomies** :
   - Configurer des catégories pour les différents types de contenu
   - Ajouter des étiquettes pour le filtrage

## 2. Modification de l'application React

### Configurer l'URL de l'API WordPress
1. Modifier le fichier `src/services/wordpressApi.ts` :
   - Remplacer `YOUR_WORDPRESS_SITE_URL` par l'URL réelle de votre WordPress

### Adapter les composants pour utiliser les données WordPress
1. **Composants de page** :
   - Modifier chaque page pour récupérer les données depuis WordPress
   - Exemple :
   ```typescript
   import { useWordPressPage } from '@/hooks/useWordPress';
   
   const MaPage = () => {
     const { data, isLoading, error } = useWordPressPage('nom-de-la-page');
     
     if (isLoading) return <div>Chargement...</div>;
     if (error) return <div>Erreur de chargement</div>;
     
     return (
       <div>
         <h1 dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
         <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
       </div>
     );
   };
   ```

2. **Listes d'articles, événements, etc.** :
   - Modifier pour utiliser `useWordPressPosts` avec des filtres appropriés

### Gestion du menu
1. Créer un menu dans WordPress
2. Récupérer le menu via l'API REST WordPress
3. Adapter le composant `Header.tsx` pour utiliser ce menu dynamique

## 3. Tests et déploiement

1. **Tester localement** :
   - Vérifier que toutes les routes fonctionnent
   - Confirmer que les données sont correctement récupérées

2. **Déploiement** :
   - Déployer l'application React sur votre hébergement
   - Configurer le domaine principal (ex: `soliogroup.com`)

3. **Vérifications finales** :
   - Tester toutes les fonctionnalités sur le site en production
   - Vérifier les performances et optimiser si nécessaire

## 4. Gestion du contenu

1. **Former les éditeurs** à utiliser WordPress pour mettre à jour le contenu
2. **Documenter les workflows** pour l'ajout de nouveau contenu
3. **Configurer des rôles et permissions** appropriés dans WordPress

## 5. Maintenance

1. **Mettre à jour régulièrement** WordPress et ses plugins
2. **Sauvegarder la base de données** WordPress régulièrement
3. **Surveiller les performances** de l'API REST

## Ressources supplémentaires

- [Documentation officielle de l'API REST WordPress](https://developer.wordpress.org/rest-api/)
- [Guide ACF pour l'API REST](https://www.advancedcustomfields.com/resources/wp-rest-api-integration/)
- [Documentation React Query](https://tanstack.com/query/latest/docs/react/overview)
