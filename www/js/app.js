(function(){

    var app = angular.module('starter', ['ionic', 'ngCordova']);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

    });

    app.run(function($ionicPlatform, AudioFactory) {
        // Disable BACK button on home
        $ionicPlatform.onHardwareBackButton(function(event) {
            console.log("Exiting..");
            AudioFactory.stopTrack();
            setTimeout(function(){
                console.log("Exiting after timeout..");
                ionic.Platform.exitApp();
            }, 2000);
        });
    });


    app.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller: 'AudioController'
                    }
                }
            })
            .state('tabs.download', {
                url: "/download",
                views: {
                    'download-tab': {
                        templateUrl: "templates/download.html",
                        controller: 'DownloadController'
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "templates/about.html"
                    }
                }
            });


        $urlRouterProvider.otherwise("/tab/home");

    });

}());