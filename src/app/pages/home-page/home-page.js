angular.module('home-page.js',[])
.directive('homePage', [
	function(){
		return {
			restrict: 'E',
			template: `
				<main-banner>
					<write-something></write-something>
					
					<list-filter></list-filter>
				</main-banner>
				
				<user-feed></user-feed>
				
				<main-footer></main-footer>
			`
		};
	}
]);