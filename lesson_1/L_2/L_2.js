window.onload = function () {
    var oDiv = document.getElementById('div1');
    var oText = document.getElementById('text');
    var oBtn = document.getElementById('btn');
    var oSpan = document.getElementById('span1');

    oBtn.onclick = function () {
        var msg = oText.value;
        sendMsgA(msg)
    }
};

function sendMsgA(msg) {
    var oDiv = document.getElementById('div1');
    var msgA = document.createElement("div");
    msgA.className = "a";

    var a = "./img/img_1.gif";
    var spr = ' <img src="'+ a +'"> <span>'+msg+' </span> ';
    msgA.innerHTML = spr;
    oDiv.appendChild(msgA)
}