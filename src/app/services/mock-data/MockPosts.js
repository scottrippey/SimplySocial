angular.module('MockPosts.js', [])
.factory('MockPosts', [
	'MockUsers','MockMedia',
	function(MockUsers, MockMedia) {
		var MockPosts = [
			{ 
				user: MockUsers.sam,
				message: "How to Get Inspired: the Right Way - Designmoto bit.ly/1lE4uJc Good stuff from @designmodo!",
				multimedia: null,
				timestamp: "15m",
				replies: [
					{
						user: MockUsers.jed,
						message: "Great way to start the week.  Thanks for sharing!",
						timestamp: "8m"
					},
					{
						user: MockUsers.ren,
						message: "Feeling inspired now ... thanks for the great article @designmodo",
						timestamp: "3m"
					},
				]
			},
			{
				user: MockUsers.meg,
				message: "My view this morning is simply beautiful...",
				timestamp: "45m",
				multimedia: MockMedia.images.nature,
				replies: null
			},
			{
				user: MockUsers.sam,
				message: "You have to see these guys play.  So amazing!",
				timestamp: "1h",
				multimedia: MockMedia.videos.sports,
			}
		];
		
		return MockPosts;
	}
]);