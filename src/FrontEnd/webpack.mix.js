const mix = require('laravel-mix');
require('laravel-mix-handlebars');
require('mix-env-file');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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
mix.env('./.env');


mix.handlebars('src/templates/', 'dist/', {
    ENV_GOOGLE_KEY: process.env.GOOGLE_KEY,
    ENV_PUSHER_KEY: process.env.PUSHER_KEY,
    ENV_PUSHER_CLUSTER: process.env.PUSHER_CLUSTER
});

mix.js('src/js/app.js', 'dist/js')
    .react()
    .sass('src/sass/app.scss', 'css');

mix.setPublicPath('dist');

mix.options({
    //   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
        processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
    //   purifyCss: false, // Remove unused CSS selectors.
    //   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    //   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
    });