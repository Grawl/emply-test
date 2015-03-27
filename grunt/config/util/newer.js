/**
 * Configuration for copy task(s)
 */
"use strict";
var taskConfig=function(grunt){
	grunt.config.set('newer',{
		options:{
			override:function(detail,include){
				if(detail.task==='jade'||'sass'){
					return include(true);
				}
				else{
					return include(false);
				}
			}
		}
	});
};
module.exports=taskConfig;
