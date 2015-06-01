angular.module('FeedService.js', [])
.factory('FeedService', [
	'$timeout', 'MockPosts',
	function($timeout, MockPosts) {
		var FeedService = {
			getCurrentUserFeed: getCurrentUserFeed
		};
		
		function getCurrentUserFeed() {
			return $timeout(1000).then(function() {
				return MockPosts;
			});
		}
		
		
		return FeedService;
	}
]);