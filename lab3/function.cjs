export function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert ("ใส่usernameไม่ถูกต้อง น้ะจ๊ะ");
        return false;
    }
    if (password == null || password ==""){
        alert("ใส่passwordไม่ถูกต้อง น้ะจ๊ะ");
        return false;
    }
    alert('Login successful');
}