angular.module('home-page.js', [])
.directive('homePage', [
	function _directive_() {
		return {
			restrict: 'E',
			bindToController: true,
			controllerAs: 'vm',
			scope: {
			},
			template: `

				<hello-world hello-punctuation="!"></hello-world>

			`.trim()
		}
	}
]);
