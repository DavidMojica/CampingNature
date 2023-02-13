var imagenes=['../media/summer_camp_0.webp','../media/summer_camp_1.webp','../media/summer_camp_2.webp','../media/summer_camp_3.jpg','../media/summer_camp_4.jpg','../media/summer_camp_5.jpg','../media/summer_camp_6.webp'];
var cont =0;
var mn = 50, mx = 300;
var getRandomInt = (min, max)=> { min = Math.ceil(min); max = Math.floor(max); //Get a random number above min(included) & under the max (not included).
    return Math.floor(Math.random() * (max - min) + min);        // The maximum is exclusive and the minimum is inclusive
}

function rotarImagenes()
{
    document.body.style.backgroundImage = `url(${imagenes[cont]})`;
    cont ++;
    if(cont == imagenes.length) cont =0;
}

function modificarBordes(){
    let item = document.getElementById('formulary');
    item.style.background = 'rgba(255, 255, 255, 0.3)';
    item.style.backdropFilter = 'blur(6px)';
    item.style.transition = '2s';
    item.style.borderRadius = `${getRandomInt(mn,mx)}px ${getRandomInt(mn,mx)}px ${getRandomInt(mn,mx)}px ${getRandomInt(mn,mx)}px`;
}
/* border-radius: 200px 100px 40px 40px;

background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(6px); 
*/
/*Función que se ejecuta una vez cargada la página*/
onload=function()
{
    rotarImagenes();
    setInterval(rotarImagenes,10000);
    modificarBordes();
    setInterval(modificarBordes,4000);
}

