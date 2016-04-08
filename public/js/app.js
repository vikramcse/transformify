(function() {
  'use strict';

  var imageLoader = document.getElementById('imageLoader');
  imageLoader.addEventListener('change', handleImage, false);

  var canvas = document.getElementById('imageCanvas');
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth * 0.80;
  canvas.height = window.innerHeight * 0.70;

  //var filters = ["vintage", "lomo", "clarity", "sincity", "sunrise", "orangepeel", "grungy", "jarques", "nostalgia"];

  function handleImage(e) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var img = new Image();

      img.onload = function() {
        var canvas = ctx.canvas;

        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);

        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }

      img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  var vintage = document.getElementById("vintage");
  var lomo = document.getElementById("lomo");
  var clarity = document.getElementById("clarity");
  var sepia = document.getElementById("sepia");
  var sunrise = document.getElementById("sunrise");
  var grungy = document.getElementById("grungy");
  var jarques = document.getElementById("jarques");
  var nostalgia = document.getElementById("nostalgia");

  var download = document.getElementById("download");
  var reset = document.getElementById("reset");


  reset.addEventListener('click', function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.revert(false);
      this.render();
    });
  });

  download.addEventListener('click', function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.render(function() {
        this.save('.png');
      });
    });

  });


  vintage.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.vintage();
      this.render();
    });
  });

  lomo.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.lomo();
      this.render();
    });
  });

  clarity.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.clarity();
      this.render();
    });
  });

  sepia.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.sepia();
      this.render();
    });
  });

  sunrise.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.sunrise();
      this.render();
    });
  });

  grungy.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.grungy();
      this.render();
    });
  });

  jarques.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.jarques();
      this.render();
    });
  });

  nostalgia.addEventListener("click", function(event) {
    event.preventDefault();

    Caman(canvas, function() {
      this.nostalgia();
      this.render();
    });
  });
})();
