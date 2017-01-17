var viewporinfo = document.querySelector('.body > p');
var viewportwidth;
var viewportheight;

function showWindowSize() {
    if (typeof window.innerWidth != 'undefined')
    {
         viewportwidth = window.innerWidth,
         viewportheight = window.innerHeight;
    }

    viewporinfo.innerHTML = viewportwidth + ' * ' + viewportheight;
}