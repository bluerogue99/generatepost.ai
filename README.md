## postgenerator.io

postgenerator.io is a SaaS built with Laravel backend and React frontend. It includes a freemium model and a premium logged in authenticated layout. Users can create social media posts via the application. 

Freemium layout: 
    - AI Text generator based on entered topic which is converted into text prompt (Completed)
    - AI Image generator based on text prompt (Completed)
    - Preview of the preferred platform (Completed)
    - Supports Facebook, Instagram, TikTok, X, LinkedIn (Completed)
    - Selectable platform (Completed)
    - Selectable generation tone (Completed)

Premium authenticated layout: 
    - Post scheduling and automation
    - Performance analytics
    - Post history
    - Draft management - Statuses: Published / Draft / Scheduled
    - Branded posts
    - Extended tones for professional persona


Setup: 
App setup on server: 
run git clone https://github.com/bluerogue99/postgenerator.io.git <postgenerator.io>
run cd domains (this may depend on your server setup)
run cd <postgenerator.io> (this may depend on your server setup)
download composer 2.X from composer's website
php ~/composer.phar install
-> set up database
-> create your .env file, place it on the server
run php artisan key:generate --ansi
if you use storage run: php artisan storage:link

Create linking: 
public_html -> public
ln -s public public_html

NPM and Vite: 
npm install
npm install vite --save-dev
Just for the first time you should install npm packages for react, useeffect, useState, lucide, axios, stripe, openai etc. (any other missing package dependency would be flagged to you on FE console) 
npm run dev
npm run build

 ➜  APP_URL: https://postgenerator.io/
