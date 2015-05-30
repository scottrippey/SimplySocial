module.exports = function(grunt) {
	grunt.registerTask('build-css', [ 'less:MASTER-LESS' ]);
	
	grunt.config.merge({
		less: {
			'MASTER-LESS': {
				files: [
					{
						src: 'src/less/master.less',
						dest: 'dist/css/master.combined.css' 
					}
				]
			}
		},
		watch: {
			'ALL-LESS': {
				files: [ 'src/**/*.less' ],
				tasks: [ 'build-css' ]
			},
			'ALL-LESS-livereload': {
				files: [ 'dist/css/**/*.css' ],
				options: { livereload: true }
			}
		}
	});

};