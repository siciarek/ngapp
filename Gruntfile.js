module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            folder: ['js']
        },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    'js/app.ann.js': ['app/**/**/*.js']
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap: true,
                mangle: true
            },
            build: {
                src: 'js/app.ann.js',
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

    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('min', ['ngAnnotate', 'concat', 'uglify']);
    grunt.registerTask('default', ['jshint', 'clean', 'min']);
};
