window.onload = function () {
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oImg = document.getElementById('img1');
    var oSpan1 = document.getElementById('span1');
    var oSpan2 = document.getElementById('span2');
    var oImg1 = document.getElementById('img2');
    var oText = document.getElementById('text');
    var oBtn = document.getElementById('btn');

    var g1 = '../L_2/img/img_1.gif';
    var g2 = '../L_2/img/img_2.gif';
    var a = true;

    oImg1.onclick = function () {
        if ( a == true)  {
            oImg1.src = g2;
            a = false;
            oSpan2.className = 'span_2';

        }else {
            oImg1.src = g1;
            a = true;
            oSpan1.className = 'span_1';

        }
    };

    oBtn.onclick = function () {
        if ( oSpan1.className == 'span_1'){
            // oImg.className = 'fl';
            oSpan1.className = 'span_1';
            // oImg.src = g1;
            oSpan1.innerHTML += '<img src="../L_2/img/img_1.gif" alt="">' + oText.value + '<br>';
            oText.value = '';
        }else if( oSpan2.className == 'span_2' ){
            oDiv1.className = 'fr';
            oSpan2.className = 'span_2';
            // oImg.src = g1;
            oSpan2.innerHTML +=  oText.value + '<img src="../L_2/img/img_2.gif" alt="">' + '<br>';
            oText.value = '';
        }else if ( oText.value == '' ){
            alert('写点什么吧')
        }
    };



};