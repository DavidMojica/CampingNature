var image_list = ['../media/login_img.png','../media/register_img.png','../media/catalog_img.png', '../media/contact_img.png'];
var h2text_list = ['Login', 'Register', 'Catalog', 'Contact Us'];
var a_href_list = ['#','#','#','#'];

for(let i=0; i<4;i++){
    let btnx = document.createElement('button'); 
    let a = document.createElement('a');
    let h2 = document.createElement('h2');
    let h2text = document.createTextNode(`${h2text_list[i]}`); 
    btnx.setAttribute('class','nav_button');                    
    a.setAttribute('href',`${a_href_list[i]}`);
    btnx.style.background = `rgba(51, 51, 0, 0.61) url(${image_list[i]})  no-repeat`;
    btnx.style.backgroundSize = '100% 70%';
    btnx.appendChild(h2);
    h2.appendChild(h2text);
    a.appendChild(btnx);
    document.getElementById('sec').appendChild(a); 
}