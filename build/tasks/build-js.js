module.exports = function(grunt) {
	grunt.registerTask('build-js', [ 'concat:APP-ES6','babel:APP-ES6' ]);

	grunt.config.merge({
		concat: {
			'APP-ES6': {
				src: 'src/app/**/*.js',
				dest: 'dist/js/app.combined.es6.js'
			}
		},
		babel: {
			'APP-ES6': {
				src: 'dist/js/app.combined.es6.js',
				dest: 'dist/js/app.combined.es5.js'
			}
		},
		watch: {
			'APP-ES6': {
				files: [ 'src/app/**/*.js' ],
				tasks: [ 'build-js' ]
			},
			'APP-ES6-livereload': {
				files: [ 'dist/js/**/*.js' ],
				options: { livereload: true }
			}
		}
	});
};
