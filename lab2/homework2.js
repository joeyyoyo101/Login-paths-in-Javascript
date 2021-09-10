const { getSystemErrorMap } = require("util");

let a = 0
let b = 0
let c = 0
for (let index = 1; index <=2; index++) {
   for (let j = 1; j <= 4; j++) {
        for (let x = 1; x <= 8; x++) {
            if(x==2){
                a++;
            }else if(x==3){
                c++;
            }
            else{
                b++
            }      
        }
    }   
}
// console.log("I LOVE YOU :"+a);
// console.log("I MISS YOU :"+b);
// console.log("I NEED YOU : "+c);

array = [a++,b++,c++];
console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
while (("I LOVE YOU :"+a)[a]) {
    text += ("I LOVE YOU :"+a)[a];
    a++;
}

