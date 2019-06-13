// document.write("hello");
window.onload = function () {
    var d = document.getElementById('div1');
    var ul = document.getElementById('ul');
    var btn = document.getElementById('btn');
    var li_2 = document.getElementById('li_2');
    var li_1 = document.getElementById('li_1');
    var b_1 = document.getElementById('background_1');
    var b_2 = document.getElementById('background_2');
    var b_3 = document.getElementById('background_3');
    var w_1 = document.getElementById('width_1');
    var w_2 = document.getElementById('width_2');
    var w_3 = document.getElementById('width_3');
    var h_1 = document.getElementById('height_1');
    var h_2 = document.getElementById('height_2');
    var h_3 = document.getElementById('height_3');

    btn.onclick = function () {
        ul.style.display = 'block';
    };
    li_2.onclick = function () {
        ul.style.display = 'none'
    };
    li_1.onclick = function () {
        d.style.background = '#ff0';
        d.style.width = '100px';
        d.style.height = '100px';
    };

    b_1.onclick = function () {
        d.style.background = 'red';
        ul.style.margin = 'auto auto'
    };
    b_2.onclick = function () {
        d.style.background = 'green'
    };
    b_3.onclick = function () {
        d.style.background = 'blue'
    };
    w_1.onclick = function () {
        d.style.width = '200px'
    };
    w_2.onclick = function () {
        d.style.width = '300px'
    };
    w_3.onclick = function () {
        d.style.width = '400px'
    };
    h_1.onclick = function () {
        d.style.height = '200px';
        ul.style.margin = 'auto auto'
    };
    h_2.onclick = function () {
        d.style.height = '300px';
        ul.style.margin = 'auto auto'
    };
    h_3.onclick = function () {
        d.style.height = '400px';
        ul.style.margin = 'auto auto'
    };
};