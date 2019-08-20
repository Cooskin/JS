window.onload = function() {
    var aInp = document.getElementsByTagName('input');

    aInp[0].onclick = function() {

        for (var i = 0; i < 10; i++) {
            document.body.innerHTML += '<div>' + i + '</div>'
        }
    }
}