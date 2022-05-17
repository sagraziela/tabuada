function calcular() {
    let num = document.getElementById('txtnum');
    let res = document.getElementById('res');
    let n = Number(num.value);
    
    if (num === '') {
        window.alert('[ERRO] Campo "número" vazio. Insira um número e tente novamente.')
    } else {
        res.innerHTML = ''
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c} `
            item.value = `item${c}` //Útil definir o value nesse caso para outras linguagens. No JS não faz mta diferença.
            res.appendChild(item)
            num.value = ''
    }
    }
}