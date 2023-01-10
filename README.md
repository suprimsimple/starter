# Prometheus

A Craft CMS starter project with Tailwind or SCSS.

![Logo](prometheus.jpeg)

**This project uses:**

-   [gulp](https://github.com/gulpjs/gulp)
-   [Vite](https://vitejs.dev/)
-   [Craft CMS](https://craftcms.com/docs/4.x/)
-   [DDEV](https://ddev.readthedocs.io/en/stable/)
-   [Sass](https://sass-lang.com/)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [Alpine.js](https://alpinejs.dev/)
-   [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)

## Installation

_This process will eventually be automated through a setup command._

1. `ddev config`.
   Enter a `name` that matches the production domain without the TLD.
   e.g. `simple.com.au` becomes `simple`, `council.sa.gov.au` becomes `council`.
2. `ddev config --additional-fqdns name.test,subdomain.name.test --php-version 8.1`
3. `ddev start && ddev composer install && ddev npm install`
4. `ddev import-db --src=prometheus.sql` OR configure Swiff and use `swiff --databasepull`
5. Update the `.env` file that should be generated after composer install
6. If using Tailwind
    1. `cp -r ./templates-tailwind/* ./templates`
    2. `rm -rf ./src/styles/scss`
7. If using Sass
    1. `cp -r ./templates-sass/* ./templates`
    2. `rm -rf ./src/styles/css && ./tailwind.config.js`
    3. Update `postcss.config.js` to only keep autoprefixer
8. Update imports in `./src/scripts/site.js`, remove unused JS Modules
9. Tidy up. `rm -rf ./templates-tailwind ./templates-sass`

## NPM Tasks

The following tasks are available:

```bash
# COMING SOON
# npm run setup
# Setup the project if this is your first time working on it

npm run dev
# Run the development server

npm run csr
# Run React Application for development


npm run build
# Run the production build
```

## Requirements

-   **Node:** > v16.0.0
-   **DDEV:** > v1.21.2

## Development

Utility command exist to help when updating the templates or styling, allowing
developers to preview either boilerplate.

-   `p8s-tailwind` This creates a symlink to all Tailwind templates
-   `p8s-sass` This creates a symlink to all Sass templates
-   `p8s-reset` This removes all symlinks within `/templates` and must be done
    prior to making a new commit.
