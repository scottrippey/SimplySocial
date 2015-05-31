angular.module('home-page.js',[])
.directive('homePage', [
	function(){
		return {
			restrict: 'E',
			template: `
				<banner>
					<write-post></write-post>
					
					<nav>
						<a> All Posts </a>
						<a> Photos </a>
						<a> Videos </a>
					</nav>
				</banner>
				
				
				<section>
					<fieldset> POST 1 </fieldset>
					<fieldset> POST 2 </fieldset>
					<fieldset> POST 3 </fieldset>
					<fieldset> POST 4 </fieldset>
				</section>
			`
		};
	}
]);