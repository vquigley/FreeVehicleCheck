'use strict';


module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-browser-sync');
	
    return {
            dev: {
                bsFiles: {
                    src : [
                        'public/css/*.less',
                        'public/js/*.js',
                        'public/templates/**/*.dust',
                        'public/images/*.*'
                    ]
                },
                options: {
                    proxy: 'http://127.0.0.1:8000'
                }
            }
        }
};
