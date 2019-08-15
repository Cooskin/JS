window.onload = function () {
    var url;
    url = ['../img/1.jpg','../img/2.jpg', '../img/3.jpg', '../img/4.jpg'];
    var text;
    text = ['第一张', '第二张', '第三张', '第四张'];

    var oDiv = document.getElementById('div1');
    var oSpan = document.getElementById('span1');
    var oImg = document.getElementById('img1');
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var oP = document.getElementById('p1');
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');

    var num = 0;




    function on() {
        oSpan.innerHTML = num + 1 + '/' + url.length;
        oImg.src = url[num];
        oP.innerHTML = text[num];
    }
    on ();


    function up() {
        num--;

        if ( num == -1 ){
            num=3;
        }

        on ();


    }

    function down() {
        num++;

        if ( num == url.length ){
            num=0;
        }

        on ();

    }

    a.onclick = up;

    b.onclick = down;

    oBtn1.onclick = function (){
        oBtn1.onclick = function () {
            a.onclick = up;
            b.onclick = down;
        };
    };

    oBtn2.onclick = function () {
        b.onclick = function () {
            num++;
            if( num == url.length ){
                num = 3;
                alert("已经是最后一张了!")
            }
            on();
        };

        a.onclick = function (){
            num--;
            if( num == -1 ){
                num = 0;
                alert("已经是第一张啦！")
            }
            on();
        };

    };


};