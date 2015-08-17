module.exports = function( grunt ) {

 	grunt.initConfig({
 		concat : {
 			options: {
		        separator: '\n;'
		    },
		    dist: {
		        src: ['assets/_js/*.js'],
		        dest: 'assets/js/app.js'
		    }
 		},
	    uglify : {
	    	options : {
	        	mangle : false
	      	},

	      	target : {
	        	files : {
	          		'assets/js/app.min.js' : [ 'assets/js/app.js' ]
	        	}
	      	}
	    } ,
	    stylus: {
	      	dev: {
	        	options: {
	          		compress : false
	        	},
	        	files: {
	          		'assets/css/app.css': ['assets/_css/*.styl']
	        	}
	      	},
	      	prod: {
	        	files: {
	          		'assets/css/app.min.css': ['assets/_css/*.styl']
	        	}
	      	}
	    }
	});


  	// Plugins do Grunt
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Tarefas que serão executadas
	grunt.registerTask( 'js', [ 'concat', 'uglify'] );
	grunt.registerTask( 'css', [ 'stylus'] );
	grunt.registerTask( 'default', [ 'css', 'js'] );

	//grunt.registerTask( 'default', [ 'concat', 'uglify', 'stylus'] );

};