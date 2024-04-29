let str1 = `aaa@bbb@ccc`
let arr1 = str1.split("@").join("!")
console.log(arr1)


let str2 = "HELLOWORLD"
let result2 = str2[0].toUpperCase() + str2.slice(1).toLowerCase()
console.log(result2)

let str3 = 'Hello, it is HTML'
let result3 = str3.split(',').join('').split('HTML').join('not JS')
console.log(result3)

let str4 = 'let a = "alex"'
let result4 = str4[0].toUpperCase() + str4.slice(1)
console.log(result4);

let a = `alex`;
let result5 = a.charAt(0).toUpperCase() +  a.slice(1);
console.log(result5)


let resultNum = String(Math.random()).split('.').join("")
console.log(resultNum)


let txt = "Lex Luter has a big suit"

console.log(
    txt.slice(txt.search("a"), txt.search("a") + "a".length).toUpperCase() + 
    txt.slice(txt.search("Lex"), txt.search("Lex") + "Lex".length).toLowerCase()
)
