module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        scripts: {
            files: ['src/resources/js/app.js'],  //we put * in place of custom for checking all scss files.
            tasks: ['javaScript']
        },
        styles: {
            files: ['src/resources/css/style.css'],  //we put * in place of custom for checking all scss files.
            tasks: ['css']
        }
    },
    concat: {
        options:{
            separator: "\n\n"
        },
        dist:{
            src: ['bower_components/angular/angular.min.js', 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js', 'src/resources/js/app.js'],
            dest: 'src/partials/js/script.js'
        },
        css:{
            src: ['bower_components/bootstrap-css/css/bootstrap.min.css', 'src/resources/css/style.css'],
            dest: 'src/partials/css/style.css'
        }
        
    },
    serve: {
        options: {
            port: 9000,
            'serve': {
                'path': 'src'
            }
        }
    }  
  });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', ['concat', 'serve']);
    grunt.registerTask('javaScript', ['concat:dist']);
    grunt.registerTask('css', ['concat:css']);
}