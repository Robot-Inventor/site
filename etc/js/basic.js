$(function(){
    jQuery("header").load("/etc/html/header_menu.min.html"),
    jQuery("footer").load("/etc/html/footer.min.html"),
    jQuery("#last_modified").load("/etc/js/last_modified.min.js"),
    echo.init({
        throttle:"0"
    });
});
