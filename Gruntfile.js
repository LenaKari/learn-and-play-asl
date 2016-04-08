module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      files: {
      	src: ['*.js', '!Gruntfile.js']
      },
    },
    less: {
      files: {
        src: 'assets/css/less/*.less',
        dest: 'assets/css/main.css'
      }
    },
    mustache: {
      files : {
        src: 'assets/templates/pages',
        dest: 'assets/templates/templates.json',
        options: {
          prefix: ' ',
          postfix: ' ',
          verbose: true
        }
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: 'var loadTemplates = ',
        footer: ";"
      },
      dist: {
        src: 'assets/templates/templates.json',
        dest: 'assets/templates/templates.js',
      },
    },
    mustache_render: {
      options: {
        // Task global options go here
      },
      your_target: {
        options: {
          // Target specific options go here
        },
        files : [
          {
            data: 'assets/templates/templates.json',
            template: 'assets/templates/layout.mustache',
            dest: 'index.html'
          }
        ]
      },
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['**/*.js'],
        tasks: ['jshint']
      },
      css: {
        files: ['assets/css/less/*.less'],
        tasks: ['less']
      },
      mustache: {
        files: ['assets/templates/pages/*.mustache'],
        tasks: ['mustache', 'json']
      },
      mustache_render: {
        files: ['assets/templates/templates.json', 'assets/templates/*.mustache'],
        tasks: ['mustache_render']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mustache');
  grunt.loadNpmTasks('grunt-mustache-render');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dev', ['less', 'mustache', 'concat', 'mustache_render']);
  grunt.registerTask('dev-watch', ['less', 'mustache', 'concat', 'mustache_render', 'watch']);

};
