function tabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('select')
//se o número for zero mostra alerta para digitar um número
    if(num.value.length == 0){
        alert('Digite um número!')
    } else {
        let n = Number(num.value)
        let c = Number(1)
        tab.innerHTML = '' //zerando a tabuada antes de mostrar outro valor
        //enquanto o valor for menor ou igual a 10 crie um option e multiplique  
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}

const btn = document.getElementById('button')
btn.addEventListener('click', tabuada)