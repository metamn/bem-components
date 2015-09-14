// Read the `figure` element's responsive images and breakpoints
// Set as background image with `matchMedia` coming from `Picturefill`
var setBackgroundImage = function(elementID) {
  var element = document.querySelector(elementID);
  var picture = document.querySelector(elementID + ' .picture');

  // Collect images and breakpoints from `picture`
  // - <source media="(min-width: 600px)" srcset="/assets/images/placeholder-16-9_tablet.png, /assets/images/placeholder-16-9_tablet2x.png 2x">
  // - start with mobile then go to desktop; media queries stop at the first match
  for (var i = picture.children.length - 1; i >= 0 ; i--) {
    var srcset = picture.children[i].srcset;
    var media = picture.children[i].media;
    var images = srcset.split(', ');

    for (var j = 0; j < images.length; j++) {
      var x2 = images[j].split(' 2x');
      var retina = (x2.length > 1);

      setResponsiveBackgroundImage(element, x2[0], media, retina);
    }
  }

  // Set a responsive background image using `mathcMedia`
  function setResponsiveBackgroundImage(element, image, breakpoint, retina) {
    //console.log('i:' + image + ' b:' + breakpoint + ' r:' + retina);
    var mediaQuery = "only screen and " + breakpoint;

    if (retina) {
      // This might not be cross platform compatible ....
      mediaQuery += " and (-webkit-min-device-pixel-ratio: 2)";
    }

    console.log('m:' + mediaQuery);

    if (matchMedia(mediaQuery).matches) {
      element.style.backgroundImage = "url('" + image + "')";
    }
  }
};
