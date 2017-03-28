(function(){

    angular.module('starter').factory("StorageFactory", StorageFactory);

    StorageFactory.$inject = ['ARTISTS', 'TRACKS', '$cordovaFile', '$cordovaFileTransfer', '$q'];

    function StorageFactory(ARTISTS, TRACKS, $cordovaFile, $cordovaFileTransfer, $q) {
        var factory = {};

        var resourceDir = '/android_asset/www/audio/';
        var audioDirectory = "audio";
        var downloadUri = 'http://miniman.us/downloads/quranRecite/';

        factory.prepareDirectory = function () {
            resourceDir = (cordova.file.externalDataDirectory || cordova.file.dataDirectory);

            // check directory if exist
            return $cordovaFile.checkDir(resourceDir, audioDirectory).then(function (success) {
                // success
                resourceDir = resourceDir + audioDirectory + "/";
                return resourceDir;
            }, function (error) {
                // error
                return $cordovaFile.createDir(resourceDir, audioDirectory, false).then(function (success) {
                    // success
                    resourceDir = resourceDir + audioDirectory + "/";
                    return resourceDir;
                }, function (error) {
                    // error
                    return error;
                });
            });
        };

        factory.getTracks = function(){
            var tracks = TRACKS;
            _.each(tracks, function(track){
                track.fileName = ("00" + track.id).slice(-3) + ".mp3";
                track.isAvailable = false;
                track.fullPath = resourceDir + track.fileName;
            });
            return tracks;
        };

        factory.getFiles = function(){

            function checkFile(file){
                return $cordovaFile.checkFile(resourceDir, file.fileName)
                    .then(function (success) {
                        // success
                        file.isAvailable = true;
                        file.fullPath = resourceDir + file.fileName;
                    }, function (error) {
                        // error
                    });
            }
            var files = [];
            var track;
            for(var i=100; i<=104; i++){
                track = {
                    id: i,
                    fileName: ("00" + i).slice(-3) + ".mp3",
                    isAvailable: false
                };
                files.push(track);
            }

            return $q.all(files.map(checkFile)).then(function(results){
                return files;
            })
        };

        factory.isDownloadNeeded = function(tracks){
            var isAvailable = false;
            for(var i=0; i<tracks.length; i++){
                isAvailable = isAvailable || tracks[i].isAvailable;
            }
            return !isAvailable;
        };

        factory.downloadTrack = function(path, track, progressCallback){

            var url = downloadUri + path + "/" + track.fileName;
            var targetPath = resourceDir + track.fileName;
            var trustHosts = true;
            var options = {};

            return $cordovaFileTransfer.download(url, targetPath, options, trustHosts);

        };

        factory.getFreeDiskSpace = function(){
            return $cordovaFile.getFreeDiskSpace()
                .then(function (success) {
                    // success in kilobytes
                    console.log(success);
                    return success;
                }, function (error) {
                    // error
                    console.log('did not get free space...');
                    return error;
                });
        };


        return factory;
    }

}());