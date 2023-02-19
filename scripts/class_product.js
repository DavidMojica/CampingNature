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
        this.discounted = false;
        this.top = false;
    }
    discounter(){
        console.log(`precio inicial: ${this.price}. Descuento de: ${this.discount}%`)
       if(!this.discounted){  //OJO
        this.price = this.price-(Math.ceil(this.price*(this.discount/100))); 
        this.discounted=true;
       }
        console.log(`\nPrecio final: ${this.price}`);
    }
    topper(){
        if(!this.top) this.top = true;
    }
}

productList.push(new product("../media/login_img.png",11,"Carpa de camping roja",1000,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",22,"Carpa de camping verde",1000,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",33,"Carpa de camping azul",1000,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",44,"Carpa de camping negra",1000,"Carpa de camping verde para acampar los domingos",1)); 
productList.push(new product("../media/login_img.png",55,"Bolso 1",1000,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",66,"Bolso 2",1000,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",77,"Bolso 3",1000,"Carpa de camping verde para acampar los domingos",2)); 
productList.push(new product("../media/login_img.png",88,"Baston 1",1000,"Carpa de camping verde para acampar los domingos",3)); 
productList.push(new product("../media/login_img.png",99,"Baston 2",1000,"Carpa de camping verde para acampar los domingos",3)); 

var sec = document.querySelector('section');
var outstandigs = document.createElement('div');
outstandigs.setAttribute('id','outstandings');
var discounts = document.createElement('div');
discounts.setAttribute('id','discounts');
var tops = document.createElement('div');
tops.setAttribute('id','tops');
    

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
        while(document.querySelector('article')) {
            try{
                outstandigs.removeChild(document.querySelector('h2'));
                outstandigs.removeChild(document.querySelector('h4')); 
                discounts.removeChild(document.querySelector('h2'));
                discounts.removeChild(document.querySelector('h4')); 
                tops.removeChild(document.querySelector('h2'));
                tops.removeChild(document.querySelector('h4')); 
                outstandigs.style.display = 'none';
                discounts.style.display = 'none';
                tops.style.display = 'none';
            }
            catch{}
            outstandigs.removeChild(document.querySelector('article'));
        }       
    }
    catch(error){
        console.log(error);
    }
    try{
        sec.removeChild(document.getElementById('outstandings'));
        sec.removeChild(document.querySelector('h1'));
        sec.removeChild(document.querySelector('p'));
    }
    catch{}

    try {
        while(document.querySelector('article')) discounts.removeChild(document.querySelector('article'));
    } catch{}

    try{
        while(document.querySelector('article')) tops.removeChild(document.querySelector('article'));
    }catch(error){console.log(error)}
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
    b.style.display = 'block';
    
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
    art.style.width = '20vw';
    art.style.height = '54vh';
    art.style.border = '1px solid green';
    art.style.display = 'inline-block';
    art.style.minHeight = '450px';
    art.style.minWidth = '300px';
    art.style.marginRight = '1%';
    art.style.marginLeft = '1%';
    art.style.borderRadius = '1.2em';
    
    art.appendChild(image);
    art.appendChild(h3);
    art.appendChild(p);
    art.appendChild(b);
    art.appendChild(a);
    art.appendChild(a2);


    if(productList[pos].discounted && !productList[pos].top){
        let desc = document.createElement('strike');
        let desctext = document.createTextNode(`${productList[pos].discount}% OFF!`);
        desc.style.background = 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)'
        desc.style.font = 'Bold'
        desc.appendChild(desctext);
        p.appendChild(desc);
       // art.style.background = 'blue';
        console.log(`Producto ${productList[pos].id} descuento ${productList[pos].discount} precio final ${productList[pos].price}`)
    }
    else if(productList[pos].top && !productList[pos].discounted){
        let desc = document.createElement('b');
        let desctext = document.createTextNode(`TOP SELLER`);
        desc.appendChild(desctext);
        p.appendChild(desc);

    }
    else if (productList[pos].discounted && productList[pos].top){
        let desc = document.createElement('strike');
        let desctext = document.createTextNode(`${productList[pos].discount}% OFF BEST CHOICE!`);
        desc.style.background = 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)'
        desc.style.font = 'Bold'
        desc.appendChild(desctext);
        p.appendChild(desc);
        //art.style.background = 'wheat';
    }

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
var getRandomInt = (min, max)=> { min = Math.ceil(min); max = Math.floor(max); //Get a random number above min(included) & under the max (not included).
    return Math.floor(Math.random() * (max - min) + min); }       // The maximum is exclusive and the minimum is inclusive
function showCatalogMainpage(){
    clearCatalogMain();
    clearCatalogSection();
    createSectionTitle(0);

    outstandigs.style.display = 'block';
    discounts.style.display = 'block';
    tops.style.display = 'block';

    /*OUTSTANDING ELEMENTS. I picked three random products for promote it on outstandigs section*/
    outstandigs.style.border = '1px green solid';


    let subOut = document.createElement('h2');
    let subOutTxt = document.createTextNode("Outstanding Sales!");
    subOut.setAttribute('id','secDiscountDesc');
    subOut.appendChild(subOutTxt);
    let subSubOut = document.createElement('h4');
    let subSubOutTxt = document.createTextNode("Enjou you ride with our best seller products!");
    subSubOut.setAttribute('id','secDiscountLime');
    subSubOut.style.float = 'inherit';
    
    
    subSubOut.appendChild(subSubOutTxt);
    outstandigs.appendChild(subOut);
    outstandigs.appendChild(subSubOut);
    sec.appendChild(outstandigs);


   
    for(let i=0;i<outstandigProductsList.length;i++) 
    for(let j = 0; j<productList.length;j++)
    if(outstandigProductsList[i].id==productList[j].id) createArticle(j,1);

    /*Discount elements-- */
    let subDisc = document.createElement('h2');
    let subDiscTxt = document.createTextNode("TODAY SALE DISCOUNT!!");
    subDisc.appendChild(subDiscTxt);
    let subSubDesc = document.createElement('h4');
    let subSubDescTXT = document.createTextNode("Every day we have special offers for you!");
    subSubDesc.style.float = 'inherit';
    subSubDesc.appendChild(subSubDescTXT);

    discounts.appendChild(subDisc);
    discounts.appendChild(subSubDesc);
    discounts.style.border = '1px blue solid';
    sec.appendChild(discounts);
 

    for(let i=0;i<discountedProductsList.length;i++)
        for(let j =0;j<productList.length;j++)
            if(discountedProductsList[i].id==productList[j].id) createArticle(j,2);

    /*TOP ELEMENTS */
    
    let subTops = document.createElement('h2');
    let subTopsTXT = document.createTextNode("TOP SALES!");
    subTops.appendChild(subTopsTXT);
    let subSubTops = document.createElement('h4');
    let subSubTopsTXT = document.createTextNode("Our best seller products!");
    subSubTops.style.float = 'inherit';
    subSubTops.appendChild(subSubTopsTXT);
    
    tops.appendChild(subTops);
    tops.appendChild(subSubTops);
    tops.style.border = 'white 1px solid';
    sec.appendChild(tops);

    for(let i=0;i<topProductsList.length;i++)
        for(let j =0;j<productList.length;j++)
            if(topProductsList[i].id==productList[j].id) createArticle(j,3);
    
}

var outstandigProductsList = [];
var discountedProductsList = [];
var topProductsList = [];
onload=function(){
    //Outstandings
    for(let i = 0;i<3;i++){
        outstandigProductsList.push(randomProduct());
    }//
    //Discounteds
    for(let i = 0;i<3;i++){
        let dscPrd = randomProduct();
        while(discountedProductsList.includes(dscPrd)) dscPrd = randomProduct(); //No deja que se repitan productos.
        dscPrd.discount = getRandomInt(10,50);
        dscPrd.discounter();
        discountedProductsList.push(dscPrd);
    } 
    //Tops
    for(let i = 0;i<3;i++){
        let topProd = randomProduct();
        while(topProductsList.includes(topProd)) topProd=randomProduct();
        topProd.topper();
        topProductsList.push(topProd);
    }
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
// 