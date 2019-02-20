(function() {

    function init() { 
        document.getElementById('capture').addEventListener('click', function(ev){
            takePictureEventHandler();
            ev.preventDefault();
        }, false);
        document.getElementById('download').addEventListener('click', function(ev){
            downloadEventHandler();
            ev.preventDefault();
        }, false);
    };

    function getDate() {
        var currentdate = new Date();
        return currentdate.getFullYear()+ 
            + (currentdate.getMonth()+1) 
            + currentdate.getDate() + "T"
            + currentdate.getHours()  
            + currentdate.getMinutes() 
            + currentdate.getSeconds();
    }

    function downloadUri(name, uri) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
    }

    function downloadEventHandler() {
        var canvas = document.getElementById('canvas');
        var data = canvas.toDataURL('image/png');
        downloadUri(`photobooth${getDate()}.png`, data);
    }
    

    function takePictureEventHandler() {
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

        document.getElementById('download').style.display = '';
        document.getElementById('downarrow').style.display = '';
  }

  window.addEventListener('load', init, false);

})();
