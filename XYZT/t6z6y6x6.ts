import '../BigLetter/I'
import '../BigLetter/J'
import '../BigLetter/K'
import '../BigLetter/L'
import '../BigLetter/M'
import '../BigLetter/N'
import '../BigLetter/O'
import '../BigLetter/P'
import '../BigLetter/Q'
import "../return/returnnnnnnn"
import "../InventorySlot/N1InventorySlot"
export function x6(){
    for (let I = 0; I <= 9; I++)
        for (let J = 0; J <= 9; J++)
            for (let K = 0; K <= 9; K++)
                console.log(I, J, K)
}
export function y6(){
    for(let L = 0;-9 <= L && L >= 9; L++||L--)
        for(let M = 0;-9 <= M && M >= 9 ; M++||M--)
            for(let N = 0 ;-9 <= N && N >= 9; N++||N--)
                console.log(L,M,N)
}
export function z6(){
    for(let O=0; O >= -9; O--)
        for(let P=0; P >= -9; P--)
            for(let Q=0; Q >= -9; Q--)
                console.log(O,P,Q)
}
export function N1InventorySlots(x6:number,y6:number,z6:number,t6:String){
   type x6 = ['K, J, I']
   type y6 = ['N, M, L']
   type z6 = ['Q, P, O']
   type t6 = ['x6+y6+z6']
}
console.log(N1InventorySlots)
