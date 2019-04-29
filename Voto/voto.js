/**
 * Voto Obrigatorio
 * @author Yago Aparecido dos Santos Silva
 */
function verificarObrigatoriedade()
let idade 
idade = parseInt(frmEleitor.txtIdade.value)
if (idade < 16) {
    frmEleitor.txtStatus.value = "PROIBIDO VOTAR"
}
else if ()