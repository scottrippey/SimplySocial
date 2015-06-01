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
					
					<footer class="post-replies" ng-if="vm.post.replies">
						Expand (v)
						<post-reply ng-repeat="reply in vm.post.replies">
							{{ reply.user.name }} - {{ reply.message }}
						</post-reply>
					</footer>
					
				</article>
			`,
			controller: function() {
				
			}	
		};
	}
]);