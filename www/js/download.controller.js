(function(){

    angular.module('starter').controller('DownloadController', DownloadController);

    DownloadController.$inject = ['$scope', '$state', '$ionicPlatform', 'ARTISTS', '$ionicModal', '$cordovaMedia', '$cordovaFile', '$cordovaDialogs', 'AudioFactory', 'StorageFactory', '$timeout'];

    function DownloadController($scope, $state, $ionicPlatform, ARTISTS, $ionicModal, $cordovaMedia, $cordovaFile, $cordovaDialogs, AudioFactory, StorageFactory, $timeout) {

        $ionicPlatform.ready(function () {

            $scope.isDownloading = false;
            $scope.artists = ARTISTS;
            console.log(ARTISTS.length);

            $scope.downloadTracks = function(artist){
                var totalTracks = artist.tracks.length;
                var downloaded = 0;
                var failed = 0;
                $scope.isDownloading = true;
                $scope.downloadingArtist = artist;

                artist.tracks.forEach(function(track) {
                    //console.log(element);
                    StorageFactory.downloadTrack(artist.path, track).then(function(result) {
                        // Success!
                        console.log("download complete");
                        downloaded++;
                        if(downloaded+failed >= totalTracks){
                            $scope.isDownloading = false;
                        }
                    }, function(err) {
                        // Error
                        console.log("download Error");
                        failed++;
                        if(downloaded+failed >= totalTracks){
                            $scope.isDownloading = false;
                        }
                    }, function (progress) {
                        //console.log(JSON.stringify(progress));
                        $timeout(function () {
                            $scope.downloadProgress = (progress.loaded / (track.size)) * 100;
                        },0);
                    });

                });
            }

        });
    }

}());