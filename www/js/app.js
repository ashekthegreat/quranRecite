var app = angular.module('starter', ['ionic']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        console.log("ionic platform ready");
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        /*cordova.plugins.backgroundMode.enable();
        cordova.plugins.backgroundMode.overrideBackButton();
        cordova.plugins.backgroundMode.on('activate', function() {
            cordova.plugins.backgroundMode.disableWebViewOptimizations();
        });*/
    });
});

app.controller('AudioController', function ($scope, $ionicPlatform) {

    var audio = [{
        id: 1,
        key: 'master',
        title: "The Master",
        track: 'audio/The_Master.mp3',
        genre: "This will be card Description"
    }, {
        id: 2,
        key: 'give',
        title: "Give",
        track: 'audio/Give.mp3',
        genre: "Alternative & Punk | Bright"
    }, {
        id: 3,
        key: 'morning',
        title: "Morning Stroll",
        track: 'audio/Morning_Stroll.mp3',
        genre: "Classical | Happy"
    }];

    $scope.audioTracks = Array.prototype.slice.call(audio, 0);

    $scope.player = {
        key: '' // Holds a last active track
    };

    $ionicPlatform.ready(function () {
        console.log("abc1: " + $scope.abc);
        $scope.abc = "Flag";
        console.log("abc2: " + $scope.abc);

        console.log(cordova.file.externalDataDirectory);
        console.log(cordova.file.dataDirectory);

        // Enable background mode while track is playing
        cordova.plugins.backgroundMode.enable();

        // Called when background mode has been activated
        cordova.plugins.backgroundMode.onactivate = function() {
            // if track was playing resume it
            if($scope.player.key.length) {
                window.plugins.NativeAudio.play($scope.player.key); // Play audio track
            } else{
                cordova.plugins.backgroundMode.disable();
            }
        };

        $scope.playTrack = function (track, key) {


            // Preload an audio track before we play it
            window.plugins.NativeAudio.preloadComplex(key, track, 1, 1, 0, function (msg) {

                // If this is not a first playback stop and unload previous audio track
                if ($scope.player.key.length > 0) {
                    window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
                    window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
                }

                $scope.player.key = key; // Set a current audio track so we can close it if needed
                window.plugins.NativeAudio.play(key); // Play audio track
                
            }, function (msg) {
                console.log('error: ' + msg); // Loading error
            });
        };

        $scope.stopTrack = function () {
            // If this is not a first playback stop and unload previous audio track
            console.log($scope.player.key);
            if ($scope.player.key.length > 0) {
                window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
                window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
                $scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function
            }
            cordova.plugins.backgroundMode.disable();
        };
    });
});