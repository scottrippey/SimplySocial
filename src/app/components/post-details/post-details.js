angular.module('post-details.js',[])
.directive('postDetails', [
	function(){
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			bindToController: {
				post: '='
			},
			template: `
				<article class="post-details">
				
					<post-text post="vm.post"></post-text>
					
					<div class="post-media" ng-if="vm.post.multimedia">
						<div class="post-media-image" ng-if="vm.post.multimedia.mediaType == 'photo'">
							<img class="post-media-item" ng-src="{{vm.post.multimedia.imageUrl}}">
						</div>
						<div class="post-media-video" ng-if="vm.post.multimedia.mediaType == 'video'">
							<video class="post-media-item" controls ng-attr-poster="{{ vm.post.multimedia.poster }}">
								<source 
									ng-repeat="source in vm.post.multimedia.videos"
									ng-src="{{ source.videoUrl | trusted }}" 
									type="{{ source.mimeType }}"
								/>
							</video>
						</div>
					</div>
					
					<div class="post-replies-expand" ng-if="vm.post.replies" ng-click="vm.expanded = !vm.expanded" ng-class="{ 'expanded': vm.expanded }">
						<span ng-if="!vm.expanded">Expand </span>
						<span ng-if="vm.expanded">Collapse </span>
					</div>
					<footer class="post-replies" ng-if="vm.post.replies && vm.expanded">
						<post-text class="post-reply" ng-repeat="reply in vm.post.replies" post="reply"></post-text>
						<div class="post-add-reply">
							<input class="post-reply-text" type="text" placeholder="Reply...">
						</div>
					</footer>
					
				</article>
			`,
			controller: function() {
				angular.extend(this, {
					expanded: false
				});
			}	
		};
	}
])
.directive('postText', [
	function() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			bindToController: {
				post: '='
			},
			template: `
				<img class="post-avatar" ng-src="{{vm.post.user.avatarUrl}}">
				
				<div class="post-actions">
					<span class="svg-reply" ng-include="'dist/images/reply.svg'"> (reply) </span>
					<span class="svg-heart" ng-include="'dist/images/heart.svg'"> (heart) </span>
					<span class="post-time" >
						{{ vm.post.timestamp }}
					</span>
				</div>

				<header class="post-header">
					<a class="post-user-name"> {{ vm.post.user.name }} </a>
				</header>
				
				<p class="post-message">
					{{ vm.post.message }}
				</p>
			
			`,
			controller: function() {
				
			}
		};
	}
]);