/**
 * Valor da Hora
 * @author Yago Aparecido dos Santos Silva
 */

function calcularGrana()
{
   let Salario, Preco, Carga, Hora
   Salario = parseFloat(frmValor.valorSalario.value.replace(",","."))
   Preco = parseFloat(frmValor.valorPreco.value.replace(",","."))
   Carga = parseFloat(frmValor.valorCarga.value.replace(",","."))
   Hora = (((Salario * 30) / 100) + ((Salario * 20) / 100) + Salario + Preco) / Carga
   frmValor.valorHora.value = Hora
} 