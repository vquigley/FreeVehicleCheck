/*global requirejs:true*/
'use strict';


requirejs.config({
	shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
		"jquery":"/components/jquery/dist/jquery.min",
		"bootstrap":"/components/bootstrap/dist/js/bootstrap.min"
	},
	priority:["jquery"]
});


require(["./main"], function () {

    var app = {
        initialize: function () {
        }
    };

    app.initialize();

});
