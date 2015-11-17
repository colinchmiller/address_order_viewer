module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/*js',
                dest: 'server/public/assets/scripts/app.min.js'
            }

        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css',
                src: [
                    'bootstrap.min.css'
                ],
                dest: 'server/public/vendors/'
            },
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular/angular.min.js',
                    'angular/angular.min.js.map',
                    'angular-route/angular-route.min.js',
                    'angular-route/angular-route.min.js.map'
                    ],
                dest: 'server/public/vendors'
            },
            html: {
                expand: true,
                cwd: 'client',
                src: 'views/index.html',
                dest: 'server/public/assets'
            },
            htmlRoutes: {
                expand: true,
                cwd: 'client/views/routes',
                src: [
                    'addressdisplay.html',
                    'orderlookup.html'
                    ],
                dest: 'server/public/assets/views/routes'
            },
            htmlTemplates: {
                expand: true,
                cwd: 'client/views/templates',
                src: 'nav.html',
                dest: 'server/public/assets/views/templates'
            },
            style: {
                expand: true,
                cwd: 'client',
                src: 'styles/style.css',
                dest: 'server/public/assets'
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};