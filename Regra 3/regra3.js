/**
 * Regra de 3
 * @author Yago Aparecido dos Santos Silva
 */

 function calcularValor(){
        let x,y,valor
        x = parseFloat(frmregra3.txtX.value.replace(",","."))
        y = parseFloat(frmregra3.txtY.value.replace(",","."))
        valor = (x * y) /100
        frmregra3.txtresultado.value = valor.toFixed(2)
 }