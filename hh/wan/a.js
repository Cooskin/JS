window.onload = function() {

    var oUl = document.getElementById('list');
    // oLi = document.getElementById('lis');

    var aH2 = document.getElementsByTagName('h2'),
        aUl = oUl.getElementsByTagName('ul');


    for (let i = 0; i < aH2.length; i++) {

        aH2[i].key = true;

        aH2[i].onclick = function() {

            if (aH2[i].key == true) {
                aUl[i].style.display = 'block';
                this.style.backgroundImage = 'url(./img/ico2.gif)';
                this.key = false;
            } else {
                aUl[i].style.display = 'none';
                this.style.backgroundImage = 'url(./img/ico1.gif)';
                this.key = true;
            }

        }

    }

}