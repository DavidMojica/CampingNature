var clientList = [];

class user{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}
class client extends user{
    constructor(username,password){
        super(username,password);
            this.money = 1500;
            this.buyCart = ["item1","item2"];
            this.totalPrice = 0;
            this.totalMoneyEarned = 0;
    }
    
}
class admin extends user{
    constructor(username,password) {
        super(username, password);
    }  
    addProduct(){
    }
}

function val(){
    let userLog = document.getElementById('user_login').value;
    let passLog = document.getElementById('password_Login').value;
    let notify = undefined;
    if(String(userLog).length ==0 || String(passLog.length)==0) notify="Algún campo está vacío.";
    for(let i = 0; i<clientList.length;i++){
        let anUser = clientList[i];
        if(anUser.username == userLog && anUser.password == passLog) {
            openSesion(anUser);
            clear();
        }           
    }
    notify="Usuario no encontrado";
    actInfo(notify,"1");
}

function val2(){
    let userRegister = document.getElementById('user_Register').value;
    let passRegister = document.getElementById('password_Register').value;
    let confPassRegister = document.getElementById('conf_password_Register').value;
    let notify = "Registro exitoso.";
    if(String(userRegister).toLowerCase().length ==0 || String(passRegister.length)==0 || String(confPassRegister).length==0) notify="Algún campo está vacío.";
    else if(passRegister != confPassRegister) notify="Contraseñas no coinciden";
    else {
        clientList.push(new client(userRegister,passRegister));
        clear();
    }
    actInfo(notify,"2");
}

function actInfo(notify,num){
    try{     
       document.getElementById(`notify${num}`).removeChild(document.getElementById(`ptext${num}`));
    }
    catch{      
    }
    finally{
        let divNotify = document.getElementById(`notify${num}`);
        let p = document.createElement('p');
        p.style.color = 'darkred';
        p.setAttribute('id',`ptext${num}`);
        let pText = document.createTextNode(notify);
        p.appendChild(pText);
        divNotify.appendChild(p);
    }
}



//https://bootswatch.com/ boostrap
function clear(){
    document.getElementById('user_login').value="";
    document.getElementById('password_Login').value="";
    document.getElementById('user_Register').value="";
    document.getElementById('password_Register').value="";
    document.getElementById('conf_password_Register').value="";
    try{
        document.getElementById('notify1').removeChild(document.getElementById('ptext1'));
     }
     catch{}
     try{
        document.getElementById('notify2').removeChild(document.getElementById('ptext2'));
     }
     catch{}
}

//LOCAL SESSION
onload=function(){
    if(localStorage.getItem('activeUser')!=null){
        try{f3();}
        catch{}
        let list = document.getElementById('hlist');
        let li = document.createElement('li');
        let a = document.createElement('a');
        let litext = document.createTextNode('Sign Out');
        a.addEventListener("click",closeSesion);
        a.appendChild(litext);
        li.appendChild(a);
        li.style.cursor = 'pointer';
        list.appendChild(li);
    }
}
function openSesion(confirmedUser){
    localStorage.setItem("activeUser",JSON.stringify(confirmedUser));
    location.replace('index.html');
}
function closeSesion(){
    localStorage.removeItem("activeUser");
    location.reload();
}

console.log(localStorage.getItem('activeUser'));


//----------The complete object-------------//
// function crear(){
//     sessionStorage.setItem("activeUser",JSON.stringify(clienteSesion)); //<---------JSON.stringyfy. Converts the object in a session storage obj.
//     console.log(sessionStorage.getItem("activeUser"));
// }
var clienteSesion = new client("pablo15","1234");

/*---------Testing----------*/



//  document.getElementById('crear').addEventListener("click",crear);
//  document.getElementById('mostrar').addEventListener("click",mostrar);
//  document.getElementById('modificar').addEventListener("click",modificar);
//  document.getElementById('eliminar').addEventListener("click",eliminar);

// //------------STRING BY STRIG------//

// function crear(){
//     sessionStorage.setItem("username",clienteSesion.username);
//     sessionStorage.setItem("money",clienteSesion.money);
//     sessionStorage.setItem("buyCart",clienteSesion.buyCart);
//     sessionStorage.setItem("totalPrice",clienteSesion.totalPrice);
// }

// function mostrar(){
//     console.log(sessionStorage.getItem("username"));
//     console.log(sessionStorage.getItem("money"));
//     console.log(sessionStorage.getItem("buyCart"));
//     console.log(sessionStorage.getItem("totalPrice"));
// }
// function modificar(){
//     sessionStorage.setItem("username","davidelpro");
// }
// function eliminar(){
//     sessionStorage.removeItem("username");
// }



// function mostrar(){

// }
// function modificar(){
//     sessionStorage.setItem("username","davidelpro");
// }
// function eliminar(){
//     sessionStorage.removeItem("username");
// }