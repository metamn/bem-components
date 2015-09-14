var setBackgroundImage = function(elementID) {
  var element = document.querySelector(elementID);
  var imageName = element.getAttribute('data-image');

  if (matchMedia('only screen and (min-width: 1601px)').matches) {
    element.style.backgroundImage = "url('" + imageName + "_desktop.png')";
  }
};
