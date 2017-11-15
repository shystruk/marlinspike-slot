'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            css: {
                src: 'app/css/*.css',
                dest: 'app/build/styles.min.css'
            }
        },
        watch: {
            cssmin: {
                files: '<%= cssmin.css.src %>',
                tasks: 'cssmin'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'watch']);
};
