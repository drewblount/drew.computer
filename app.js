$('.sidebar-stick').affix({
      offset: {
        top: 15
      }
});

/* changes active link status */
$('li > a').click(function() {
    $('li.active').removeClass('active');
    $(this).parent().addClass('active');
});
