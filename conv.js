/**
 * Conversão Temperatura
 * @author Yago Aparecido dos Santos Silva
 */

 function converterTemp(){
     let Celsius
     Celsius = parseFloat(frmTemp.valorCelsius.value.replace(",","."))
     Fahrenheit = Celsius * 1.8 + 32
     frmTemp.valorFahrenheit.value = Fahrenheit

 }