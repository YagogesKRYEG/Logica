/**
 * Churrasculadora
 * @author Yago Aparecido dos Santos Silva
 */

function calcularTotal(){
        let KGCarne, Breja, Refri, Homens, Mulheres, Criancas, TotalCarne, TotalCerveja, TotalRefri, DivisaoHeM
        Criancas =      parseFloat(frmChurras.valorCriancas.value.replace(",","."))
        Mulheres =      parseFloat(frmChurras.valorMulheres.value.replace(",","."))
        Homens =        parseFloat(frmChurras.valorHomens.value.replace(",","."))
        KGCarne =       parseFloat(frmChurras.valorKGCarne.value.replace(",","."))
        Breja =         parseFloat(frmChurras.valorBrejas.value.replace(",","."))
        Refri =         parseFloat(frmChurras.valorRefri.value.replace(",","."))
        TotalCarne =    parseFloat(frmChurras.valorTotalCarne.value.replace(",","."))
        TotalCerveja =  parseFloat(frmChurras.valorTotalBrejas.value.replace(",","."))
        TotalRefri =    parseFloat(frmChurras.valorTotalRefrigerante.value.replace(",","."))
        DivisaoHeM =    parseFloat(frmChurras.valorHomemMulher.value.replace(",","."))
        Total = (Brejas * 12) * Homens + (Brejas * 4) * Mulheres + (Brejas * 0) * Criancas + ((KGCarne * 30) / 100) * Homens + ((KGCarne * 30) / 100) * Mulheres + ((KGCarne * 10) / 100) * Criancas + (Refri * 0) * Homens + (Refri * 4) * Mulheres + (Refri * 4) * Criancas
        frmChurras.valorTotal.value = Total
        TotalBrejas = (Brejas * 12) * Homens + (Brejas * 4) * Mulheres + (Brejas * 0) * Criancas
        TotalCarne = ((KGCarne * 30) / 100) * Homens + ((KGCarne * 30) / 100) * Mulheres + ((KGCarne * 10) / 100) * Criancas
        TotalRefri = (Refri * 0) * Homens + (Refri * 4) * Mulheres + (Refri * 4) * Criancas
        frmChurros.valorTotalCarne.value = TotalCarne
        frmChurros.valorTotalCerveja.value = TotalCerveja
        frmChurros.valorTotalRefrigerante.value = TotalRefri
        DivisaoHeM = Total / (Homens + Mulheres)
        frmChurros.valorHomemMulher.value = DivisaoHeM
}
