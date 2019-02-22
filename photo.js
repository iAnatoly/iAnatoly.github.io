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

    function zero(num) {
        return num<10 ? '0' + num : num;
    }

    function getDate() {
        var currentdate = new Date();
        return `${currentdate.getFullYear()}${zero(currentdate.getMonth()+1)}${zero(currentdate.getDate())}T`+
            `${zero(currentdate.getHours())}${zero(currentdate.getMinutes())}${zero(currentdate.getSeconds())}`;
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
        downloadUri(`photobooth-${getDate()}.png`, data);
    }
    
    function scrollPix(pixels, scrollDuration) {
        var scrollStep = pixels / (scrollDuration / 10);
        var windowScrollPrev = window.scrollY -1 ;
        scrollInterval = setInterval(function(){
            if (window.scrollY < pixels && window.scrollY!=windowScrollPrev) {
                windowScrollPrev = window.scrollY;
                window.scrollBy( 0, scrollStep );
            } else {
                clearInterval(scrollInterval);
            } 
        },10);
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

        scrollPix(photo.offsetTop, 1000);
    }

  window.addEventListener('load', init, false);

})();
