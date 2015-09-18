// Adding the class `img--loaded` for all images in a container after they are all fully loaded
// The class will be added once all images are loaded
// Example container: '.articles' or '.article'
// - uses the imagesLoaded external library
var imagesLoading = function(containerID) {
  var container = document.querySelector(containerID);
  var images = document.querySelectorAll(containerID + ' .img');
  var figures = document.querySelectorAll(containerID + ' .figure');

  imagesLoaded(container, function(instance) {
    for (var i = 0; i < images.length; i++) {
      figures[i].classList.add('figure--loaded');
      images[i].classList.add('img--loaded');
    }
  });
}
