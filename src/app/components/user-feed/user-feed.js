angular.module('user-feed.js',[])
.directive('userFeed', [
	function(){
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			bindToController: {
				filterType: '='
			},
			template: `
				<section class="user-feed">
					<feed-item item="item" ng-repeat="item in vm.feedItems"></feed-item>
				</section>
			`,
			controller: function() {
				var vm = this;
				
				angular.extend(vm, {
					feedItems: [
						{ message: 'Post 1' },
						{ message: 'Post 2' },
						{ message: 'Post 3' },
						{ message: 'Post 4' },
						{ message: 'Post 5' },
						{ message: 'Post 6' },
						{ message: 'Post 7' }
					]
				});
			}	
		};
	}
]);