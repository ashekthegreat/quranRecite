(function(){

    angular.module('starter').controller('AudioController', AudioController);

    AudioController.$inject = ['$scope', '$state', '$ionicPlatform', '$ionicModal', '$cordovaMedia', '$cordovaFile', '$cordovaDialogs', 'AudioFactory', 'StorageFactory', '$timeout'];

    function AudioController($scope, $state, $ionicPlatform, $ionicModal, $cordovaMedia, $cordovaFile, $cordovaDialogs, AudioFactory, StorageFactory, $timeout) {

        $ionicPlatform.ready(function () {

            $ionicModal.fromTemplateUrl('download-confirm.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.downloadConfirmModal = modal;
            });



            //$scope.currentTrack = $scope.tracks[1];
            setTimeout(function(){
                //return;

                StorageFactory.prepareDirectory().then(function (success) {
                    $scope.tracks = StorageFactory.getTracks();
                    return;
                    StorageFactory.getFiles().then(function(result){
                        $scope.tracks = result;
                        //console.log(JSON.stringify($scope.tracks));
                        //console.log(JSON.stringify($scope.tracks));
                        if(StorageFactory.isDownloadNeeded($scope.tracks)){
                            //$scope.downloadConfirmModal.show();

                            $cordovaDialogs.confirm('You need to download the tracks first.', 'Download Tracks', ['Not now','Download'])
                                .then(function(buttonIndex) {
                                    // no button = 0, 'OK' = 1, 'Cancel' = 2
                                    var btnIndex = buttonIndex;
                                    console.log(buttonIndex + " clicked");
                                    $state.go('tabs.download');
                                });
                        }
                    },function (error) {
                        console.log(error);
                    })
                }, function(error){
                    // something bad happened.. take care of that
                    console.log(error);
                });
            }, 100);

            $scope.toggleTrack = function(track){
                if($scope.currentTrack && $scope.currentTrack.id == track.id){
                    $scope.stopTrack(track);
                } else{
                    $scope.playTrack(track);
                }
            };
            $scope.playTrack = function (track) {
                console.log("playing track: " + track.id);
                track = track || $scope.tracks[0];
                $scope.currentTrack = track;
                AudioFactory.playTrack(track, function (success) {
                    if($scope.currentTrack){
                        $scope.playTrack(AudioFactory.getAdjacentTrack($scope.tracks, $scope.currentTrack, 1));
                    }

                    console.log("Playing ended, next track: " + AudioFactory.getAdjacentTrack($scope.tracks, $scope.currentTrack, 1).id);
                }, function (error) {
                    //$scope.playTrack(AudioFactory.getAdjacentTrack($scope.tracks, $scope.currentTrack, 1));
                    console.log("error playing");
                }, function (status) {
                    console.log("Status: " + status);
                });
            };

            $scope.stopTrack = function () {
                console.log("stopping track");
                AudioFactory.stopTrack();
                $scope.currentTrack = null;
            };

            $scope.nextTrack = function () {
                $scope.playTrack(AudioFactory.getAdjacentTrack($scope.tracks, $scope.currentTrack, 1));
            };

            $scope.prevTrack = function () {
                $scope.playTrack(AudioFactory.getAdjacentTrack($scope.tracks, $scope.currentTrack, -1));
            };

            $scope.closeDownloadModal = function(){
                $scope.downloadConfirmModal.hide();
            };

        });
    }

}());