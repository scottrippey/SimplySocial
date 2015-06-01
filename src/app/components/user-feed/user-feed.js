angular.module('user-feed.js',[])
.directive('userFeed', [
	'FeedService',
	function(FeedService){
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			bindToController: {
				filterType: '='
			},
			template: `
				<section class="user-feed">
					<post-details-loading ng-if="vm.loadingPosts"></post-details-loading>
					<post-details post="post" ng-repeat="post in vm.posts"></post-details>
				</section>
			`,
			controller: function() {
				var vm = this;
				
				vm.posts = [];
				vm.loadingPosts = true;
				FeedService.getCurrentUserFeed().then(function(posts) {
					vm.posts = posts;
					vm.loadingPosts = false;
				});
			}	
		};
	}
]);