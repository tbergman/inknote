developerKingdomModule.
	controller("guideCtrl", function guideCtrl($scope, $window){
		
		$scope.sections = [{name: "Introduction", html: "blah blah blah <h1>Lololol</h1>"},{name: "Adding plugins", html: "<h3>Na na na na na nana heeeeeey jude</h3><h3>Hey judey judey jude</h3>"}];
		
		$scope.currentSection = {};
		$scope.currentSectionOn = false;
		
		$scope.setSection = function(section){
			$scope.currentSection = section;
			$scope.currentSectionOn = true;
		}
		
		$scope.backToSections = function(){
			$scope.currentSectionOn = false;
		}
	})