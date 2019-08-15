window.onload = function () {
    var aDiv = document.getElementsByTagName('div');
    var oBtn = document.getElementById('btn1');

    oBtn.onclick = function () {

        for (var i = 0; i < 11; i++){

            document.body.innerHTML += '<div>' + i + '</div>';

        }

        let len = aDiv.length;

        for (var i = 0; i < aDiv.length; i++) {

            if (i < 6) {
                aDiv[i].style.left = i * 100 + 'px';
                aDiv[i].style.top = i * 100 + 'px';
            } else{
                aDiv[i].style.left = i * 100 + 'px';
                aDiv[i].style.top = (len -1) * 100 - i * 100 + 'px';
            }

        }

    }

}