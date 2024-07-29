document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var img = document.getElementById('img');
    var captionText = document.getElementById('caption');
    var closeBtn = document.querySelector('.close');

    var images = document.querySelectorAll('.contenedor-imagenes img');
    images.forEach(function(image) {
        image.onclick = function() {
            if (window.innerWidth > 1024) { // Solo mostrar el modal en resoluciones mayores a 1024px
                modal.style.display = "block";
                img.src = this.src;
                captionText.innerHTML = this.alt;
            }
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 1024) {
            modal.style.display = 'none';
        }
    });
});