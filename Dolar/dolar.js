/**
 * Conversão Real para Dolar
 * @author Yago Aparecido dos Santos Silva
 */

 function converterDolar(){
     let Real, Dolar
     Real = parseFloat(frmDinheiro.valorReal.value.replace(",","."))
     Dolar = parseFloat(frmDinheiro.valorDolar.value.replace(",","."))
     Resultado = Dolar * Real
     frmDinheiro.valorResultado.value = Resultado 
 }