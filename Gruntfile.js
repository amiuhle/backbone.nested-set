module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    jasmine: {
      test: {
        src: [
          'backbone-vanilla-js-objects.js'
        ],
        options: {
          vendor: [
            'components/jquery/jquery.js',
            'components/underscore/underscore.js',
            'components/backbone/backbone.js'
          ],
          helpers: [
            'components/jasmine-jquery/lib/jasmine-jquery.js'
          ],
          specs: ['test/backbone-vanilla-js-objects.js'],
          keepRunner: true
        }
      }
    },
    watch: {
      test: {
        files: ['*.js', ['test/*.js']],
        tasks: ['jasmine:test'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('test', ["jasmine:test", "watch:test"]);
};