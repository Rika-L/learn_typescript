//也可以直接使用字面量进行类型声明
let a: 11;

//可以使用|连接多个类型
let b: "male" | "female"

//联合类型
let c: boolean | string;

//不建议使用any类型
//any类型的变量可以赋值给任意变量
//建议使用unknown
let e: unknown;
let s: string;

//unknown 实际上是一个类型安全的any，不能直接赋值给其他变量
if (typeof e === "string") {
    s = e;
}
// s = e;

//类型断言，告诉解析器变量的实际类型
s = e as string;
s = <string>e;

//void表示空，以函数为例，表示没有返回值
function fn(): void {

}

//never表示永远不会返回结果
function fn2(): never {
    throw new Error('报错了');
}