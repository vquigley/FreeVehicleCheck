'use strict';

module.exports = function eslint(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-eslint');

    var options = {
        configFile: '.eslintrc',
        rulePaths: ['node_modules/eslint/lib/rules']
    }
    
    if (process.env.NODE_ENV === "test") {
        options.format = "checkstyle";
        options.outputFile = "reports/eslint.xml";
    }
    
    // Options
    return {
        "options" : options,
        target: ['index.js',
            'server.js',
            'controllers/**/*.js',
            'lib/**/*.js',
            'models/**/*.js',
            'public/js/**/*.js'
        ]
    };
};
