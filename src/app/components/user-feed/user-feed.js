angular.module('user-feed.js',[])
.directive('userFeed', [
	function(){
		return {
			restrict: 'E',
			bindToController: true,
			controllerAs: 'vm',
			scope: {
				filterType: '='
			},
			template: `
				<section class="user-feed">
					<article class="post" ng-repeat="post in vm.posts"> 
						{{ post.message }}
					</article>
				</section>
			`,
			controller: function() {
				var vm = this;
				
				angular.extend(vm, {
					posts: [
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