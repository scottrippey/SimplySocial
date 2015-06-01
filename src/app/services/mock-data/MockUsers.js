angular.module('MockUsers.js', [])
.factory('MockUsers', [
	function() {
		var MockUsers = {
			meg: { name: "Meg Robichaud", avatarUrl: "//lorempixel.com/100/100/people/1", email: "meg.robichaud@email.com" },
			sam: { name: "Sam Soffes", avatarUrl: "//lorempixel.com/100/100/people/2" },
			jed: { name: "Jed Bridges", avatarUrl: "//lorempixel.com/100/100/people/3" },
			ren: { name: "Ren Walker", avatarUrl: "//lorempixel.com/100/100/people/4" },
		};
		
		return MockUsers;
	}
]);