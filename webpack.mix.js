const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


mix.combine([
    'resources/assets/css/bootstrap.css',
    'resources/assets/css/style.css',
    'resources/assets/css/blog-post.css',
    'resources/assets/css/metisMenu.css',
    'resources/assets/css/font-awesome.min.css',
    'resources/assets/css/sb-admin-2.css',
], 'public/css/libs.css');


mix.js([
    'resources/assets/js/app.js',
    'resources/assets/js/jquery.js',
    'resources/assets/js/bootstrap.js',
    'resources/assets/js/metisMenu.js',
    'resources/assets/js/sb-admin-2.js',
    'resources/assets/js/script.js',


], 'public/js/libs.js');