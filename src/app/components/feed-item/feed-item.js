angular.module('feed-item.js',[])
.directive('feedItem', [
	function(){
		return {
			restrict: 'E',
			bindToController: true,
			controllerAs: 'vm',
			scope: {
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