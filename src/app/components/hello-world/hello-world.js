angular.module('hello-world.js', [])
.directive('helloWorld', [
	function _directive_() {
		return {
			restrict: 'E',
			bindToController: true,
			controllerAs: 'vm',
			scope: {
				helloPunctuation: '@'
			},
			template: `

				<span class="hello-world">
					{{ vm.message + vm.helloPunctuation }}
				</span>

			`.trim(),
			controller: function _HelloWorldController() {
				var vm = this;

				angular.extend(vm, {
					message: "Hello world"
				});
			}
		}
	}
]);
