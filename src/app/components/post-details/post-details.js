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
				
					<user-avatar class="post-avatar" user="vm.post.user"></user-avatar>
					<img class="user-avatar" ng-src="{{vm.post.user.avatarUrl}}">
					
					<header>
						<h3> {{ vm.post.user.name }} </h3>
						<span class="post-actions">
							<span class="svg-reply" ng-include="'dist/images/reply.svg'"> (reply) </span>
							<span class="svg-heart" ng-include="'dist/images/heart.svg'"> (heart) </span>
							<span class="post-time" >
								{{ vm.post.timestamp }}
							</span>
						</span>
					</header>
					
					<p>
						{{ vm.post.message }}
					</p>
					
					<div class="post-media" ng-if="vm.post.multimedia">
						<div class="post-media-image" ng-if="vm.post.multimedia.mediaType == 'photo'">
							<img ng-src="{{vm.post.multimedia.imageUrl}}">
						</div>
						<div class="post-media-video" ng-if="vm.post.multimedia.mediaType == 'video'">
							<video controls ng-attr-poster="{{ vm.post.multimedia.poster }}">
								<source 
									ng-repeat="source in vm.post.multimedia.videos"
									ng-src="{{ source.videoUrl | trusted }}" 
									type="{{ source.mimeType }}"
								/>
							</video>
						</div>
					</div>
					
					<footer ng-if="vm.post.replies">
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