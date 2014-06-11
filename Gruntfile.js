module.exports = function(grunt) {

    // Configuration 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            patternlab: {
                command: "php core/builder.php -wr"
            },
        },
        compass: {                    // Task
            dist: {                   // Target
                options: {            // Target options
                    sassDir: 'source/scss',
                    cssDir: 'public/css',
                    environment: 'production'
                }
            }
        },
        watch: {
            html: {
                files: ['source/_patterns/**/*.mustache', 'source/_patterns/**/*.json', 'source/_data/*.json'],
                tasks: ['shell:patternlab'],
                options: {
                    livereload: true,
                    spawn: false
                }
            },
            scss: {
                files: ['source/scss/*.scss'],
                tasks: ['compass:dist'],
                options: {
                    livereload: true,
                    spawn: false
                }
           }

        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Tasks
    grunt.registerTask('default', ['watch', 'compass:dist']);
    };
