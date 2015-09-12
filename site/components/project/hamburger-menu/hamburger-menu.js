var hamburgerMenu = function(triggerID) {
  var iconID = triggerID.concat('__icon');
  var textID = triggerID.concat('__text');

  var trigger = document.querySelector(triggerID);
  var icon = document.querySelector(iconID);
  var text = document.querySelector(textID);

  trigger.addEventListener('click', clickTrigger, false);

  function clickTrigger(event) {
    toggleClass(icon, iconID);
    toggleClass(text, textID);
  }

  function toggleClass(element, klassName) {
    var opened = klassName.concat('--opened').substr(1);
    var closed = klassName.concat('--closed').substr(1);

    var open = element.classList.contains(opened);

    if (open) {
      element.classList.remove(opened);
      element.classList.add(closed);
    } else {
      element.classList.remove(closed);
      element.classList.add(opened);
    }
  }
}

hamburgerMenu('.hamburger-menu');
