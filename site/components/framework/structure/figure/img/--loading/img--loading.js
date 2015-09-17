// Adding the class `img--loaded` for all images in a container after each of them is fully loaded
// The class will be added sequentially after an image is loaded
// Example container: '.articles .article'
var imagesLoadingEach = function(containerID) {
  var containers = document.querySelectorAll(containerID);

  for (var i = 0; i <= containers.length; i++) {
    imagesLoadingAll(containers[i].classList[0]);
  }
}

// Adding the class `img--loaded` for all images in a container after they are all fully loaded
// The class will be added once all images are loaded
// Example container: '.articles' or '.article'
// - uses the imagesLoaded external library
var imagesLoadingAll = function(containerID) {
  var container = document.querySelector(containerID);
  var images = document.querySelectorAll(containerID + ' img');

  imagesLoaded(container, function(instance) {
    for (var i = 0; i < images.length; i++) {
      images[i].classList.add('img--loaded');
    }
  });
}
