jQuery(window).on('load', function() {
    jQuery('#loader-bg').hide();
    jQuery('header').load('/ORIZIN_Agent/header_menu.html');
});
$( function() {
    $( 'img.lazy' ).lazyload( {
        effect: 'fadeIn',
	effect_speed: 3000,
	skip_invisible: true,
	placeholder: '/ORIZIN_Agent/icon/ORIZIN_Agent-2_Oのみ_透明.png',
    });
});