angular.module('feed-item.js',[])
.directive('feedItem', [
	function(){
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			bindToController: {
				item: '='
			},
			template: `
				<article class="feed-item"> 
					{{ vm.item.message }}
				</article>
			`,
			controller: function() {
				
			}	
		};
	}
]);