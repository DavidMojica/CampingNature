var productList = [];
var liList = ["text","Buy cart"]
var typeList = {1:"Carpas", 2:"Bolsos",3:"Bastones"}


class product{
    constructor(image,id,name,price,description,type){
        this.image = image;
        this.id = id;
        this.name= name;
        //this.ammount = ammount;
        this.price = price;
        this.description = description;
        this.type = typeList[type];
        console.log(typeList[type]);
    }
}

productList.push(new product("../media/login_img.png",52,"Carpa de camping roja",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",52,"Carpa de camping verde",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",52,"Carpa de camping azul",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",52,"Carpa de camping negra",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",52,"Bolso 1",2500,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",52,"Bolso 2",2500,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",52,"Bolso 3",2500,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",52,"Baston 1",2500,"Carpa de camping verde para acampar los domingos",3)); 
productList.push(new product("../media/login_img.png",52,"Baston 2",2500,"Carpa de camping verde para acampar los domingos",3)); 
let sec = document.querySelector('section');


function showCategories(cat){
    try{
        while(document.querySelector('article')) sec.removeChild(document.querySelector('article'));
    }
    catch{}
    for(let i=0;i<productList.length;i++){
        if(typeList[cat] ==  productList[i].type){
            let image = document.createElement('img');
            image.src = productList[i].image;
            image.style.width = '80%';
            
            let h3 = document.createElement('h3');
            let h3text = document.createTextNode(productList[i].name);
            h3.appendChild(h3text);
            h3.style.fontSize = '25px';
            
            /*PRICE*/
            let p = document.createElement('p');
            let b = document.createElement('b');
            let ptext = document.createTextNode("Art. code: "+productList[i].id+"\n");
            let btext = document.createTextNode(`$${productList[i].price}`);
            p.appendChild(ptext);
            b.appendChild(btext);
            p.style.fontSize = '20px';
            b.style.fontSize = '20px';
            
            /*A BUTTONS*/
            let a = document.createElement('a');
            let atext = document.createTextNode("Add to cart");
            a.setAttribute('class','btn_tp1');
            a.appendChild(atext);

            let a2 = document.createElement('a');
            let a2text = document.createTextNode("Show more info");
            a2.setAttribute('class','btn_tp1');
            a2.appendChild(a2text);

            /*Article*/
            let art = document.createElement('article');
            art.style.width = '18vw';
            art.style.height = '50vh';
            art.style.border = '1px solid green';
            art.style.display = 'inline-block';
            art.style.minHeight = '400px';
            art.style.minWidth = '250px';
            art.style.marginRight = '1%';
            art.style.marginLeft = '1%';
            art.style.borderRadius = '1.2em';

            sec.appendChild(art);
            art.appendChild(image);
            art.appendChild(h3);
            art.appendChild(p);
            art.appendChild(b);
            art.appendChild(a);
            art.appendChild(a2);
        }  
    }
}

// for(let i=0;i<productList.length;i++){
//     let image = document.createElement('img');
//     image.src = productList[i].image;
//     image.style.width = '80%';
    
//     let h3 = document.createElement('h3');
//     let h3text = document.createTextNode(productList[i].name);
//     h3.appendChild(h3text);
//     h3.style.fontSize = '25px';
    
//     /*PRICE*/
//     let p = document.createElement('p');
//     let b = document.createElement('b');
//     let ptext = document.createTextNode("Art. code: "+productList[i].id+"\n");
//     let btext = document.createTextNode(`$${productList[i].price}`);
//     p.appendChild(ptext);
//     b.appendChild(btext);
//     p.style.fontSize = '20px';
//     b.style.fontSize = '20px';
    
//     /*A BUTTONS*/
//     let a = document.createElement('a');
//     let atext = document.createTextNode("Add to cart");
//     a.setAttribute('class','btn_tp1');
//     a.appendChild(atext);

//     let a2 = document.createElement('a');
//     let a2text = document.createTextNode("Show more info");
//     a2.setAttribute('class','btn_tp1');
//     a2.appendChild(a2text);

//     /*Article*/
//     let art = document.createElement('article');
//     art.style.width = '18vw';
//     art.style.height = '50vh';
//     art.style.border = '1px solid green';
//     art.style.display = 'inline-block';
//     art.style.minHeight = '400px';
//     art.style.minWidth = '250px';
//     art.style.marginRight = '1%';
//     art.style.marginLeft = '1%';
//     art.style.borderRadius = '1.2em';
    
//     sec.appendChild(art);
//     art.appendChild(image);
//     art.appendChild(h3);
//     art.appendChild(p);
//     art.appendChild(b);
//     art.appendChild(a);
//     art.appendChild(a2);
// }

function liClick(){
    let doc = document.getElementById("divCat");
    if(doc.style.display=="block") doc.style.display="none";
    else doc.style.display="block";
}
    

    

    




// for(let i=0;i<10;i++){
    // let cat = document.querySelector('section');
//     cat.appendChild(document.createElement('article'));
// }