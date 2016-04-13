module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            build: {
                src: 'js/app.js',
                dest: 'js/app.min.js'
            }
        },

        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                separator: '',
            },
            dist: {
                src: ['app/**/**/*.js'],
                dest: 'js/app.js',
            },
        },

        jshint: {
            files: ['Gruntfile.js', 'app/**/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        jasmine: {
            example: {
                src: 'app/**/**/*.js',
                options: {
                    specs: 'spec/**/*pec.js',
                    helpers: 'spec/helpers/**/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('min', ['concat', 'uglify']);
    grunt.registerTask('default', ['jshint', 'min']);
};
