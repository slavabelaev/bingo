/* Set the width of the side navigation to 250px */
$('[data-toggle="sidenav"]').on('click', function(e) {
    e.preventDefault();
    var $this = $(this),
        sidenavElementId = $this.attr('href');

    $(sidenavElementId).toggleClass('show');
});

$('.sidenav').on('click', function(e) {
    if (e.target != this) return;

    var sidenavElement = $(this).closest('.sidenav');
    sidenavElement.removeClass('show');
});