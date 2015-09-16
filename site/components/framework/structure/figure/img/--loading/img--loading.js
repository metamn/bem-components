var imageLoading = function(containerID) {
  var container = document.querySelector(containerID);
  var images = document.querySelectorAll(containerID + ' img');

  imagesLoaded(container, function(instance) {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.add('img--loaded');
    }
  });
}
