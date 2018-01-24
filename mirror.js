navigator
    .mediaDevices
    .getUserMedia({ video: true, audio: false },)
    .then(function(stream){
        var mirror = document.querySelector('#mirror');
        mirror.srcObject = stream;
        mirror.play();        
    })
    .catch(function(err) { 
        console.log("oops1"); 
    });
