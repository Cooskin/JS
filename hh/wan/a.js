window.onload = function() {

    var oUl = document.getElementById('list');
    // oLi = document.getElementById('lis');

    var aH2 = document.getElementsByTagName('h2');
    var aUl = oUl.getElementsByTagName('ul');


    for (let i = 0; i < aH2.length; i++) {

        aH2[i].key = true;
        aUl[i].style.display = 'none';
        aH2[i].className = '';

        aH2[i].onclick = function() {

            for (let i = 0; i < aUl.length; i++) {


                if (aUl[i].style.display == 'none') {
                    aH2[i].key = true;
                } else {
                    aH2[i].key = false;
                }

                aUl[i].style.display = 'none';
                aH2[i].className = '';
            }

            if (this.key == true) {
                aUl[i].style.display = 'block';
                this.className = 'h2';
                this.key = false;
            } else {
                aUl[i].style.display = 'none';
                this.className = '';
                this.key = true;
            }

        }

    }


    var aLi = null;
    var arrLi = [];

    for (let i = 0; i < aUl.length; i++) {
        aLi = aUl[i].getElementsByTagName('li');
        for (let j = 0; j < aLi.length; j++) {
            arrLi.push(aLi[j]);
        }

    }

    for (let i = 0; i < arrLi.length; i++) {

        arrLi[i].index = true;

        arrLi[i].onclick = function() {



            for (var i = 0; i < arrLi.length; i++) {

                if (this.className == '') {
                    arrLi[i].index = true;
                } else {
                    arrLi[i].index = false;
                }

                arrLi[i].className = '';

            }


            if (this.index == true) {
                this.className = 'color';
            } else {
                this.className = '';
            }
        }

    }


}