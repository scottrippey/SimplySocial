angular.module('home-page.js',[])
.directive('homePage', [
	function(){
		return {
			restrict: 'E',
			template: `
				<main-banner>
					<write-post></write-post>
					
					<list-filter></list-filter>
				</main-banner>
				
				<user-feed></user-feed>
				
				<main-footer></main-footer>
			`
		};
	}
]);