/*
|-------CONTACT ME--------|
|Creator S.E: David Mojica|
|WhatsApp :+57 319 7750000|
|Github :https://github.com/DavidMojicaDev

//------USER SUPER CLASSES------//
This script will be present in every part of all the pages, because is the script that provides the user info and logic for every part of the client side.
*/

//---------Classes---------//
//User class: Default generic user class that molds client & admin class.
class user{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}
//Client class: Class for the clients. Every user that registers will be a client.
class client extends user{
    constructor(username,password,money,totalMoneyEarned){
        super(username,password);
        this.money = money;
        this.buyCart = [];
        this.totalPrice = 0;
        this.totalMoneyEarned = totalMoneyEarned;
    } 
}
//Admin class: Admin can modify the products and do 'TIER STAFF' functions over the page in general.
class admin extends user{
    constructor(username,password) {
        super(username, password);
    }  
    addProduct(){
    }
}
/*----------GLOBAL VARIABLES------------*/
var clientList = []; 

//*------------FUNCTIONS-------------*//
function val(){ //A few validations to the login.
    let userLog = document.getElementById('user_login').value;
    let passLog = document.getElementById('password_Login').value;
    let notify = undefined;
    let ban = false;

    if(String(userLog).length ==0 || String(passLog.length)==0){
        notify="Algún campo está vacío.";
        ban = true;
    }
    else{
        $.ajax({
            url: 'optopensesion.php',
            type: 'POST',
            data: { 
                userLog: userLog,
                passLog: passLog
             },
            success: function(response) {
                let data = JSON.parse(response);
                console.log(data[0]);
                if(data[0].usertype == "1"){
                    var confirmedClient = new client(data[0].username, data[0].pass, data[0].cash, data[0].totalcashearned);
                    openSesion(confirmedClient);
                    console.log(data + "JSON");
                }
                
            },
            error: function(xhr, status, error) {
              alert(xhr.responseText);
            }
        });
    }
    if(ban) actInfo(notify,"1");
}
function val2(){  //A few validations in the register display.
    let userRegister = document.getElementById('user_Register').value;
    let passRegister = document.getElementById('password_Register').value;
    let confPassRegister = document.getElementById('conf_password_Register').value;
    let notify = undefined;
    let ban = false;
    if(String(userRegister).toLowerCase().length ==0 || String(passRegister.length)==0 || String(confPassRegister).length==0){
        notify="Algún campo está vacío.";
        ban = true;
    }
    else if(passRegister != confPassRegister){
        notify="Contraseñas no coinciden";
        ban = true;
    }
    else {
        $.ajax({
            url: 'optregister.php',
            type: 'POST',
            data: { 
                user_Register: userRegister,
                password_Register: passRegister,
                confPassRegister: confPassRegister,
                usertype: 1,
                cash: 0,
                totalCashEarned: 0
             },
            success: function(response) {
                actInfo(response,"2");
            },
            error: function(xhr, status, error) {
              alert(xhr.responseText);
            }
        });
    }
    if(ban) actInfo(notify,"2");
}

function actInfo(notify,num){ //Shows a red text if any information is incomplete or unnacepted
    try{     
       document.getElementById(`notify${num}`).removeChild(document.getElementById(`ptext${num}`));
    }
    catch{}
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
function clear(){  //Clear the textcamps.
    document.getElementById('user_login').value="";
    document.getElementById('password_Login').value="";
    document.getElementById('user_Register').value="";
    document.getElementById('password_Register').value="";
    document.getElementById('conf_password_Register').value="";
    try{
        document.getElementById('notify1').removeChild(document.getElementById('ptext1'));
     }catch{}
     try{
        document.getElementById('notify2').removeChild(document.getElementById('ptext2'));
     }catch{}
}
//LOCAL SESSION ---- The user remains logged into the page even if he changes location or leaves the page.
onload=function(){
    if(localStorage.getItem('activeUser')!=null){
        let lilogin = document.getElementById('lilogin');
        let list = document.getElementById('hlist');
        
        if(lilogin && list.contains(lilogin)){ //lilogin exists and lilogin is a direct child of list ??
          
          
            list.removeChild(lilogin);
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
}
function openSesion(confirmedUser){  //Open sesion in local storage
    localStorage.setItem("activeUser",JSON.stringify(confirmedUser));
    location.replace('index.html');
}
function closeSesion(){     //Close sesion in local storage
    localStorage.removeItem("activeUser");
    location.reload();
}