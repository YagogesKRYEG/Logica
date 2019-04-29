/**
 * Churrasculadora
 * @author Yago Aparecido dos Santos Silva
 */

function calcularResultado(){
    let KGCarne, Cerveja, Refrigerante, Homens, Mulheres, Criancas, TotalCarne, TotalCerveja, TotalRefrigerante, DivisaoHeM
    Criancas = parseFloat(frmChurrasco.valorCriancas.value.replace(",","."))
    Mulheres = parseFloat(frmChurrasco.valorMulheres.value.replace(",","."))
    Homens = parseFloat(frmChurrasco.valorHomens.value.replace(",","."))
    KGCarne = parseFloat(frmChurrasco.valorKGCarne.value.replace(",","."))
    Refrigerante = parseFloat(frmChurrasco.valorRefrigerante.value.replace(",","."))
    Cerveja = parseFloat(frmChurrasco.valorCerveja.value.replace(",","."))
    TotalCarne = parseFloat(frmChurrasco.valorTotalCarne.value.replace(",","."))
    TotalCerveja = parseFloat(frmChurrasco.valorTotalCerveja.value.replace(",","."))
    TotalRefri = parseFloat(frmChurrasco.valorTotalRefrigerante.value.replace(",","."))
    DivisaoHeM = parseFloat(frmChurrasco.valorHomemMulher.value.replace(",","."))
    Total = (Cerveja * 12) * Homens + (Cerveja * 4) * Mulheres + (Cerveja * 0) * Criancas + ((KGCarne * 30) / 100) * Homens + ((KGCarne * 30) / 100) * Mulheres + ((KGCarne * 10) / 100) * Criancas + (Refri * 0) * Homens + (Refri * 4) * Mulheres + (Refri * 4) * Criancas
   frmChurrasco.valorTotal.value = Total
   TotalCerveja - (Cerveja * 12) * Homens + (Cerveja * 4) * Mulheres + (Cerveja * 0) * Criancas
   TotalCarne = ((KGCarne * 30) / 100) * Mulheres +((KGCarne * 10) / 100) * Criancas
   TotalRefri = (Refrigerante * 0) * Homens +(Refrigerante * 4) * Mulheres + (Refrigerante * 4) * Criancas
   frmChurrasco.valorTotalCarne.value = TotalCarne
   frmChurrasco.valorTotalCerveja.value = TotalCerveja
   frmChurrasco.valorTotalRefrigerante.value = TotalRefrigerante
   DivisaoHeM = Total / (Homens + Mulheres)
   frmChurrasco.valorHomemMulher.value = DivisaoHeM 
}