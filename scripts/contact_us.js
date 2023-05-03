var paises = ["Seleccione su país","Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
"Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
"Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
"Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
"Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
"Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
"Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
"Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
"Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
"Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
"Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
"Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
"Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
"Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
"Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
"Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
"Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
"Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
"Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
"Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
"Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

var select = document.querySelector('select');
for(let i=0;i<paises.length;i++){
    let opt = document.createElement('option');
    let opctext = document.createTextNode(paises[i]);
    opt.appendChild(opctext);
    select.add(opt);
}

const btn = document.getElementById('fsumbmit');
document.getElementById('form_contactme').addEventListener('submit', function(event) {
    let val = senderValidations();
    if(val==""){
        event.preventDefault();
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_9oy8vtr';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            btn.value = 'Send Email';
            createToastNotify(0,"Enviado","Te responderé tan pronto como vea el mensaje :)");
            clearForm();
            }, (err) => {
            btn.value = 'Send Email';
            createToastNotify(1,"No enviado",err)
            });
    }else createToastNotify(1,"No enviado",val);
});

var select = document.querySelector('select');
select.style.backgroundImage = 'url("../media/contactusresources/country.png")';
select.style.backgroundSize = '9%';
select.style.backgroundRepeat = 'no-repeat';


var fnombre = document.getElementById('fnombre');
var femail = document.getElementById('femail');
var fasunto = document.getElementById('fasunto');
var ftextarea = document.getElementById('ftextarea');
var formArr = document.getElementsByClassName('formulario');

for(let i = 0; i<formArr.length; i++){
    formArr[i].addEventListener('focus',(event) => {
        event.target.style.backgroundColor = "lightblue";
    }); 
    formArr[i].addEventListener('focusout'/*focusout*/,(event) => {
        event.target.style.backgroundColor = "initial";
    });
}

/*--SUBMIT--*/
formArr[formArr.length-1].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "deepskyblue";
    event.target.style.cursor = "pointer";
    event.target.style.color = "#fefefe";
    event.target.style.border = "white 1px solid";
});
formArr[formArr.length-1].addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = "initial";
    event.target.style.color = "initial";
    event.target.style.border = "black 1px solid";
});

function senderValidations(){
    let val="";
    let colorAprobado = "#90EE90";
    let colorDesaprobado = "#FF6961";
    if(fnombre.value.length<5){
        val = "Nombre demasiado corto. <br>";
        fnombre.style.backgroundColor = colorDesaprobado;
    }else fnombre.style.backgroundColor = colorAprobado;

    if(femail.value.length==0){
        val += "Email vacío. Escriba un email válido. <br>";
        femail.style.backgroundColor = colorDesaprobado;
    }else femail.style.backgroundColor = colorAprobado;

    if(select.value=="Seleccione su país"){
        val += "Seleccione su país. <br>";
        select.style.backgroundColor = colorDesaprobado;
    }else select.style.backgroundColor = colorAprobado;

    if(fasunto.value.length==0){
        val+= "Ingrese el asunto. <br>";
        fasunto.style.backgroundColor = colorDesaprobado;
    }else fasunto.style.backgroundColor = colorAprobado;

    if(ftextarea.value.length==0) {
        val+= "Ingrese el mensaje a enviar. <br>";
        ftextarea.style.backgroundColor = colorDesaprobado;
    }else ftextarea.style.backgroundColor = colorAprobado;

    setTimeout(naturalizeColors,4000);
    return val;
}
//---end
function clearForm(){
    fnombre.value="";
    femail.value="";
    select.value="Seleccione su país";
    fasunto.value = "";
    ftextarea.value = "";
}
function naturalizeColors(){
    fnombre.style.backgroundColor = "initial";
    femail.style.backgroundColor = "initial";
    select.style.backgroundColor = "initial";
    fasunto.style.backgroundColor = "initial";
    ftextarea.style.backgroundColor = "initial";
}

//-------------Toast Notify-------------//
function createToastNotify(opc,head,msg){
    switch(opc){
        case 0:{
            new ToastNotify('success', {
                head: head,
                msg: msg,
                timer: 3000
            });
            break;
        };
        case 1:{
            new ToastNotify('error', {
                head: head,
                msg: msg,
                timer: 3000
            });
            break;
        };
        case 2:{
            new ToastNotify('info', {
                head: head,
                msg: msg,
                timer: 7000
            });
            break;
        };
        case 3:{
            new ToastNotify('warning', {
                head: '¡warning!',
                msg: `Mensaje de advertencia ¿Acepta las condiciones? 
                prseione X para cerrar el ToastNotify/Denegar, 
                pusle el boton aceptar caso afirmativo
                <div class="row">
                    <div class="col d-flex justify-content-end">
                      <button class="btn btn-light border btn-sm" onclick="accion()">acepto</button>
                    </div>
                </div>          
                `
            });
            break;
        };
    };
}
