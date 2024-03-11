$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    // Handle the click event on sidebar links
    $('.list-unstyled.components li a').on('click', function () {
        $('.list-unstyled.components li').removeClass('active'); // Remove 'active' class from all items
        $(this).closest('li').addClass('active'); // Add 'active' class to the clicked item
    });

    // Handle the sidebar toggle button click event
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'none') ? 'block' : 'none';
}