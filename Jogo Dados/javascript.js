//VARIAVEIS
var player1 = 10;
var player2 = 10;
var nickname1;
var nickname2;

//faz aparecer a tela de cadastro
function Registrar() {
    document.getElementById('cadastro').style.display = 'block';
}
//cadastro
function cadastrar() {
    if (document.getElementById('play1').checked == true) {
        nickname1 = document.getElementById('nick1').value;
        document.getElementById('jog1').value = nickname1;
        document.getElementById('jog1').innerHTML = nickname1;
    } else {
        nickname2 = document.getElementById('nick1').value;
        document.getElementById('jog2').value = nickname2;
        document.getElementById('jog2').innerHTML = nickname2;
        document.getElementById('cadastro').style.display = 'none';
    }
}
//botao reset
function reiniciar() {
    //limpar todos os dados
    document.getElementById('result').innerHTML = '';
    document.getElementById('jog1').innerHTML = 'Jogador 1';
    document.getElementById('jog1').value = undefined;
    document.getElementById('jog2').innerHTML = 'Jogador 2';
    document.getElementById('jog2').value = undefined;
    player1 = 10;
    document.getElementById('totalp').innerHTML = 10;
    player2 = 10;
    document.getElementById('totalp2').innerHTML = 10;
    document.getElementById('jogarId').style.display = 'block';
    document.getElementById('regisId').style.display = 'block';
}
//botao jogar
function jogar() {
    //VARIAVEIS
    var numero = Math.floor(Math.random() * 6 + 1);
    var numero2 = Math.floor(Math.random() * 6 + 1);
    var nickone = document.getElementById('jog1').value;
    var nicktwo = document.getElementById('jog2').value;
    var total1 = document.getElementById('totalp').value;
    var total2 = document.getElementById('totalp').value;

    if (document.getElementById('jog1').value == undefined ) {
        alert('CADASTRE SE ANTES DE JOGAR!!!!!!!');
    } else {
     //sistema de aleatoriadade para as imagens do jogador 1
        if (numero === 1) {
            document.getElementById("dado1").src = "imagem/dado1.png";
        } else if (numero === 2) {
            document.getElementById('dado1').src = "imagem/dado2.png";
        } else if (numero === 3) {
            document.getElementById('dado1').src = "imagem/dado3.png";
        } else if (numero === 4) {
            document.getElementById('dado1').src = "imagem/dado4.png";
        } else if (numero === 5) {
            document.getElementById('dado1').src = "imagem/dado5.png";
        } else if (numero === 6) {
            document.getElementById('dado1').src = "imagem/dado6.png";
        }
        //sistema de aleatoriadade para as imagens do jogador 2
        if (numero2 === 1) {
            document.getElementById('dado2').src = "imagem/dado1.png";
        } else if (numero2 === 2) {
            document.getElementById('dado2').src = "imagem/dado2.png";
        } else if (numero2 === 3) {
            document.getElementById('dado2').src = "imagem/dado3.png";
        } else if (numero2 === 4) {
            document.getElementById('dado2').src = "imagem/dado4.png";
        } else if (numero2 === 5) {
            document.getElementById('dado2').src = "imagem/dado5.png";
        } else if (numero2 === 6) {
            document.getElementById('dado2').src = "imagem/dado6.png";
        }
        //total de pontos
        if (numero > numero2) {
            document.getElementById('result').innerHTML = nickone + ' ganhou!';
            document.getElementById('totalp').innerHTML = player1++;
            document.getElementById('totalp2').innerHTML = player2--;
        } else if (numero2 > numero) {
            document.getElementById('result').innerHTML = nicktwo + ' ganhou!';
            document.getElementById('totalp2').innerHTML = player2++;
            document.getElementById('totalp').innerHTML = player1--;
        } else {
            document.getElementById('result').innerHTML = 'Empate!';
        }
    }
    //mensagem de vitoria
    if (player2 == -1) {
        document.getElementById('result').innerHTML = nickname1 + ' GANHOU!!! PARABENS CAMPEÃO!!';
        document.getElementById('jogarId').style.display = 'none';
        document.getElementById('regisId').style.display = 'none';
    } else if (player1 == -1) {
        document.getElementById('result').innerHTML = nickname2 + ' GANHOU!!! PARABENS CAMPEÃO!!';
        document.getElementById('jogarId').style.display = 'none';
        document.getElementById('regisId').style.display = 'none';
    }
}

//'Jogador 1' || 'Jogador 2'
