angular.module('list-filter.js',[])
.directive('listFilter', [
	function(){
		return {
			restrict: 'E',
			bindToController: true,
			controllerAs: 'vm',
			scope: {
				filterType: '=?',
				filterLayout: '=?'
			},
			template: `
				<nav class="list-filter">
					<div class="list-filter-contents">
						<div class="filter-group-one">
							<a class="filter-item layout"
								ng-repeat="item in vm.layouts"
								ng-class="{ 'selected': vm.filterLayout == item.value }"
								ng-click="vm.filterLayout = item.value"
							>
								<img ng-src="{{ item.imgSrc }}">
							</a>
						</div>
						<div class="filter-group-two">
							<a class="filter-item type"
								ng-repeat="item in vm.types"
								ng-class="{ 'selected': vm.filterType == item.value }"
								ng-click="vm.filterType = item.value"
							>
								{{ item.label }}
							</a>
						</div>
					</div>
				</nav>
			`,
			controller: function() {
				var vm = this;
				
				angular.extend(vm, {
					filterType: 'all',
					filterLayout: 'list',
					types: [
						{ label: "All Posts", value: "all" },
						{ label: "Photos", value: "photos" },
						{ label: "Videos", value: "videos" }
					],
					layouts: [
						{ imgSrc: 'dist/images/list.png', value: "list" },
						{ imgSrc: 'dist/images/grid.png', value: "grid" },
					]					
				});
				
			}
		};
	}
]);