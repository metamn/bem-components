var hamburgerMenu = function(triggerID) {
  var iconID = triggerID.concat('__icon');

  var trigger = document.querySelector(triggerID);
  var icon = document.querySelector(iconID);
  trigger.addEventListener('click', clickTrigger, false);

  function clickTrigger(event) {
    // create 'hamburger-menu__icon--opened' from '.hamburger-menu__icon'
    var iconOpenedID = iconID.concat('--opened').substr(1);
    var iconClosedID = iconID.concat('--closed').substr(1);

    opened = icon.classList.contains(iconOpenedID);

    if (opened) {
      icon.classList.remove(iconOpenedID);
      icon.classList.add(iconClosedID);
    } else {
      icon.classList.remove(iconClosedID);
      icon.classList.add(iconOpenedID);
    }
  }
}

hamburgerMenu('.hamburger-menu');
