(function(){

    angular.module('starter').factory("AudioFactory", AudioFactory);

    AudioFactory.$inject = ['$cordovaMedia'];

    function AudioFactory($cordovaMedia) {
        var factory = {};

        var media = null;

        factory.playTrack = function (track, onSuccess, onError, onStatusChange) {

            // If this is not a first playback stop and unload previous audio track
            if (media) {
                media.stop();
                media.release();
            }

            if(track.fullPath){
                media = new Media(track.fullPath, function (success) {
                    factory.stopTrack();
                    onSuccess(success);
                }, function (error) {
                    factory.stopTrack();
                    onError(error);
                }, function (status) {
                    onStatusChange(status);
                });

                /*
                 Media.MEDIA_NONE = 0;
                 Media.MEDIA_STARTING = 1;
                 Media.MEDIA_RUNNING = 2;
                 Media.MEDIA_PAUSED = 3;
                 Media.MEDIA_STOPPED = 4;
                */
                media.play();

                // TODO: remove this once testing is done
                /*setTimeout(function(){
                    var dur = media.getDuration();
                    console.log("Duration: " + dur);
                    dur = (dur - 5) * 1000;
                    media.seekTo(dur);
                }, 1000);*/


                return true;
            }
            return false;
        };

        factory.stopTrack = function () {
            if (media) {
                media.stop();
                media.release();
            }
            media = null;
        };

        factory.getAdjacentTrack = function (tracks, currentTrack, direction) {
            if(!currentTrack){
                return tracks[0];
            }

            var nextTrackId = currentTrack.id + direction;
            if(nextTrackId >= 105){
                nextTrackId = 100;
            } else if(nextTrackId <= 99){
                nextTrackId = 104;
            }
            return _.findWhere(tracks, {id: nextTrackId});
        };

        return factory;
    }

}());