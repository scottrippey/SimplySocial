angular.module('banner.js', [])
.directive('banner', [
	function() {
		return {
			restrict: 'E',
			transclude: true,
			template: `
			<div class="banner">
				<ng-transclude></ng-transclude>
			</div>
			`
		};
	}
]);