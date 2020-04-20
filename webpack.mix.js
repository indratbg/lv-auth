const mix = require("laravel-mix");

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

mix.js("resources/js/app.js", "public/js").sass(
        "resources/sass/app.scss",
        "public/css"
    )
    .copy(
        "node_modules/vali-admin/docs/js/main.js",
        "public/vali-admin/js"
    );
// .copy(
//     "node_modules/vali-admin/docs/js/jquery-3.3.1.min.js",
//     "public/vali-admin/js"
// )
// .copy(
//     "node_modules/vali-admin/docs/js/popper.min.js",
//     "public/vali-admin/js"
// )
// .copy(
//     "node_modules/vali-admin/docs/css/main.css",
//     "public/vali-admin/css"
// );

// if (mix.inProduction()) {
mix.version();
// }


module.exports = {
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: false,
                },
            }, ],
        }, ],
    },
};