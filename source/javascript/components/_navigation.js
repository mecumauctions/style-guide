// Page Navigation Interactions

var $navbarToggle = $('.navbar__link--toggle'),
    $navbarItem = $('.navbar__item'),
    $submenu = $('.navbar__submenu');

$navbarToggle.on('click', function (event) {

  var $navbarItemActive = 'navbar__item--active',
      $submenuActive = 'navbar__submenu--active';

  event.preventDefault();

  $(this).parent($navbarItem).toggleClass($navbarItemActive);
  $(this).siblings($submenu).toggleClass($submenuActive);

  if($navbarItem.hasClass($navbarItemActive)) {
    $(this).siblings($submenu).attr('aria-hidden', 'false');
  } else {
    $(this).siblings($submenu).attr('aria-hidden', 'true');
  };

});