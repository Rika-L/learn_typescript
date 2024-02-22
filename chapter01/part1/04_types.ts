//object表示一个js对象
let a: object;
a = {};
//加问号表示属性可选
let b: { name: string, age?: number };
b = {name: 'su'};
//{}用来指定对象中包含哪些属性

let c: { name: string, [propName: string]: any };
c = {name: 'zhu', age: 18}

let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2;
}

//表示字符串数组
let e: string[];
e = ['a', 'b']

//表示数值的数组
let f: number[];

let g: Array<number | string>;

//元组：固定长度的数组
let h: [string, string, string | number]
h = ['sda', 'asd', 123]

//enum 枚举
enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender };
i = {
    name: '孙悟空',
    gender: Gender.Male
}

//&表示同时
// let j: string & number;没有意义
let j: { name: string } & { age: number };

type myType = 1 | 2 | 3 | 4 | 5;
//类型的别名
let k: myType;
let l: 1 | 2 | 3 | 4 | 5

k = 1;