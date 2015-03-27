// Configuration for postcss task(s)
// Modify CSS
'use strict';
var taskConfig=function(grunt){
	grunt.config.set('postcss', {
		options: {
			processors: [
				require('autoprefixer-core').postcss,
				require('postcss-assets')({
					loadPaths:['client/images/'],
					cachebuster:true
				})
			]
		},
		server: {
			options: {
				map: true
			},
			src: '<%= yeogurt.tmp%>/styles/*.css'
		},
		dist: {
			options: {
				map: false
			},
			src: '<%= yeogurt.dist %>/styles/*.css'
		}
	});
};
module.exports=taskConfig;
