angular.module('TrustedFilter.js', [])
.filter('trusted', [
	'$sce',
	function($sce) {
		return function _TrustedFilter(url) {
			return $sce.trustAsResourceUrl(url);
		};
	}
]);