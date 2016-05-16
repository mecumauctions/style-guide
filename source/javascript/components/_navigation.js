// Page Navigation Interactions

var $navbarToggle = $('.navbar__link--toggle'),
    $navbarItem = $('.navbar__item'),
    $submenu = $('.navbar__submenu');

$navbarToggle.on('click', function (event) {

  var $navbarItemActive = 'navbar__item--active',
      $submenuActive = 'navbar__submenu--active',
      $navigationIcon = $('.navbar__link--navigation-icon');

  event.preventDefault();

  $navbarItem.removeClass($navbarItemActive);
  $(this).parent($navbarItem).addClass($navbarItemActive);

  $submenu.removeClass($submenuActive);
  $(this).siblings($submenu).addClass($submenuActive);

  $navigationIcon.removeClass('navbar__link--navigation-icon--active');
  $(this).closest($navigationIcon).addClass('navbar__link--navigation-icon--active');

  if($navbarItem.hasClass($navbarItemActive)) {
    $(this).siblings($submenu).attr('aria-hidden', 'false');
  } else {
    $(this).siblings($submenu).attr('aria-hidden', 'true');
  };

});