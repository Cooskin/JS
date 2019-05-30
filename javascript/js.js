// document.write("hello");
window.onload = function () {
    const d = document.getElementById('div1');
    const ul = document.getElementById('ul');
    const btn = document.getElementById('btn');
    const li_2 = document.getElementById('li_2');
    const li_1 = document.getElementById('li_1');
    const b_1 = document.getElementById('background_1');
    const b_2 = document.getElementById('background_2');
    const b_3 = document.getElementById('background_3');
    const w_1 = document.getElementById('width_1');
    const w_2 = document.getElementById('width_2');
    const w_3 = document.getElementById('width_3');
    const h_1 = document.getElementById('height_1');
    const h_2 = document.getElementById('height_2');
    const h_3 = document.getElementById('height_3');

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