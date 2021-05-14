function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')  //imagem
    img.setAttribute('class', 'imagens')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Confira os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -  Number(fano.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = ''
            if (idade <= 10) {   //ciança
                img.setAttribute('src', 'mcrianca.png')
                genero = `um menino`
            } else if (idade <= 21) {   //adolecente
                img.setAttribute('src', 'madolecente.png')
                genero = 'um adolecente'
            } else if (idade <= 50) {   //adulto
                img.setAttribute('src', 'madulto.png')
                genero = 'um adulta'
            } else {   //idoso
                img.setAttribute('src', 'midoso.png')
                genero = 'um idosa'
            }

        } else if (fsex[1].checked){
            genero = ''
            if (idade <= 10) {   //criança
                img.setAttribute('src', 'fcrianca.png')
                genero = 'uma menina'
            } else if (idade <= 21) {   //adolecente
                img.setAttribute('src', 'fadolecente.png')
                genero = 'uma adolecente'
            } else if (idade <= 50) {   //adulto
                img.setAttribute('src', 'fadulta.png')
                genero = 'uma adulta'
            } else {   //idoso
                img.setAttribute('src', 'fidoso.png')
                genero = 'uma idosa'
            }
        }
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}