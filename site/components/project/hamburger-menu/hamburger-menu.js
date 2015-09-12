var hamburgerMenu = function(trigger) {
  var trigger = document.querySelector(trigger);
  trigger.addEventListener('click', clickTrigger, false);

  function clickTrigger(event) {
    opened = this.classList.contains('hamburger-menu__icon--opened');

    if (opened) {
      this.classList.remove('hamburger-menu__icon--opened');
      this.classList.add('hamburger-menu__icon--closed');
    } else {
      this.classList.remove('hamburger-menu__icon--closed');
      this.classList.add('hamburger-menu__icon--opened');
    }
  }
}

hamburgerMenu('.hamburger-menu__icon');
