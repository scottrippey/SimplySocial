angular.module('title-bar.js', [])
.directive('titleBar', [
	function() {
		return {
			restrict: 'E',
			template: `
				<nav class="title-bar">
					<div class="title-bar-contents">
						<span class="simply-social-logo">
							<span class="simply">simply</span><span class="social">social<span>
						</span>
						
						<input class="search-box" type="text">
						<current-user-avatar></current-user-avatar>
					</div>
				</nav>
			`
		};
	}
]);