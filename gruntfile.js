module.exports = function(grunt) {

    grunt.initConfig({
        /* concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['./src/js/*.js'],
                dest: '.dist/js/script_dev_web.main.js'
            }
        },
        concatCSS: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['/dist/css/*.css'],
                dest: 'css/dist/styleExamJS.main.css'
            }
        }, */
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './src/sass',
                    src: ['*.scss'],
                    dest: './dist/css/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass: {
                files: ['./src/sass/*.scss'],
                tasks: ['sass'],
            }
        }, 
        /* uglify: {
            dist: {
                src: ['./src/js/script_dev_web.main.js'],
                dest: './dist/js/script_dev_web.main.min.js'
            }
        },
        cssmin: {
            dist: {
                src: ['css/dist/styleExamJS.main.css'],
                dest: 'css/dist/styleExamJS.main.min.css'
           }
        } */

    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
  
    grunt.registerTask('default', ['sass']);
  
  };