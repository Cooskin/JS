window.onload = function () {
    var aDiv = document.getElementsByTagName('div');
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function () {

        for ( var j =0; j < 10; j++) {
            document.body.innerHTML += '<div>' + j + '</div>';
        }
        for (var j =0;j<aDiv.length;j++) {
            if (j > 5) {
                for (j < aDiv.length;j++;) {
                    aDiv[j].style.left = j * 100 + 'px';
                    aDiv[j].style.top = j * 100 - 200 + 'px';
                }
            } else {
                for (j < aDiv.length;j++;) {
                    aDiv[j].style.top = j * 100 + 'px';
                }
            }
        }
    };

};