var showImages = function(containerID) {
  var container = document.querySelector(containerID);
  var images = document.querySelectorAll(containerID + ' img');

  imagesLoaded(container, function(instance) {
    console.log('All images are loaded');
    for (var i = 0; i < images.length; i++) {
      images[i].style.opacity = "1";
    }
  });
}

showImages('body');
