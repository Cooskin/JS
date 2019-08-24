window.onload = function() {

    var oUl = document.getElementById('list');
    // oLi = document.getElementById('lis');

    var aH2 = document.getElementsByTagName('h2');
    var aUl = oUl.getElementsByTagName('ul');


    for (let i = 0; i < aH2.length; i++) {

        aH2[i].onclick = function() {

            for (let i = 0; i < aUl.length; i++) {

                aUl[i].style.display = 'none';
                aH2[i].className = '';

            }

            /* aUl[i].style.display = 'block';
            this.className = 'h2'; */
            if (this.className == '') {
                aUl[i].style.display = 'block';
                this.className = 'h2';
            } else {
                aUl[i].style.display = 'none';
                this.className = '';
            }

        }

    }

}