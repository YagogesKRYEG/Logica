/**
 *  Raio da Circunferencia
 * @author Yago Aparecido dos Santos Silva
 */

 function calcularCirc(){
     let Raio
     Raio = parseFloat(frmRaio.valorRaio.value.replace(",","."))
     Circunferencia = 2 * Math.PI * Raio
     frmRaio.valorResultado.value = Circunferencia
 }