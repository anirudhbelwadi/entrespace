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

// Get startdet popup
const $cross1 = $('.get_started_cross_one');
const $cross2 = $('.get_started_cross_two');
$(document).mouseover(e => {
    if ((!$cross1.is(e.target) // if the target of the click isn't the container...
        && $cross1.has(e.target).length === 0)
        && (!$cross2.is(e.target)
            && $cross2.has(e.target).length === 0)) // ... nor a descendant of the container
    {
        $cross1.removeClass('get_started_cross_one_hover');
        $cross2.removeClass('get_started_cross_two_hover');
    }
})
$('.nav_link_get_started').on('click', () => {
    $('.get_started_background').show();
    $('.get_started_cross_one').show();
    $('.get_started_cross_two').show();
    $('.get_started_cross_one_hover').show();
    $('.get_started_cross_two_hover').show();
    $('.get_started_title').show();
    $('.get_started_investor_button').show();
    $('.get_started_entrepreneur_button').show();
});
$('.main_get_started').on('click', () => {
    $('.get_started_background').show();
    $('.get_started_cross_one').show();
    $('.get_started_cross_two').show();
    $('.get_started_cross_one_hover').show();
    $('.get_started_cross_two_hover').show();
    $('.get_started_title').show();
    $('.get_started_investor_button').show();
    $('.get_started_entrepreneur_button').show();
});
$('.get_started_cross_one').on('mouseover', () => {
    $('.get_started_cross_two').addClass('get_started_cross_two_hover');
    $('.get_started_cross_one').addClass('get_started_cross_one_hover');
});
$('.get_started_cross_two').on('mouseover', () => {
    $('.get_started_cross_two').addClass('get_started_cross_two_hover');
    $('.get_started_cross_one').addClass('get_started_cross_one_hover');
});
$('.get_started_cross_one').on('click', () => {
    $('.get_started_background').hide();
    $('.get_started_cross_one').hide();
    $('.get_started_cross_two').hide();
    $('.get_started_cross_one_hover').hide();
    $('.get_started_cross_two_hover').hide();
    $('.get_started_title').hide();
    $('.get_started_investor_button').hide();
    $('.get_started_entrepreneur_button').hide();
});
$('.get_started_cross_two').on('click', () => {
    $('.get_started_background').hide();
    $('.get_started_cross_one').hide();
    $('.get_started_cross_two').hide();
    $('.get_started_cross_one_hover').hide();
    $('.get_started_cross_two_hover').hide();
    $('.get_started_title').hide();
    $('.get_started_investor_button').hide();
    $('.get_started_entrepreneur_button').hide();
});

$(document).on('keydown', function (event) {
    if (event.key == "Escape") {
        $('.get_started_background').hide();
        $('.get_started_cross_one').hide();
        $('.get_started_cross_two').hide();
        $('.get_started_cross_one_hover').hide();
        $('.get_started_cross_two_hover').hide();
        $('.get_started_title').hide();
        $('.get_started_investor_button').hide();
        $('.get_started_entrepreneur_button').hide();
    }
});