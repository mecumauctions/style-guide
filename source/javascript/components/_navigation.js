// Page Navigation Interactions

var $navbarToggle = $('.site__navigation .navbar__link--toggle'),
    $navbarToggleExample = $('.page__navigation--example .navbar__link--toggle'),
    $navbarItem = $('.navbar__item'),
    $navbarItemExample = $('.page__navigation--example .navbar__item'),
    $submenu = $('.navbar__submenu'),
    $navbarItemActive = 'navbar__item--active',
    $submenuActive = 'navbar__submenu--active',
    $navigationIcon = $('.navbar__link--navigation-icon');


// Site Navigation
$navbarToggle.on('click', function (event) {

  event.preventDefault();
  event.stopPropagation();

  $(this).parent($navbarItem).toggleClass($navbarItemActive);
  $(this).siblings($submenu).toggleClass($submenuActive);

  if($navbarItem.hasClass($navbarItemActive)) {
    $(this).siblings($submenu).attr('aria-hidden', 'false');
  } else {
    $(this).siblings($submenu).attr('aria-hidden', 'true');
  };

});



// Module Navigation
$navbarToggleExample.on('click', function (event) {

  event.preventDefault();

  $navbarItemExample.removeClass($navbarItemActive);
  $(this).parent($navbarItemExample).addClass($navbarItemActive);

  $navigationIcon.removeClass('navbar__link--navigation-icon--active');
  $(this).closest($navigationIcon).addClass('navbar__link--navigation-icon--active');
});
