/* This file was generated by [build-angular.js] */
"use strict";

angular.module("app-components.js", ["banner.js", "list-filter.js", "title-bar.js", "write-post.js"]);
/* This file was generated by [build-angular.js] */
angular.module("app-pages.js", ["home-page.js"]);
angular.module("app", ["ngAnimate", "ngTouch", "app-components.js", "app-pages.js"]);
angular.module("banner.js", []).directive("banner", [function () {
	return {
		restrict: "E",
		transclude: true,
		template: "\n\t\t\t<div class=\"banner\">\n\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t</div>\n\t\t\t"
	};
}]);
angular.module("list-filter.js", []).directive("listFilter", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<nav class=\"list-filter\">\n\t\t\t\t\t<div class=\"list-filter-contents\">\n\t\t\t\t\t\t<div class=\"filter-group-one\">\n\t\t\t\t\t\t\t<a class=\"filter-item layout selected\">\n\t\t\t\t\t\t\t\t<img src=\"dist/images/list.png\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"filter-item layout\">\n\t\t\t\t\t\t\t\t<img src=\"dist/images/grid.png\">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter-group-two\">\n\t\t\t\t\t\t\t<a class=\"filter-item type selected\"> All Posts </a>\n\t\t\t\t\t\t\t<a class=\"filter-item type\"> Photos </a>\n\t\t\t\t\t\t\t<a class=\"filter-item type\"> Videos </a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\t\t\t"
	};
}]);
angular.module("title-bar.js", []).directive("titleBar", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<nav class=\"title-bar\">\n\t\t\t\t\t<div class=\"title-bar-contents\">\n\t\t\t\t\t\t<span class=\"title-group-one\">\n\t\t\t\t\t\t\t<span class=\"simply-social-logo\">\n\t\t\t\t\t\t\t\t<span class=\"svg-logo\" ng-include=\"'dist/images/simply-social-logo.svg'\"></span>\n\t\t\t\t\t\t\t\t<span class=\"simply\">simply</span><span class=\"social\">social</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"title-group-two\">\n\t\t\t\t\t\t\t<span class=\"svg-caption-add\" ng-include=\"'dist/images/caption-add.svg'\"></span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label class=\"search-box\">\n\t\t\t\t\t\t\t\t<input class=\"search-text\" type=\"text\">\n\t\t\t\t\t\t\t\t<span class=\"svg-search-glass\" ng-include=\"'dist/images/search-glass.svg'\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<current-user-avatar></current-user-avatar>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\t\t\t"
	};
}]);
angular.module("write-post.js", []).directive("writePost", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<div class=\"write-post\">\n\t\t\t\t\t<input class=\"write-text\" placeholder=\"What's on your mind?\" type=\"text\">\n\t\t\t\t\t\n\t\t\t\t\t<a class=\"add-button\">\n\t\t\t\t\t\t<span class=\"svg-add-photo\" ng-include=\"'dist/images/add-photo.svg'\"></span>\n\t\t\t\t\t\tAdd Photo\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"add-button\">\n\t\t\t\t\t\t<span class=\"svg-add-video\" ng-include=\"'dist/images/add-video.svg'\"></span>\n\t\t\t\t\t\tAdd Video\n\t\t\t\t\t</a>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t"
	};
}]);
angular.module("home-page.js", []).directive("homePage", [function () {
	return {
		restrict: "E",
		template: "\n\t\t\t\t<banner>\n\t\t\t\t\t<write-post></write-post>\n\t\t\t\t\t\n\t\t\t\t\t<list-filter></list-filter>\n\t\t\t\t</banner>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<section>\n\t\t\t\t\t<fieldset> POST 1 </fieldset>\n\t\t\t\t\t<fieldset> POST 2 </fieldset>\n\t\t\t\t\t<fieldset> POST 3 </fieldset>\n\t\t\t\t\t<fieldset> POST 4 </fieldset>\n\t\t\t\t</section>\n\t\t\t"
	};
}]);
//# sourceMappingURL=app.combined.es6.js.map
//# sourceMappingURL=app.combined.es5.js.map