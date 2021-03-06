// Configuration for Wiredep task(s)
// Injects Bower packages into your source code.
'use strict';
var taskConfig=function(grunt){
	grunt.config.set('wiredep', {
		app: {
			options: {
				ignorePath: /client\/|\.\.\//g,
				// Make sure everything has an absolute path (starts with '/')
				fileTypes: {
					jade: {
						replace: {
							js: 'script(src=\'/{{filePath}}\')',
							css: 'link(rel=\'stylesheet\', href=\'/{{filePath}}\')'
						}
					}
				},
				// packages to ignore
				exclude: [
					'bower_components/html5shiv/',
					'bower_components/consolelog/',
					'bower_components/modernizr/',
					'bower_components/foundation/css/'
				],
				overrides: {}
			},
			src: [
				'<%= yeogurt.client %>/templates/layouts/base.jade'
			]
		},
		styles: {
			src: ['<%= yeogurt.client %>/styles/**/*.{scss,sass}'],
			ignorePath: /client/g
		}
	});
};
module.exports=taskConfig;
