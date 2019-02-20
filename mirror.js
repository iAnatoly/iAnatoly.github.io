(function() {
  
    async function init() { 

        var stream = await navigator
            .mediaDevices
            .getUserMedia({ video: true, audio: false });

        var mirror = document.getElementById('video');
        mirror.srcObject = stream;
        mirror.play();        

        // Bootstrap-toggle forces jquery. Not much I can do here. 

        $('#mirror').change(function () {
            if ($(this).prop('checked')) {
                $('#mirror-container').addClass('mirror');
            } else {
                $('#mirror-container').removeClass('mirror');
            }
        });

        $('#sepia').change(function () {
            if ($(this).prop('checked')) {
                $('#sepia-container').addClass('sepia');
            } else {
                $('#sepia-container').removeClass('sepia');
            }
        });

        $('#night').change(function() {
            if ($(this).prop('checked')) {
                $('#brightness-container').addClass('bright');
            } else {
                $('#brightness-container').removeClass('bright');
            }
        });

        $('#blur').change(function () {
            if ($(this).prop('checked')) {
                $('#blur-container').addClass('blur');
            } else {
                $('#blur-container').removeClass('blur');
            }
        });
    };

    window.addEventListener('load', init, false);
})();
