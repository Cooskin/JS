window.onload = function() {

    var oTab = document.getElementById('tab');
    var TabLi = oTab.getElementsByTagName('li');
    var oCon = document.getElementById('con');
    var aUl = oCon.getElementsByTagName('ul');

    for (var i = 0; i < TabLi.length; i++) {

        TabLi[i].index = i;

        TabLi[i].onclick = function() {

            for (var i = 0; i < TabLi.length; i++) {
                TabLi[i].className = '';
                aUl[i].style.display = 'none';
            }

            this.className = 'tab_activ';
            aUl[this.index].style.display = 'block';

        }

    }
    fn1('con1')
    fn1('con2')
    fn1('con3')
}

function fn1(id) {
    var oCon1 = document.getElementById(id);
    // var oCon2 = document.getElementById('con2');
    // var oCon3 = document.getElementById('con3');
    var aLi = oCon1.getElementsByTagName('li');
    // var aLi2 = oCon2.getElementsByTagName('li');
    // var aLi3 = oCon3.getElementsByTagName('li');

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].className = '';
                }
                this.className = 'activ';
            }
            // aLi[i].onmouseout = function() {

        //         this.className = '';

        //         this.onclick = function() {
        //             this.className = 'activ';
        //         }

        //         // this.className = 'activ';
        //     }
        // li.className = 'activ';
    }
}