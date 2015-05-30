angular.module('home-page.js',[])
.directive('homePage', [
	function(){
		return {
			restrict: 'E',
			template: `
				<title-bar></title-bar>
				
				<main-banner> (MAIN BANNER) </main-banner>
				
				<p> What's on your mind? </p>
				
				<nav>
					<a> All Posts </a>
					<a> Photos </a>
					<a> Videos </a>
				</nav>
				
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