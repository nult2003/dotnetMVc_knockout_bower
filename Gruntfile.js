/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            css: {
                src: ['lib/bootstrap/dist/css/bootstrap.css'],
                dest: 'css/styles.css'
            }
        },
        cssmin: {
            css: {
                src: 'css/styles.css',
                dest: 'css/styles.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', []);

    grunt.registerTask('build:css', ['concat:css', 'cssmin:css']);
};