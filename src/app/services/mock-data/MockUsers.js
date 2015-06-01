angular.module('MockUsers.js', [])
.factory('MockUsers', [
	function() {
		var MockUsers = {
			sam: { name: "Sam Soffes", avatarUrl: "//lorempixel.com/100/100/people/1" },
			jed: { name: "Jed Bridges", avatarUrl: "//lorempixel.com/100/100/people/2" },
			ren: { name: "Ren Walker", avatarUrl: "//lorempixel.com/100/100/people/3" },
			meg: { name: "Meg Robichaud", avatarUrl: "//lorempixel.com/100/100/people/4", email: "meg.robichaud@email.com" },
		};
		
		return MockUsers;
	}
]);