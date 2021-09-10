// Data types
// 1.String
    //String example
        const name = 'Joey';  //เราสามารถใช้ Single quotes and double quotes at the same time
        const name_vit = "aj.Vith";  //เราสามารถใช้ Single quotes and doucle quotes at the same time
        const name_name = 'My name is "joey".' //we can use the double quotes inside the single quotes, but we cannot use the single quotes inside single quotes at the same time.
        const result =`The names are ${name} and ${name_vit}`;
//2.Number is the integer or a floating-point number
    //Number example
        let number1 = 5;
        const number2 = 10.568;
        const number3 = 2e5 //3*10^5
        number1 = 3/0;

        number1 =3/0;0
    
        number1 = 3/0;
        console.log(number1); //Infinity
        number2 = -3/0;
        console.log(number2); //-infinity
        
        number3 = "abc"/3;
        console.log(number3); //Strings cannot be divided by numbers
 
//Javascript Longlnt. It uses for login with a large numbers or time to count one in a million of second.
const value1 = 900719925124740998n;
const result1 = value1 + 1n;
console.log(result1); //"900719925124740999n"
const result2 = value2 +1;
console.log(result2); //cannot be added number intoBigint and we cannot mix Bigint with other types, such as string and etc.
//Bigint is the newer version of javascript. So there are not many browsers supported, such as Safari(Apple), IE , Edge and etc.

//JavaScript Boolean
//There are two values: ture and false
const dataChecked = true;
const valueCounted = false;

//JavaScript undefined
let name;
console.log(name); //undefined คือการประกาสตัวแปร แต่ไม่ได้กำหนดค่าตัวแปรไว ้ ดังนั้นค่าตัวแปรจะไม่ถูกกำหนด
let name = undefined;
console.log(name); //undefined -->> It's recommended to use "null" to assign unknown or empty value instead undefined in a variable.

//JavaScript null
const number = null; // the empty or unknown value. By the way, null is not the same with NULL and Null.
let value1 = 'value1'
//JavaScript Symbol
const value1 = Symbol('hello');
const value2 = Symbol('hello');
//อ้างอิงถึงค่าสัญลักษณ์ ซึ่งสัญลักษณ์คือค่าเดิมที่ไม่เปลี่ยนรูป

//JavaScript Object
const student = {
    firstName: 'Joey',
    lastName: null,
    class:10
};

//JavaScript Type

let data; //undefined type
data = 5; //integer type
data = "JavaScript Programming"; //string type

//JavaScrpit typeof
const name = 'ram';
typeof(name); //returns "string"

const number = 4;
typeof(number); //returns "number"

const valueChecked = true;
typeof(calueChecked); //returns "boolean"

const a = null;
typeof(a); //returns "object"
