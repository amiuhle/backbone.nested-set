module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    jasmine: {
      test: {
        src: [
          'backbone.nested-set.js'
        ],
        options: {
          vendor: [
            'bower_components/jquery/jquery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js'
          ],
          helpers: [
            
          ],
          specs: ['test/spec/*.js'],
          keepRunner: true
        }
      }
    },
    watch: {
      test: {
        files: ['*.js', ['test/spec/*.js']],
        tasks: ['jasmine:test'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('test', ["jasmine:test", "watch:test"]);
};