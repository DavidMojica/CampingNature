//GLOBAR VARIABLES
var sec = document.getElementById('sec');      //<-middle DIV
var image_list = ['../media/HomeResources/login_img.png','../media/HomeResources/register_img.png',
                  '../media/HomeResources/catalog_img.png', '../media/HomeResources/contact_img.png']; 
var h2text_list = ['Login', 'Register', 'Products', 'Contact Us'];
var a_href_list = ['login_register.html','login_register.html','catalog.html','#']; //<-When another pages 
var amount_of_bubbles = 15; //<--- Amount of bubbles | Very high quantities can cause malfunctions
//Functions & arrows
var RandomPositiveInt =(max)=> { return Math.floor(Math.random() * max);}  // Get random int above 0 (0 included) & under max(max not included). If radomInt receive (3) -> Expected output: 0, 1 or 2
var RandomSign =(rands) => { if(rands%2==0) return '+'; else return '-';}  //Get one or both signs randomly. 
var getRandomInt = (min, max)=> { min = Math.ceil(min); max = Math.floor(max); //Get a random number above min(included) & under the max (not included).
    return Math.floor(Math.random() * (max - min) + min);        // The maximum is exclusive and the minimum is inclusive
}
//-----------BUBBLES CONSTRUCTION-----------//
for (let i=0; i<amount_of_bubbles;i++){
    let weightHeight = RandomPositiveInt(200);   //<------Maxium extent of each bubble
    let bubble = document.createElement('div');  
    bubble.style.backgroundColor = 'rgb(46, 141, 185)';
    bubble.style.borderRadius = '100%';
    bubble.style.position = 'absolute';
    bubble.style.bottom = '0';
    bubble.style.animation = 'animarburbujas 4s linear infinite';
    bubble.style.zIndex = RandomPositiveInt(2);
    bubble.style.width = weightHeight+"px";
    bubble.style.height = weightHeight+"px";
    bubble.style.left = `${RandomPositiveInt(90)}%`; //<----Maxium spawn point of each bubble. Max recomended: 90% for avoid overflow and override disasters :D
    bubble.style.animationDuration = `${getRandomInt(5,20)}s`;
    sec.appendChild(bubble);}
//------------BUTTONS CONSTRUCTION-----------//
for(let i=0; i<4;i++){
    let btnx = document.createElement('button'); 
    let a = document.createElement('a');
    let h2 = document.createElement('h2');
    let h2text = document.createTextNode(`${h2text_list[i]}`); 
    btnx.setAttribute('class','nav_button');                    
    a.setAttribute('href',`${a_href_list[i]}`);
    btnx.style.background = `rgba(51, 51, 0, 0.5) url(${image_list[i]})  no-repeat`;
    btnx.style.backgroundSize = '100% 70%';
    btnx.appendChild(h2);
    h2.appendChild(h2text);
    a.appendChild(btnx);
    document.getElementById('sec').appendChild(a); }
//https://bootswatch.com/ boostrap