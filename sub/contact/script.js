function resizeIframe() {
    var iframe = document.getElementById("form-iframe");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    iframe.style.width = screenWidth + "px";
    iframe.style.height = screenHeight + "px";
}
window.onload = resizeIframe;
window.onresize = resizeIframe;
