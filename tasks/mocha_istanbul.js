'use strict';


module.exports = function mocha_istanbul(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    
    // Options
    return {
        src: ['test/**/*.js'], // multiple folders also works
        options: {
            reportFormats: ['cobertura', 'html'],
            istanbulOptions: ['--include-all-sources -x "**public/components/**/*.js **tasks/**/*.js"']
        }
    };
};
