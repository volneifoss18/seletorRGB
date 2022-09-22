function gerarCor(){
        
    var rangeR = document.querySelector('#red');
    var valorR = document.querySelector('.red');
    var rangeG = document.querySelector('#green');
    var valorG = document.querySelector('.green');
    var rangeB = document.querySelector('#blue');
    var valorB = document.querySelector('.blue');
    var rangeB = document.querySelector('#blue');
    var valorB = document.querySelector('.blue');

    rangeR.addEventListener('input', function(){valorR.textContent = this.value});
    rangeG.addEventListener('input', function(){valorG.textContent = this.value});
    rangeB.addEventListener('input', function(){valorB.textContent = this.value});

    var cor = "rgb("+ rangeR.value +", "+ rangeG.value +","+ rangeB.value +")";
    document.getElementById('mostrador').style.background = cor;

}