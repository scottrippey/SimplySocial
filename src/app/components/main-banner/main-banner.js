angular.module('main-banner.js', [])
.directive('mainBanner', [
	function() {
		return {
			restrict: 'E',
			transclude: true,
			template: `
			<div class="main-banner">
				<ng-transclude></ng-transclude>
			</div>
			`
		};
	}
]);