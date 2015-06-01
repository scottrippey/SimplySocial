angular.module('write-something.js', [])
.directive('writeSomething', [
	function() {
		return {
			restrict: 'E',
			template: `
				<div class="write-something">
					<input class="write-text" placeholder="What's on your mind?" type="text">
					
					<a class="add-button">
						<span class="svg-add-photo" ng-include="'dist/images/add-photo.svg'"></span>
						Add Photo
					</a>
					<a class="add-button">
						<span class="svg-add-video" ng-include="'dist/images/add-video.svg'"></span>
						Add Video
					</a>
					
				</div>
			`
		};
	}
]);