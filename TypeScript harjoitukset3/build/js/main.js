"use strict";
var _a;
const c1 = +'333';
// const c1 : number = Number('333');
// const c1 : number = parseInt('333', 10);
console.log(c1);
//const c2 : string = ''+888;
const c2 = String(888);
console.log(c2);
//const c3 : boolean = 1 && 1; //not allowed
const c3 = Boolean(1); // true
// const c3 : boolean = Boolean(0); // false
console.log(c3);
(_a = document.querySelector('.out-1')) === null || _a === void 0 ? void 0 : _a.textContent;
String(3);
const n5 = +document.querySelector('out-2').textContent;
console.log(n5, typeof n5);
const a1 = 'Hello TS';
document.querySelector('.out-1').textContent = a1;
const a2 = document.querySelector('out-2').textContent;
console.log(a2);
const a3 = +document.querySelector('out-3').textContent;
console.log(a3);
// getting value from input
// 1 option
// const i5 = (<HTMLInputElement>document.querySelector('.i-5')).value;
// console.log(i5);
// 2 option
// const i5 = <HTMLInputElement>document.querySelector('.i-5');
// console.log(i5.value);
// 3 option
const i5 = document.querySelector('.i-5');
console.log(i5.value);
const i6 = document.querySelector('.i-6');
console.log(+i6.value, typeof i6);
// i6.value = 88; not possible
i6.value = '88';
// checkbox
const checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
    {
        console.log('checked');
    }
}
// radiobutton
//const r = document.querySelector('input[type="radio"]');
const r = document.querySelector('input[name="r"]:checked');
console.log(r.value);
// select value
// const select = document.querySelector('select');
// console.log(select.value);
const select = document.querySelector('.s-1');
console.log(select.value);
select.value = 'aaa';
// if element doesn't exist in the HTML document
// 1 option
const i8 = document.querySelector('.i-8');
console.log(i8);
// 1 option
console.log(i8 === null || i8 === void 0 ? void 0 : i8.value);
// 2 option
if (i8 !== null) {
    console.log(i8.value);
}
// GET, SET
class T01 {
    constructor() {
        this._n1 = 33;
        this._n2 = 55;
    }
    get n1() {
        return this._n1;
    }
    get n2() {
        return this._n2;
    }
    set n1(a) {
        this._n1 = a;
    }
}
const obj1 = new T01();
console.log(obj1.n1); //33
obj1.n1 = 777;
console.log(obj1.n1); // 777
class T02 extends T01 {
}
;
const obj2 = new T02;
console.log(obj2.n1); // 33
obj2.n1 = 999;
console.log(obj2.n1); // 999
// class T02 {
//     private _n1 : number = 33;
//     private _n2 : number = 55;
//     public access : boolean = false;
//     constructor (a : boolean) {
//         this.access = a;
//     }
//     public get n1 () : number {
//         return (this.access) ? this._n1 : 0;
//     }
// }
// const obj1 = new T02(true); 
// console.log(obj1.n1); // input 33 
// const obj1 = new T02(false); 
// console.log(obj1.n1); // input 0 
