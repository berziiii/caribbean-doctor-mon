module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //- Concat JS into single files
    concat: {
      css: {
        src: [
          'src/css/style.css'
        ],
        dest: 'test/css/style-concat.css'
      },
    },

    // Prefix the CSS
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 5%', 'ie 8', 'ie 7'],
      },
      your_target: {
        options: {
          flatten: true,
        },
        src: 'test/css/style-concat.css',
        dest: 'test/css/style.css',
      },
    },

    // Minify CSS
    cssmin: {
      minify: {
        expand: true,
        cwd: 'test/css/',
        src: [
          'style.css',
          ],
        dest: 'dist/css/',
        ext: '.css',
      },
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html',
        },
      },
    },
    imageoptim: {
      myTask: {
        src: 'src/images',
      },
    },
    sync: {
      main: {
        files: [
          {
            cwd: 'src',
            src: [
              'js/**',
              'css/**',
              'bootstrap/**',
              'images/**',
              'fonts/**',
            ],
            dest: 'dist'
          }
        ],
        verbose: true
      }
    },

    //- Watchers
    watch: {
      grunt: {
        files: ['gruntfile.js'],
        tasks: ['default']
      },
      css: {
        files: ['src/css/**/*.css'],
        tasks: ['default']
      },
    },
  });

  //- REGISTER ALL OUR GRUNT TASKS
  grunt.registerTask('default', ['concat', 'autoprefixer', 'cssmin', 'htmlmin', 'sync', 'watch']);
  grunt.registerTask('app_change', ['concat:app', 'uglify:app', 'uglify:main']);
  grunt.registerTask('concat_change', ['uglify:app']);
  grunt.registerTask('css_prefixed', ['autoprefixer']);
  grunt.registerTask('css_min', ['cssmin']);
  grunt.registerTask('sync_files', ['sync']);
  grunt.registerTask('imageoptimize', ['imageoptim']);
};
