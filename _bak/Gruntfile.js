module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    jasmine: {
      example: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*pec.js',
        helpers: 'spec/helpers/**/*.js'
      }
    }
  },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
        globals: {
          jQuery: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['jasmine']);
};
