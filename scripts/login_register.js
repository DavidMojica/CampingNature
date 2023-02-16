var imagenes=['../media/summer_camp_0.webp','../media/summer_camp_1.webp','../media/summer_camp_2.webp','../media/summer_camp_3.jpg','../media/summer_camp_4.jpg','../media/summer_camp_5.jpg','../media/summer_camp_6.webp'];
var cont =0;
var mn = 50, mx = 300;
var getRandomInt = (min, max)=> { min = Math.ceil(min); max = Math.floor(max); //Get a random number above min(included) & under the max (not included).
    return Math.floor(Math.random() * (max - min) + min);        // The maximum is exclusive and the minimum is inclusive
}

function rotarImagenes(){
    document.body.style.backgroundImage = `url(${imagenes[cont]})`;
    cont ++;
    if(cont == imagenes.length) cont =0;
}
function modificarBordes(){
    let item = document.getElementById('formulary');
    let l1 = getRandomInt(mn,mx), l2 = getRandomInt(mn,mx), l3 = getRandomInt(mn,mx), l4= getRandomInt(mn,mx);
    item.style.transition = '2s';
    item.style.borderRadius = `${l1}px ${l2}px ${l3}px ${l4}px`;
}
function express(cant){
    let form = document.getElementById('formulary');
    form.style.transform = `rotateY(${cant})`;
    form.style.transformStyle = 'preserve-3d';
    form.style.transition = 'all 0.5s linear';
    form.style.position = 'absolute';
}
function f1(){
    document.getElementById('div_register').style.display = 'block';
    document.getElementById('div_login').style.display = 'none';
    document.getElementById('div_active_sesion').style.display = 'none';
    clear();
}
function f2(){
    document.getElementById('div_login').style.display = 'block';
    document.getElementById('div_register').style.display = 'none';
    document.getElementById('div_active_sesion').style.display = 'none';
    clear();
}
function f3(){
    document.getElementById('div_login').style.display = 'none';
    document.getElementById('div_register').style.display = 'none';
    document.getElementById('div_active_sesion').style.display = 'block';
}
function btn1Click(){
    express('180deg');
    setTimeout(f1,250);  //<----Active the function after x time (in ms).
}
function btn2Click(){
    express('0deg');
    setTimeout(f2,250);
}
function clear(){
    document.getElementById('user_login').value="";
    document.getElementById('password_Login').value="";
    document.getElementById('user_Register').value="";
    document.getElementById('password_Register').value="";
    document.getElementById('conf_password_Register').value="";
}
/*Función que se ejecuta una vez cargada la página*/
rotarImagenes();
setInterval(rotarImagenes,10000);
modificarBordes();
setInterval(modificarBordes,4000);


