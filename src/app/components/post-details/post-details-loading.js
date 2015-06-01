angular.module('post-details-loading.js',[])
.directive('postDetailsLoading', [
	function(){
		return {
			restrict: 'E',
			template: `
				<article class="post-details post-details-loading">
					Loading...				
				</article>
			`	
		};
	}
]);