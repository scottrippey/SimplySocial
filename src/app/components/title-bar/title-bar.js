angular.module('title-bar.js', [])
.directive('titleBar', [
	function() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			template: `
				<div class="title-bar-spacer"></div>
				<nav class="title-bar">
					<div class="title-bar-contents">
						<span class="title-group-one">
							<span class="simply-social-logo">
								<span class="svg-logo" ng-include="'dist/images/simply-social-logo.svg'"></span>
								<span class="simply">simply</span><span class="social">social</span>
							</span>
						</span>
						<span class="title-group-two">
							<span class="svg-caption-add" ng-include="'dist/images/caption-add.svg'" ng-click="vm.showModal = true"></span>

							<modal-dialog ng-if="vm.showModal" dismiss-modal="vm.showModal = false">
								<create-post></create-post>
							</modal-dialog>
							
							<label class="search-box">
								<input class="search-text" type="text">
								<span class="svg-search-glass" ng-include="'dist/images/search-glass.svg'"></span>
							</label>
							<current-user-avatar></current-user-avatar>
						</span>
						
					</div>
				</nav>
			`,
			controller: function() {
				var vm = this;
				vm.showModal = false;
			}
		};
	}
]);