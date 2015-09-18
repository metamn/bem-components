// Adding the class `img--loaded` for images after they are all fully loaded
// - 'containerID' can be like '.hero' or '.articles .article'
var imagesLoading = function(containerID) {
  var containers = document.querySelectorAll(containerID);

  for (var i = 0; i < containers.length; i++) {
    imageLoading(containers[i]);
  }
}

// Adding the class `img-loaded` for images inside a single container
// - uses the imagesLoaded external library
var imageLoading = function(container) {
  console.log('container:' + container.id);

  var images = container.querySelectorAll('.img');
  var figures = container.querySelectorAll('.figure');

  imagesLoaded(container, function(instance) {
    console.log('container images loaded:' + container.id);

    for (var i = 0; i < images.length; i++) {
      console.log('image loaded:' + images[i].getAttribute(src));

      figures[i].classList.add('figure--loaded');
      images[i].classList.add('img--loaded');
    }
  });
}
