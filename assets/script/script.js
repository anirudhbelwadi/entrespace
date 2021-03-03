function showAboutDropdown() {
    document.getElementById("nav_about_dropdown").style.visibility = "visible";
}
const $dropdown = $('.nav_about_dropdown');
$(document).mouseup(e => {
    if (!$dropdown.is(e.target) // if the target of the click isn't the container...
        && $dropdown.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $dropdown.removeClass('nav_about_dropdown_visible');
        $dropdown.removeClass('nav_about_dropdown_mobile');
    }
});

$('.nav_about').on('click', () => {
    $dropdown.toggleClass('nav_about_dropdown_visible');
});
$('.nav_button').on('click', () => {
    $dropdown.toggleClass('nav_about_dropdown_mobile');
});


