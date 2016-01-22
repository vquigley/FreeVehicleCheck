'use strict';


module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    
    grunt.loadNpmTasks('grunt-makara-amdify');
    
    // Register group tasks
    grunt.registerTask('build', ['copyto', 'requirejs', 'less', 'dustjs']);

    grunt.registerTask('test', [ 'eslint', 'mochacli' ]);

    grunt.registerTask('startDev', ['nodemon', 'browserSync']);
};
