angular.module('solar-system').component('navBar', {
    template: `<nav ng-hide="show2" class="navbar  navbar-dark black">
			<div class="container">
				<ul class="navbar-nav">
					<li class="nav-item" ng-class="{active: isActive('/sun')}">
						<a class="nav-link animated pulse" ui-sref="sun"><span>The Sun</span></a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/mercury')}">
						<a class="nav-link" ui-sref="mercury">Mercury</a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/venus')}">
						<a class="nav-link" ui-sref="venus">Venus</a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/earth')}">
						<a class="nav-link" ui-sref="earth">Earth</a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/mars')}">
						<a class="nav-link" ui-sref="mars">Mars</a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/jupiter')}">
						<a class="nav-link" ui-sref="jupiter">Jupiter</a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/saturn')}">
						<a class="nav-link" ui-sref="saturn">Saturn</a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/uranus')}">
						<a class="nav-link" ui-sref="uranus">Uranus</a>
					</li>
					<li class="nav-item" ng-class="{active: isActive('/neptune')}">
						<a class="nav-link" ui-sref="neptune">Neptune</a>
					</li>
				</ul>
			</div>
		</nav>`,
    controller: function ($location) {
        let vm = this;
        vm.show2 = true;

        vm.isActive = function (des) {
            return des === $location.path();
        }
    }
});

