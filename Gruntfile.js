module.exports = function(grunt) {

  // Configuration 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
        patternlab: {
          command: "php core/builder.php -gp"
      }
    },
    compass: {                    // Task
        dist: {                   // Target
            options: {            // Target options
                sassDir: 'sass',
                cssDir: 'css',
                environment: 'production'
            }
        }
    },
    watch: {
      html: {
        files: ['source/_patterns/**/*.mustache', 'source/**/*.json'],
        tasks: ['shell:patternlab'],
        options: {
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
  grunt.registerTask('default', ['watch', 'shell:patternlab']);
};
