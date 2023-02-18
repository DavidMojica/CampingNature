var productList = [];
var liList = ["text","Buy cart"]
var typeList = {0:"Welcome to our catalog!",1:"Carpas", 2:"Bolsos",3:"Bastones"}
var typeDesc = {0:"Explore and buy!",
                1:"Para acampar comodamente en el campo.",
                2: "Lleva todo lo que necesites en estas mochilas de expansión.",
                3: "Para senderistas y aficionados al badminton."}

class product{
    constructor(image,id,name,price,description,type){
        this.image = image;
        this.id = id;
        this.name= name;
        //this.ammount = ammount;
        this.price = price;
        this.description = description;
        this.type = typeList[type];
        this.outstandig = false;
        this.discount = 0;
        this.top = false;
    }
    discounter(){

    }
}

productList.push(new product("../media/login_img.png",52,"Carpa de camping roja",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",12,"Carpa de camping verde",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",32,"Carpa de camping azul",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",82,"Carpa de camping negra",2500,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",512,"Bolso 1",2500,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",58,"Bolso 2",2500,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",25,"Bolso 3",2500,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",92,"Baston 1",2500,"Carpa de camping verde para acampar los domingos",3)); 
productList.push(new product("../media/login_img.png",72,"Baston 2",2500,"Carpa de camping verde para acampar los domingos",3)); 

var sec = document.querySelector('section');
var discounts = document.getElementById('discounts');
var tops = document.getElementById('tops');
let outstandigs = document.createElement('div');

    

/**      <div id="outstandings"></div>
      <div id="discounts"></div>
      <div id="tops"></div> */

function createSectionTitle(opc){
    /*SECTION TITLE AND DESCRIPTION */
    let h1 = document.createElement('h1');
    let h1text = document.createTextNode(typeList[opc]);
    h1.appendChild(h1text);
    h1.style.display ='inline-block';
    h1.style.fontSize = '52px';
    h1.style.textShadow = '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue';

    let pdesc = document.createElement('p');
    let pdesctext = document.createTextNode(typeDesc[opc]);
    pdesc.appendChild(pdesctext);
    pdesc.style.fontSize = '20px';
    pdesc.style.textShadow = '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue';

    sec.appendChild(h1);
    sec.appendChild(pdesc);
}
function clearCatalogSection(){
    try{
        while(document.querySelector('article')) sec.removeChild(document.querySelector('article'));
        sec.removeChild(document.querySelector('h1'));
        sec.removeChild(document.querySelector('p'));
        
    }
    catch{console.log("sw0");}
}
function clearCatalogMain(){
    try{
        while(document.querySelector('article')) outstandigs.removeChild(document.querySelector('article'));
        sec.removeChild(document.getElementById('outstandings'));
        sec.removeChild(document.querySelector('h1'));
        sec.removeChild(document.querySelector('p'));
    }
    catch{
        console.log("2");
    }
}

function showCategories(cat){
    clearCatalogSection();
    clearCatalogMain();
    createSectionTitle(cat);
    for(let i=0;i<productList.length;i++){
        if(typeList[cat] ==  productList[i].type)/*>>>*/createArticle(i,0);
    }
}

function createArticle(pos,container){
    let image = document.createElement('img');
    image.src = productList[pos].image;
    image.style.width = '80%';
    
    let h3 = document.createElement('h3');
    let h3text = document.createTextNode(productList[pos].name);
    h3.appendChild(h3text);
    h3.style.fontSize = '25px';
    
    /*PRICE*/
    let p = document.createElement('p');
    let b = document.createElement('b');
    let ptext = document.createTextNode("Art. code: "+productList[pos].id+"\n");
    let btext = document.createTextNode(`$${productList[pos].price}`);
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
    
    art.appendChild(image);
    art.appendChild(h3);
    art.appendChild(p);
    art.appendChild(b);
    art.appendChild(a);
    art.appendChild(a2);

    switch(container){
        case 0:{
            sec.appendChild(art);
            break;
        }
        case 1:{
            outstandigs.appendChild(art);
            break;
        }
        case 2:{
            discounts.appendChild(art);
            break;
        }
        case 3:{
            tops.appendChild(art);
            break;
        }
    }
}

var randomProduct =()=> { return  productList[Math.floor(Math.random() * productList.length)];}  // Get random product depending of the large of the obj. product Array.
function showCatalogMainpage(){
    clearCatalogMain();
     clearCatalogSection();
     createSectionTitle(0);
     outstandigs.style.border = '1px green solid';
     outstandigs.setAttribute('id','outstandings');
     sec.appendChild(outstandigs);
     /*OUTSTANDING ELEMENTS. I picked three random products for promote it on outstandigs section*/
     for(let i = 0;i<3;i++){
        let outprod = randomProduct();
        for(let i = 0;i<productList.length;i++)/*>>>*/if(outprod.id==productList[i].id) createArticle(i,1);
     }
     /*Discount elements-- */
}

onload=function(){
   showCatalogMainpage();
}

function liClick(){
    let doc = document.getElementById("divCat");
    if(doc.style.display=="block") doc.style.display="none";
    else doc.style.display="block";
}

// for(let i=0;i<10;i++){
    // let cat = document.querySelector('section');
//     cat.appendChild(document.createElement('article'));
// }