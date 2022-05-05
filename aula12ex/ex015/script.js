function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //fano é formulario ano
    var res = document.querySelector('div#res') // tanto faz usar getElementById ou queryselector ( querySelector mais moderno)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'HOMEM'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebehomem.jpg')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-homemjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-homemadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-homemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'MULHER'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebemulher.jpg')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-mulherjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-mulheradulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

// Erro nas hora de mostrar as imagens (Verificar e Arrumar)