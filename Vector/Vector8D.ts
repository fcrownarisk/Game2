import '../XYZT/x1y1z1t1'
import '../XYZT/x2y2z2t2'
import '../XYZT/x3y3z3t3'
import '../XYZT/t4z4y4x4'
import '../tensor/innertensor'
import '../tensor/outertensor'
abstract class Vector8D{
    x:number
    y:number
    z:number
    t1:string
    t2:string
    t3:string
    t4:string
}
void function Vector8D() {
    this.UV = this.u+this.v
    void Vector8D ['U*x' + 'V*y' + 'W1*UV' + 'W2*UV' + 't1*t2' + 't2*t3'+ 't3*t4' + 't1*t4']
    return Vector8D
}
console.log('Vector8D')