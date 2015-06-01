angular.module('MockMedia.js', [])
.factory('MockMedia', [
	function() {
		
		// Source: "Video For Everybody" http://camendesign.com/code/video_for_everybody
		var bigBuckBunny = {
			mediaType: 'video',
			width: 640, height: 360,
			poster: 'http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg',
			videos: [
				{ mimeType: 'video/mp4', videoUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' },
				{ mimeType: 'video/webm', videoUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm' },
				{ mimeType: 'video/ogv', videoUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv' }
			]};
		
		var MockMedia = {
			images: {
				nature: { mediaType: 'photo', width: 800, height: 450, imageUrl: '//lorempixel.com/800/450/nature' },
				sports: { mediaType: 'photo', width: 800, height: 450, imageUrl: '//lorempixel.com/800/450/sports' },
			},
			videos: {
				bigBuckBunny: bigBuckBunny,
				nature: angular.extend({ poster: '//lorempixel.com/1280/720/nature' }, bigBuckBunny),
				sports: angular.extend({ poster: '//lorempixel.com/1280/720/sports' }, bigBuckBunny)
			}
		};
		
		return MockMedia;
	}
]);