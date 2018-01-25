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
                $('#sepia-container').addClass('sepia')
            } else {
                $('#sepia-container').removeClass('sepia')
            }
        })

        $('#night').change(function() {
            if ($(this).prop('checked')) {
                $('#brightness-container').addClass('bright')
            } else {
                $('#brightness-container').removeClass('bright')
            }
        })

        $('#blur').change(function() {
            if ($(this).prop('checked')) {
                $('#blur-container').addClass('blur')
            } else {
                $('#blur-container').removeClass('blur')
            }
        })
      });
