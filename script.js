function entrar(obj) {
    obj.style.boxShadow = '3px 3px 3px rgba(149, 100, 73, .5)';
    obj.style.borderRadius = '5px';
}
function sair(obj) {
    obj.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0)'
    obj.style.borderRadius = '10px';
}


function contexto() {
    var divInfo = document.getElementById('info')
    divInfo.style.background = 'rgba(107, 112, 92, 1)'
    divInfo.style.width = '80%'
    divInfo.style.maxWidth = '800px'
    divInfo.style.height = '50%'
    divInfo.style.maxHeight = '250px'
    divInfo.style.top = '10%'
    divInfo.style.right = '3%'
    divInfo.style.borderRadius = '10px'

    var p1 = 'Você terá um total de 6 dicas para acertar a resposta. Começa o jogo com 5 pontos e, a cada dica, perde 1 ponto. Os pontos restantes vão ser utilizados como saldo para ganhar presentes bônus. Ou seja, além do evento principal, que é o principal objetivo, também poderá ganhar mais 5 mini-surpresas (ou nenhuma se não acertar KKKK). <p>Você vai ter uma dica inicial (falada pessoalmente) e, se acertar nela, ganhará os 5 bônus.  Se não acertar, vai precisa abrir uma dica e isso já diminui 1 ponto e assim sucessivamente. Você tem direito a 1 palpite por dica.<br><strong>Boa sorte!</strong></p>'
    var texto1 = document.getElementById('p1')
    texto1.innerHTML = p1
    var img = document.getElementById('infoimg')
    img.innerHTML = ''
}

function branco() {
    var divInfo = document.getElementById('info')
    divInfo
    divInfo.style.background = 'white'
    divInfo.style.width = '2vw'
    divInfo.style.height = '2vw'
    divInfo.style.top = '2.5vw'
    divInfo.style.right = '1vw'
    divInfo.style.borderRadius = '20px'
    var texto1 = document.getElementById('p1')
    texto1.innerHTML = ''
}

var soma = Number('5')
var verificador = Number(5)
var parag = document.getElementById('um')

var correta = 'errada'
var capturado = ''
lista = ['correta']

function sumir(obj) {
    if (verificador >= soma || verificador == 5) {
        if (capturado == 'Liberado') {
            obj.innerHTML = ''
            obj.style.background = 'rgba(0,0,0,0)'
            saldo.innerHTML = `<strong>Saldo<br></strong> ${soma}`
        } else {
            window.alert('Faça um palpite!')
        }
    } else if (soma >0) {
        obj.innerHTML = ''
        obj.style.background = 'rgba(0,0,0,0)'
        soma -= 1
        var saldo = document.getElementById('saldo')
        saldo.innerHTML = `Dicas<br> ${soma}`
    }
}


saldo.innerHTML = `Dicas<br> ${soma}`
function capturar() {
    capturado = document.getElementById('inp').value
    for (let pos = 0; pos < lista.length; pos++) {
        if  (capturado == lista[pos]) {
            correta = lista[pos]
        } 
    } if (capturado == correta) {
        window.alert('Você acertou!')
        saldo.innerHTML = `<strong>Saldo<br></strong> ${soma}`
    } else if (verificador<0) {
        window.alert('Você já utilizou todas as dicas. Perdeu!')
    } else {
        if (verificador >= soma) {    
            parag.innerHTML += `${capturado}<br>` //- Saldo ${soma} = ${verificador}<br> 
            verificador -= 1
        } else {
            window.alert('Abra uma dica!')
        }
    }
    
}


var apagar = document.getElementById('apagar')
apagar.innerHTML = ``

function bonus(obj) {
    if (capturado == correta || capturado == 'Liberado') {
        if (soma > 0) {
            let a = obj.id
            switch (a) {
                case 'd31':
                    obj.innerHTML = 'Primeiro Bônus'
                    break
                case 'd32':
                    obj.innerHTML = 'Segundo Bônus'
                    break
                case 'd33':
                    obj.innerHTML = 'Terceiro Bônus'
                    break
                case 'd34':
                    obj.innerHTML = 'Quarto Bônus'
                    break
                case 'd35':
                    obj.innerHTML = 'Quinto Bônus'
                    break
            }
            soma -= 1
            saldo.innerHTML = `<strong>Saldo</strong><br> ${soma}`
            verificador = soma - 1
        } else {
            window.alert('Você já utilizou todos os seus saldos!')
        }
    } else {
        window.alert('Você ainda não acertou!')
    }
}


