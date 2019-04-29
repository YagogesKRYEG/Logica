/**
 * Ponto de Vendas
 * @author Yago Aparecido dos Santos Silva
 */

//variavel global
let valorTotalDesconto

function calcularDesconto(){
 let valorTotal, desconto
 valorTotal = parseFloat(frmPdv.txtTotal.value.replace(",","."))
 desconto = parseFloat(frmPdv.txtDesconto.value.replace(",","."))
 valorTotalDesconto = valorTotal - ((valorTotal * desconto) / 100)
 frmPdv.txtValorDesconto.value = valorTotalDesconto.toFixed(2)

}

function calcularTroco(){
 let valorPago, troco
 valorPago = parseFloat(frmPdv.txtValorPago.value.replace(",","."))
 troco = valorPago - valorTotalDesconto
 frmPdv.txtTroco.value = troco.toFixed(2)
    
     

}