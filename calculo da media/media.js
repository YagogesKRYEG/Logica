/**
 * Cálculo da media
 * @author Yago"Kryeg,KTR" Aparecido dos Santos Silva
 * */

function calcularMedia(){
    let nota1, nota2, media //variaveis do mesmo tipo
    /*
        parsefloat converte a String da caixa de texto
         do formulario para um tipo numerico
          float (numeros reais,casas decimais)
        int (numeros inteiros)
        .replace(",",".") (trocar um caractere por outro)
    */
    nota1 = parseFloat(frmMedia.txtNota1.value.replace(",","."))
    nota2 = parseFloat(frmMedia.txtNota2.value.replace(",","."))
    //tifixed(2) -> formatar o resultado em 2 casas decimais
    media = (nota1 + nota2)  / 2
    frmMedia.txtResultado.value = media.toFixed(2)
}