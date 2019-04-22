/**
 * Jogo de JOKENPÔ
 * @author Yago Aparecido dos Santos Silva
 */

 function play(){
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
        alert("Select an option") ;
    } else {
        //logica principal
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
        case 0:
            document.getElementById("PCIA").pc="pcpedra.png";
            break;
        case 1:
            document.getElementById("PCIA").pc="pcpapel.png";
            break;
        case 2:
            document.getElementById("PCIA").pc="pctesoura.png";
            break;
        }
        //verificação do vencedor ou declarar empate
        if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)){
            document.getElementById("placar").innerHTML="Empate";
        } else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) || (document.getElementById("tesoura").checked == true && sorteio == 1)){
            document.getElementById("placar").innerHTML="PlayerN1 Wins";
    } else {
        document.getElementById("placar").innerHTML="PCIA Wins";
    }
}
function reset(){
    document.getElementById("pc").src="pc.png";
    document.getElementById("placar").innerHTML="";
    }
}