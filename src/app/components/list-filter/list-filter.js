angular.module('list-filter.js',[])
.directive('listFilter', [
	function(){
		return {
			restrict: 'E',
			template: `
				<nav class="list-filter">
					<div class="list-filter-contents">
						<div class="filter-group-one">
							<a class="filter-item layout selected">
								<img src="dist/images/list.png">
							</a>
							<a class="filter-item layout">
								<img src="dist/images/grid.png">
							</a>
						</div>
						<div class="filter-group-two">
							<a class="filter-item type selected"> All Posts </a>
							<a class="filter-item type"> Photos </a>
							<a class="filter-item type"> Videos </a>
						</div>
					</div>
				</nav>
			`
		};
	}
]);