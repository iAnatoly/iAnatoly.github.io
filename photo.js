(function() {

    function init() { 
        document.getElementById('capture').addEventListener('click', function(ev){
            takepicture();
            ev.preventDefault();
        }, false);
        document.getElementById('download').addEventListener('click', function(ev){
            download();
            ev.preventDefault();
        }, false);
    };

    function download() {
    }

    function takepicture() {
        var canvas = document.getElementById('canvas');
        var video = document.getElementById('video');
        var photo = document.getElementById('photo');

        var width = video.offsetWidth;
        var height = video.offsetHeight;

        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext('2d');

        context.drawImage(video, 0, 0, width, height);
    
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);

        var btn_download = document.getElementById('download');
        btn_download.style.display = '';
  }

  window.addEventListener('load', init, false);

})();
