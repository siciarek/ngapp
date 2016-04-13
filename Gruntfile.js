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
                    'js/app.ann.js': ['app/*.js', 'app/shared/**/*.js', 'app/components/**/*.js']
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
                src: ['app/*.js', 'app/shared/**/*.js', 'app/components/**/*.js'],
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
            basic: {
                src: ['app/*.js', 'app/shared/**/*.js', 'app/components/**/*.js'],
                options: {
                    display: 'short', // 'short', 'full', 'none'
                    vendor: [
                        'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
                        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.js',
                        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.js',
                        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-resource.js',
                        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-cookies.js',
                        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-sanitize.js',
                        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-touch.js',
                        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.js',
                        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-route.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js'
                    ],
                    specs: 'tests/spec/**/**/*pec.js',
                    helpers: 'tests/spec/helpers/**/*.js'
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
    grunt.registerTask('default', ['jshint', 'test', 'clean', 'min']);
};
