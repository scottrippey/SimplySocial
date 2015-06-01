angular.module('profile-settings.js', [])
.directive('profileSettings', [
	'MockUsers',
	function(MockUsers) {
		return {
			restrict: 'E',
			bindToController: {},
			controllerAs: 'vm',
			template: `
			
				<section class="profile-settings">
					<form>
					
					<h1> Settings </h1>
				
					<fieldset>
						<legend> Account </legend>
						<div class="account-group-one">
							<img class="user-avatar" ng-src="{{ vm.user.avatarUrl }}">
							<button> change </button>
						</div>
						
						<div class="account-group-two">
							<input class="user-name-text" type="text" ng-model="vm.user.name">
							<input class="user-email-text" type="email" ng-model="vm.user.email">
							<input class="user-password-text" type="password" value="123456">
						</div>
						
					</fieldset>
					
					<fieldset>
						<legend> Notifications </legend>
						<div ng-repeat="option in vm.notificationOptions">
							{{ option }}
						</div>
						
					</fieldset>
					
					<fieldset>
						<legend> Privacy </legend>
						<div ng-repeat="option in vm.privacyOptions">
							{{ option }}
						</div>
						
						
					</fieldset>
					
					<button> Save Changes </button>
					
					
					</form>
				</section>
			`,
			controller: function() {
				var vm = this;
				
				vm.user = MockUsers.meg;
				
				vm.privacyOptions = [
					'allow anyone to tag me', 
					'only allow people I follow to tag me', 
					'don\'t allow anyone to tag me', 
					'add a location to my posts', 
					'let others find me by my email address', 
					'tailor ads based on my information'
				];
				
				vm.notificationOptions = [
					'email me when my posts are marked as favorites',
					'email me when I\'m mentioned',
					'email me when I get a reply',
					'email me when someone follows me'
				]
			}
		};
	}
]);