/**
 * Estudo do laço for - Tabuada completa
 * @author Yago Aparecido dos Santos Silva
 */

 
 let i = 1, j = 1 
 
 while (i < 11){
     document.write("<p> Tabuada do " + i + "</p>")
     i++
     while (j < 11){
        document.write("<p>" + i + " x " + j + " = "+ (i * j)+ "</p>")
     }
 }