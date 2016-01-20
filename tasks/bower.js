'use strict';


module.exports = function bower(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-bower');

	// Options
	return {
        bower: {
		  dev: {
			dest: 'public/components'
		  }
		}
	};
};
