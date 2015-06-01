angular.module('modal-dialog.js', [])
.directive('modalDialog', [
	function() {
		return {
			restrict: 'E',
			scope: {},
			transclude: true,
			controllerAs: 'vm',
			bindToController: {
				dismissModal: '&'
			},
			template: `
				<section class="modal-dialog">
					<div class="modal-shadow" ng-click="vm.dismissModal()"></div>
					<div class="modal-contents">
						<ng-transclude></ng-transclude>
					</div>
				</section>
			`,
			controller: function() {
				
			}
		};
	}
]);