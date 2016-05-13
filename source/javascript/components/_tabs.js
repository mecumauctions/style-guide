// Tabs Component Interaction

var $tabList = $('.tab__list'),
    $tabItem = $('.tab__item'),
    $tabLink = $('.tab__link'),
    $tabLinkActive = 'tab__link--active';

$(document).ready(function () {
  $tabItem.first($tabItem).children($tabLink).addClass($tabLinkActive);
});

$tabLink.on('click', function (event) {
  event.preventDefault();

  $tabLink.removeClass($tabLinkActive);
  $(this).addClass($tabLinkActive);

});