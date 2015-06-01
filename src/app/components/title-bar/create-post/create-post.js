angular.module('create-post.js', [])
.directive('createPost', [
	function() {
		return {
			restrict: 'E',
			template: `
				<section class="create-post">
					<h3 class="create-post-title"> Create new message </h3>
					<textarea class="create-post-text"></textarea>

					<div class="create-post-actions">
						<a class="add-button">
							<span class="svg-add-photo" ng-include="'dist/images/add-photo.svg'"></span>
							Add Photo
						</a>
						<a class="add-button">
							<span class="svg-add-video" ng-include="'dist/images/add-video.svg'"></span>
							Add Video
						</a>
						
						<button class="create-post-button"> Post </button>
					</div>
				
				</section>
			`
		};
	}
]);