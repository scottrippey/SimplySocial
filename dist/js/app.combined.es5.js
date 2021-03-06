/* This file was generated by [build-angular.js] */
"use strict";

angular.module("app-components.js", ["list-filter.js", "main-banner.js", "modal-dialog.js", "post-details-loading.js", "post-details.js", "create-post.js", "title-bar.js", "user-feed.js", "write-something.js"]);
/* This file was generated by [build-angular.js] */
angular.module("app-pages.js", ["home-page.js", "profile-settings.js"]);
/* This file was generated by [build-angular.js] */
angular.module("app-services.js", ["FeedService.js", "MockMedia.js", "MockPosts.js", "MockUsers.js"]);
/* This file was generated by [build-angular.js] */
angular.module("app-utils.js", ["TrustedFilter.js"]);
angular.module("app", ["ngAnimate", "ngTouch", "app-components.js", "app-pages.js", "app-services.js", "app-utils.js"]);
angular.module("list-filter.js", []).directive("listFilter", [function () {
	return {
		restrict: "E",
		scope: {},
		controllerAs: "vm",
		bindToController: {
			filterType: "=?",
			filterLayout: "=?"
		},
		template: "\n\t\t\t\t<nav class=\"list-filter\">\n\t\t\t\t\t<div class=\"list-filter-contents\">\n\t\t\t\t\t\t<div class=\"filter-group-one\">\n\t\t\t\t\t\t\t<a class=\"filter-item layout\"\n\t\t\t\t\t\t\t\tng-repeat=\"item in vm.layouts\"\n\t\t\t\t\t\t\t\tng-class=\"{ 'selected': vm.filterLayout == item.value }\"\n\t\t\t\t\t\t\t\tng-click=\"vm.filterLayout = item.value\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<img ng-src=\"{{ item.imgSrc }}\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter-group-two\">\n\t\t\t\t\t\t\t<a class=\"filter-item type\"\n\t\t\t\t\t\t\t\tng-repeat=\"item in vm.types\"\n\t\t\t\t\t\t\t\tng-class=\"{ 'selected': vm.filterType == item.value }\"\n\t\t\t\t\t\t\t\tng-click=\"vm.filterType = item.value\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{ item.label }}\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\t\t\t",
		controller: function controller() {
			var vm = this;

			angular.extend(vm, {
				filterType: "all",
				filterLayout: "list",
				types: [{ label: "All Posts", value: "all" }, { label: "Photos", value: "photos" }, { label: "Videos", value: "videos" }],
				layouts: [{ imgSrc: "dist/images/list.png", value: "list" }, { imgSrc: "dist/images/grid.png", value: "grid" }]
			});
		}
	};
}]);
angular.module("main-banner.js", []).directive("mainBanner", [function () {
	return {
		restrict: "E",
		transclude: true,
		template: "\n\t\t\t\t<div class=\"main-banner\">\n\t\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t\t</div>\n\t\t\t"
	};
}]);
angular.module("modal-dialog.js", []).directive("modalDialog", [function () {
	return {
		restrict: "E",
		scope: {},
		transclude: true,
		controllerAs: "vm",
		bindToController: {
			dismissModal: "&"
		},
		template: "\n\t\t\t\t<section class=\"modal-dialog\">\n\t\t\t\t\t<div class=\"modal-shadow\" ng-click=\"vm.dismissModal()\"></div>\n\t\t\t\t\t<div class=\"modal-contents\">\n\t\t\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t",
		controller: function controller() {}
	};
}]);
angular.module("post-details-loading.js", []).directive("postDetailsLoading", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<article class=\"post-details post-details-loading\">\n\t\t\t\t\tLoading...\t\t\t\t\n\t\t\t\t</article>\n\t\t\t"
	};
}]);
angular.module("post-details.js", []).directive("postDetails", [function () {
	return {
		restrict: "E",
		scope: {},
		controllerAs: "vm",
		bindToController: {
			post: "="
		},
		template: "\n\t\t\t\t<article class=\"post-details\">\n\t\t\t\t\n\t\t\t\t\t<post-text post=\"vm.post\"></post-text>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"post-media\" ng-if=\"vm.post.multimedia\">\n\t\t\t\t\t\t<div class=\"post-media-image\" ng-if=\"vm.post.multimedia.mediaType == 'photo'\">\n\t\t\t\t\t\t\t<img class=\"post-media-item\" ng-src=\"{{vm.post.multimedia.imageUrl}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"post-media-video\" ng-if=\"vm.post.multimedia.mediaType == 'video'\">\n\t\t\t\t\t\t\t<video class=\"post-media-item\" controls ng-attr-poster=\"{{ vm.post.multimedia.poster }}\">\n\t\t\t\t\t\t\t\t<source \n\t\t\t\t\t\t\t\t\tng-repeat=\"source in vm.post.multimedia.videos\"\n\t\t\t\t\t\t\t\t\tng-src=\"{{ source.videoUrl | trusted }}\" \n\t\t\t\t\t\t\t\t\ttype=\"{{ source.mimeType }}\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</video>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"post-replies-expand\" ng-if=\"vm.post.replies\" ng-click=\"vm.expanded = !vm.expanded\" ng-class=\"{ 'expanded': vm.expanded }\">\n\t\t\t\t\t\t<span ng-if=\"!vm.expanded\">Expand </span>\n\t\t\t\t\t\t<span ng-if=\"vm.expanded\">Collapse </span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<footer class=\"post-replies\" ng-if=\"vm.post.replies && vm.expanded\">\n\t\t\t\t\t\t<post-text class=\"post-reply\" ng-repeat=\"reply in vm.post.replies\" post=\"reply\"></post-text>\n\t\t\t\t\t\t<div class=\"post-add-reply\">\n\t\t\t\t\t\t\t<input class=\"post-reply-text\" type=\"text\" placeholder=\"Reply...\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</footer>\n\t\t\t\t\t\n\t\t\t\t</article>\n\t\t\t",
		controller: function controller() {
			angular.extend(this, {
				expanded: false
			});
		}
	};
}]).directive("postText", [function () {
	return {
		restrict: "E",
		scope: {},
		controllerAs: "vm",
		bindToController: {
			post: "="
		},
		template: "\n\t\t\t\t<img class=\"post-avatar\" ng-src=\"{{vm.post.user.avatarUrl}}\">\n\t\t\t\t\n\t\t\t\t<div class=\"post-actions\">\n\t\t\t\t\t<span class=\"svg-reply\" ng-include=\"'dist/images/reply.svg'\"> (reply) </span>\n\t\t\t\t\t<span class=\"svg-heart\" ng-include=\"'dist/images/heart.svg'\"> (heart) </span>\n\t\t\t\t\t<span class=\"post-time\" >\n\t\t\t\t\t\t{{ vm.post.timestamp }}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\n\t\t\t\t<header class=\"post-header\">\n\t\t\t\t\t<a class=\"post-user-name\"> {{ vm.post.user.name }} </a>\n\t\t\t\t</header>\n\t\t\t\t\n\t\t\t\t<p class=\"post-message\">\n\t\t\t\t\t{{ vm.post.message }}\n\t\t\t\t</p>\n\t\t\t\n\t\t\t",
		controller: function controller() {}
	};
}]);
angular.module("create-post.js", []).directive("createPost", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<section class=\"create-post\">\n\t\t\t\t\t<h3 class=\"create-post-title\"> Create new message </h3>\n\t\t\t\t\t<textarea class=\"create-post-text\"></textarea>\n\n\t\t\t\t\t<div class=\"create-post-actions\">\n\t\t\t\t\t\t<a class=\"add-button\">\n\t\t\t\t\t\t\t<span class=\"svg-add-photo\" ng-include=\"'dist/images/add-photo.svg'\"></span>\n\t\t\t\t\t\t\tAdd Photo\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"add-button\">\n\t\t\t\t\t\t\t<span class=\"svg-add-video\" ng-include=\"'dist/images/add-video.svg'\"></span>\n\t\t\t\t\t\t\tAdd Video\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button class=\"create-post-button\"> Post </button>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</section>\n\t\t\t"
	};
}]);
angular.module("title-bar.js", []).directive("titleBar", ["MockUsers", function (MockUsers) {
	return {
		restrict: "E",
		scope: {},
		controllerAs: "vm",
		bindToController: {
			mockRoute: "="
		},
		template: "\n\t\t\t\t<div class=\"title-bar-spacer\"></div>\n\t\t\t\t<nav class=\"title-bar\">\n\t\t\t\t\t<div class=\"title-bar-contents\">\n\t\t\t\t\t\t<span class=\"title-group-one\">\n\t\t\t\t\t\t\t<span class=\"simply-social-logo\" ng-click=\"vm.mockRoute = 'home'\">\n\t\t\t\t\t\t\t\t<span class=\"svg-logo\" ng-include=\"'dist/images/simply-social-logo.svg'\"></span>\n\t\t\t\t\t\t\t\t<span class=\"simply\">simply</span><span class=\"social\">social</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"title-group-two\">\n\t\t\t\t\t\t\t<span class=\"svg-caption-add\" ng-include=\"'dist/images/caption-add.svg'\" ng-click=\"vm.showModal = true\"></span>\n\n\t\t\t\t\t\t\t<modal-dialog ng-if=\"vm.showModal\" dismiss-modal=\"vm.showModal = false\">\n\t\t\t\t\t\t\t\t<create-post></create-post>\n\t\t\t\t\t\t\t</modal-dialog>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label class=\"search-box\">\n\t\t\t\t\t\t\t\t<input class=\"search-text\" type=\"text\">\n\t\t\t\t\t\t\t\t<span class=\"svg-search-glass\" ng-include=\"'dist/images/search-glass.svg'\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<img class=\"title-bar-avatar\" ng-src=\"{{vm.user.avatarUrl}}\" ng-click=\"vm.mockRoute = 'settings'\">\n\t\t\t\t\t\t\t{{ MockRouter.page }}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\t\t\t",
		controller: function controller() {
			var vm = this;
			vm.showModal = false;
			vm.user = MockUsers.meg;
		}
	};
}]);
angular.module("user-feed.js", []).directive("userFeed", ["FeedService", function (FeedService) {
	return {
		restrict: "E",
		scope: {},
		controllerAs: "vm",
		bindToController: {
			filterType: "="
		},
		template: "\n\t\t\t\t<section class=\"user-feed\">\n\t\t\t\t\t<post-details-loading ng-if=\"vm.loadingPosts\"></post-details-loading>\n\t\t\t\t\t<post-details post=\"post\" ng-repeat=\"post in vm.posts\"></post-details>\n\t\t\t\t</section>\n\t\t\t",
		controller: function controller() {
			var vm = this;

			vm.posts = [];
			vm.loadingPosts = true;
			FeedService.getCurrentUserFeed().then(function (posts) {
				vm.posts = posts;
				vm.loadingPosts = false;
			});
		}
	};
}]);
angular.module("write-something.js", []).directive("writeSomething", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<div class=\"write-something\">\n\t\t\t\t\t<input class=\"write-text\" placeholder=\"What's on your mind?\" type=\"text\">\n\t\t\t\t\t\n\t\t\t\t\t<a class=\"add-button\">\n\t\t\t\t\t\t<span class=\"svg-add-photo\" ng-include=\"'dist/images/add-photo.svg'\"></span>\n\t\t\t\t\t\tAdd Photo\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"add-button\">\n\t\t\t\t\t\t<span class=\"svg-add-video\" ng-include=\"'dist/images/add-video.svg'\"></span>\n\t\t\t\t\t\tAdd Video\n\t\t\t\t\t</a>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t"
	};
}]);
angular.module("home-page.js", []).directive("homePage", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<main-banner>\n\t\t\t\t\t<write-something></write-something>\n\t\t\t\t\t\n\t\t\t\t\t<list-filter></list-filter>\n\t\t\t\t</main-banner>\n\t\t\t\t\n\t\t\t\t<user-feed></user-feed>\n\t\t\t\t\n\t\t\t\t<main-footer></main-footer>\n\t\t\t"
	};
}]);
angular.module("profile-settings.js", []).directive("profileSettings", ["MockUsers", function (MockUsers) {
	return {
		restrict: "E",
		bindToController: {},
		controllerAs: "vm",
		template: "\n\t\t\t\n\t\t\t\t<section class=\"profile-settings\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\n\t\t\t\t\t<h1 class=\"profile-settings-title\"> Settings </h1>\n\t\t\t\t\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<legend> Account </legend>\n\t\t\t\t\t\t<div class=\"account-group-one\">\n\t\t\t\t\t\t\t<img class=\"user-avatar\" ng-src=\"{{ vm.user.avatarUrl }}\">\n\t\t\t\t\t\t\t<button class=\"profile-change-image\"> change </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"account-group-two\">\n\t\t\t\t\t\t\t<input class=\"user-name-text\" type=\"text\" ng-model=\"vm.user.name\">\n\t\t\t\t\t\t\t<input class=\"user-email-text\" type=\"email\" ng-model=\"vm.user.email\">\n\t\t\t\t\t\t\t<input class=\"user-password-text\" type=\"password\" value=\"123456\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</fieldset>\n\t\t\t\t\t\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<legend> Notifications </legend>\n\t\t\t\t\t\t<div class=\"profile-notification\" ng-repeat=\"option in vm.notificationOptions\">\n\t\t\t\t\t\t\t<label> <input type=\"checkbox\"> <span class=\"toggle-switch\"></span> {{ option }} </label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</fieldset>\n\t\t\t\t\t\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<legend> Privacy </legend>\n\t\t\t\t\t\t<div class=\"profile-privacy\" ng-repeat=\"option in vm.privacyOptions\">\n\t\t\t\t\t\t\t<label> <input type=\"checkbox\" checked> <span class=\"toggle-radio\"></span> {{ option }} </label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</fieldset>\n\t\t\t\t\t\n\t\t\t\t\t<button class=\"profile-save-button\"> Save Changes </button>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t</form>\n\t\t\t\t</section>\n\t\t\t",
		controller: function controller() {
			var vm = this;

			vm.user = MockUsers.meg;

			vm.privacyOptions = ["allow anyone to tag me", "only allow people I follow to tag me", "don't allow anyone to tag me", "add a location to my posts", "let others find me by my email address", "tailor ads based on my information"];

			vm.notificationOptions = ["email me when my posts are marked as favorites", "email me when I'm mentioned", "email me when I get a reply", "email me when someone follows me"];
		}
	};
}]);
angular.module("FeedService.js", []).factory("FeedService", ["$timeout", "MockPosts", function ($timeout, MockPosts) {
	var FeedService = {
		getCurrentUserFeed: getCurrentUserFeed
	};

	function getCurrentUserFeed() {
		return $timeout(1000).then(function () {
			return MockPosts;
		});
	}

	return FeedService;
}]);
angular.module("MockMedia.js", []).factory("MockMedia", [function () {

	// Source: "Video For Everybody" http://camendesign.com/code/video_for_everybody
	var bigBuckBunny = {
		mediaType: "video",
		width: 640, height: 360,
		poster: "http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg",
		videos: [{ mimeType: "video/mp4", videoUrl: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" }, { mimeType: "video/webm", videoUrl: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm" }, { mimeType: "video/ogv", videoUrl: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv" }] };

	var MockMedia = {
		images: {
			nature: { mediaType: "photo", width: 800, height: 450, imageUrl: "//lorempixel.com/800/450/nature" },
			sports: { mediaType: "photo", width: 800, height: 450, imageUrl: "//lorempixel.com/800/450/sports" } },
		videos: {
			bigBuckBunny: bigBuckBunny,
			nature: angular.extend({ poster: "//lorempixel.com/1280/720/nature" }, bigBuckBunny),
			sports: angular.extend({ poster: "//lorempixel.com/1280/720/sports" }, bigBuckBunny)
		}
	};

	return MockMedia;
}]);
angular.module("MockPosts.js", []).factory("MockPosts", ["MockUsers", "MockMedia", function (MockUsers, MockMedia) {
	var MockPosts = [{
		user: MockUsers.sam,
		message: "How to Get Inspired: the Right Way - Designmoto bit.ly/1lE4uJc Good stuff from @designmodo!",
		multimedia: null,
		timestamp: "15m",
		replies: [{
			user: MockUsers.jed,
			message: "Great way to start the week.  Thanks for sharing!",
			timestamp: "8m"
		}, {
			user: MockUsers.ren,
			message: "Feeling inspired now ... thanks for the great article @designmodo",
			timestamp: "3m"
		}]
	}, {
		user: MockUsers.meg,
		message: "My view this morning is simply beautiful...",
		timestamp: "45m",
		multimedia: MockMedia.images.nature,
		replies: null
	}, {
		user: MockUsers.sam,
		message: "A free, open source movie?  Cool! ",
		timestamp: "1h",
		multimedia: MockMedia.videos.bigBuckBunny }];

	return MockPosts;
}]);
angular.module("MockUsers.js", []).factory("MockUsers", [function () {
	var MockUsers = {
		meg: { name: "Meg Robichaud", avatarUrl: "//lorempixel.com/100/100/people/1", email: "meg.robichaud@email.com" },
		sam: { name: "Sam Soffes", avatarUrl: "//lorempixel.com/100/100/people/2" },
		jed: { name: "Jed Bridges", avatarUrl: "//lorempixel.com/100/100/people/3" },
		ren: { name: "Ren Walker", avatarUrl: "//lorempixel.com/100/100/people/4" } };

	return MockUsers;
}]);
angular.module("TrustedFilter.js", []).filter("trusted", ["$sce", function ($sce) {
	return function _TrustedFilter(url) {
		return $sce.trustAsResourceUrl(url);
	};
}]);
//# sourceMappingURL=app.combined.es6.js.map
//# sourceMappingURL=app.combined.es5.js.map