window.onload = function() {
    var oDiv = document.getElementById('div1');
    var oText = document.getElementById('text');
    var oBtn = document.getElementById('btn');
    var oImg = document.getElementById('img');
    var ali = document.getElementsByTagName('li');
    var ul = document.getElementById('list');
    // var con = document.getElementById('con_l');
    // var img = document.getElementById('img_l');


    var url = true;

    oImg.style.background = 'url(./img/img_1.gif)';

    // oSpan.style.background = 'url(./img/img_1.gif)';
    oImg.onclick = function() {
        if (url) {
            oImg.style.background = 'url(./img/img_2.gif)';
            url = false;
        } else {
            oImg.style.background = 'url(./img/img_1.gif)';
            url = true;
        }
    }

    oBtn.onclick = function() {

        if (oText.value == "") {
            alert('请输入后再发送')
            return false;
        }



        if (url) {

            ul.innerHTML += '<li class="fl">' + '<div class="background_l"></div>' + '<div class="con_l">' + oText.value + '</div>' + '</li>' + '<br/>';
            oText.value = "";
        } else {
            ul.innerHTML += '<li class="fr">' + '<div class="background_r"></div>' + '<div class="con_l">' + oText.value + '</div>' + '</li>' + '<br/>';
            oText.value = "";
        }


    }






    /*
    oBtn.onclick = function () {
        var msg = oText.value;
        sendMsgA(msg)
    }
    */
};
/*
function sendMsgA(msg) {
    var oDiv = document.getElementById('div1');
    var msgA = document.createElement("div");
    msgA.className = "a";

    var a = "./img/img_1.gif";
    var spr = ' <img src="'+ a +'"> <span>'+msg+' </span> ';
    msgA.innerHTML = spr;
    oDiv.appendChild(msgA)
}
*/