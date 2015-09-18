@mixin figure--loading {
  @include background-image($black);
  background-image: url("{{ site.url }}{{ site.images }}spinner.svg");

  &--loaded {
    background: transparent;
    background-image: none;
  }
}
