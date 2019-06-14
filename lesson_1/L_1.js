window.onload = function () {

    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oBtn3 = document.getElementById('btn3');
    var oP = document.getElementById('p1');
    var a = 16;
    var b = a;

    oBtn1.onclick = function () {
        a ++;
        oP.style.fontSize = a + 'px';
    };

    oBtn2.onclick = function () {
        a --;
        oP.style.fontSize = a + 'px';
    };

    oBtn3.onclick = function () {
        oP.style.fontSize = b + 'px';
        a = b;
    };
};


