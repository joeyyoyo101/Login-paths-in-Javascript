const user = require('./user.json')
import {validate} from './function.js';
const Login = (username,password) =>{
    let name= 'Not Found';
    user.forEach((data) => {
        if (data.username === username && data.password === password){
            name = data.username;
            return true;
        }
    })
    if(name,username,password)
    return {name,username,password}
}

const Show = Login("Joey","1236789")
console.log(Show);