/*
|-------CONTACT ME--------|
|Creator S.E: David Mojica|
|WhatsApp :+57 319 7750000|
|Github :https://github.com/DavidMojicaDev

/*LOGIN RESOURCES*/
//------------GLOBAL VARIABLES-------------//
var imagenes=['../media/LoginBG/summer_camp_0.webp','../media/LoginBG/summer_camp_1.webp',  //Image directions on the project folder.
              '../media/LoginBG/summer_camp_2.webp','../media/LoginBG/summer_camp_3.jpg',
              '../media/LoginBG/summer_camp_4.jpg','../media/LoginBG/summer_camp_5.jpg',
              '../media/LoginBG/summer_camp_6.webp'];
var cont =0;
var mn = 50, mx = 300; //Variables for expand and contract the login square.
var getRandomInt = (min, max)=> { min = Math.ceil(min); max = Math.floor(max); //Get a random number above min(included) & under the max (not included).
    return Math.floor(Math.random() * (max - min) + min);        // The maximum is exclusive and the minimum is inclusive
}
var timeToChangeImages = 4000; //In ms.
var timeToChangeBackground = 10000; //In ms.
//-------Functions--------//
function changeBackgroundImage(){      //Changes background image.
    document.body.style.backgroundImage = `url(${imagenes[cont]})`;
    cont ++;
    if(cont == imagenes.length) cont =0;
}
function modifyBordersLogin(){          //Expands or contracts the corners of the login depending a random number between mn and mx variables.
    let item = document.getElementById('formulary');
    let l1 = getRandomInt(mn,mx), l2 = getRandomInt(mn,mx), l3 = getRandomInt(mn,mx), l4= getRandomInt(mn,mx);
    item.style.transition = '2s';
    item.style.borderRadius = `${l1}px ${l2}px ${l3}px ${l4}px`;
}
function spinLogin(cant){               //Spins the login.
    let form = document.getElementById('formulary');
    form.style.transform = `rotateY(${cant})`;
    form.style.transformStyle = 'preserve-3d';
    form.style.transition = 'all 0.5s linear';
    form.style.position = 'absolute';
}
/*Hides the respective formulary*/
function hide1(){
    document.getElementById('div_register').style.display = 'block';
    document.getElementById('div_login').style.display = 'none';
    document.getElementById('div_active_sesion').style.display = 'none';
    clear();
}
function hide2(){
    document.getElementById('div_login').style.display = 'block';
    document.getElementById('div_register').style.display = 'none';
    document.getElementById('div_active_sesion').style.display = 'none';
    clear();
}
function hide3(){
    document.getElementById('div_login').style.display = 'none';
    document.getElementById('div_register').style.display = 'none';
    document.getElementById('div_active_sesion').style.display = 'block';
}
function btn1Click(){ //Function that spins the login register card from login part.
    spinLogin('180deg');
    setTimeout(hide1,250);  //<----Active the function after x time (in ms).
}
function btn2Click(){   //Function that spins the login register card from register part.
    spinLogin('0deg');
    setTimeout(hide2,250);
}
function clear(){ //Clear the textboxs.
    document.getElementById('user_login').value="";
    document.getElementById('password_Login').value="";
    document.getElementById('user_Register').value="";
    document.getElementById('password_Register').value="";
    document.getElementById('conf_password_Register').value="";
}
/*Función que se ejecuta una vez cargada la página*/
changeBackgroundImage();
setInterval(changeBackgroundImage,timeToChangeBackground);
modifyBordersLogin();
setInterval(modifyBordersLogin,timeToChangeImages);


