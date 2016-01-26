'use strict';


module.exports = function mochacli(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-mocha-cli');

    var reporter = "spec";
    var reporterOptions = {};
    
    if (process.env.NODE_ENV === "test") {
        reporter =  "mocha-jenkins-reporter";
        reporterOptions = {
                "junit_report_name": "Tests",
                "junit_report_path": "reports/mocha-results.xml",
                "junit_report_stack": 1
            };
    }
    
    // Options
    return {
        xunit: {
            src: ['test/**/*.js'],
            options: {
                timeout: 6000,
                'check-leaks': true,
                ui: 'bdd',
                "reporter": reporter,
                "reporter-options": reporterOptions
            }
        }
    };
};
