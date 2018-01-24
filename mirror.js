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

    $(function() {
        $('#sepia').change(function() {
            if ($(this).prop('checked')) {
                $('#mirror').addClass('sepia')
            } else {
                $('#mirror').removeClass('sepia')
            }
        })

        $('#night').change(function() {
            if ($(this).prop('checked')) {
                $('#mirror').addClass('bright')
            } else {
                $('#mirror').removeClass('bright')
            }
        })

        $('#blur').change(function() {
            if ($(this).prop('checked')) {
                $('#mirror').addClass('blur')
            } else {
                $('#mirror').removeClass('blur')
            }
        })
      });
