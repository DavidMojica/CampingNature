/*
|-------CONTACT ME--------|
|Creator S.E: David Mojica|
|WhatsApp :+57 319 7750000|
|Github :https://github.com/DavidMojicaDev

---------THIS SCRIPT WAS ONLY MADE FOR CATALOG PAGE USING D.O.M TECHNIQUES.----------
D.O.M PROS: 
    -Less or no code on the HTML catalog page.
    -Less quantity of code in CSS catalog page.
    -Total control above all the texts, animations & variables.
    -So funny
D.O.M CONTRAS:
    -Extensive Javascript code for any little thing.
    -Consumes a lot of time and brain resources.
*/

//------------CLASSES------------//
//Cart: A supermarket cart that holds products that the customer intends to buy.
class cart{
    constructor(){
        this.productsInTheCart = [] //This list saves each product the client saved in the cart.
        this.totalPrice = 0;        //Total price of the products into the cart.
    }
    add(product){  //Save a product in the cart.
        this.productsInTheCart.push(product);
        this.totalPrice += (product.price * product.inTheCartQuantities);
        console.log(this.productsInTheCart)
    }
    remove(product){ //Remove a specific product out the car.
        let i = 0;
        for(let article of this.productsInTheCart){
            if(article===product) {
                this.productsInTheCart.splice(i,1);
                this.totalPrice -=(product.price * product.inTheCartQuantities);
                break;
            }
            i++;
        }
    }
}
//Product: A store product that can be purchased by the customer.
class product{
    constructor(id,name,price,description,image,type,outstandig,discounted,discount,top,avaliable_units){
        this.id = id;
        this.name= name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.type = typeList[type];
        this.outstandig = outstandig == 1 ? true : false;
        this.discounted = discounted == 1 ? true : false;
        this.discount = this.discounted == true ? discount : null;
        this.top = top == 1 ? true : false;
        this.avaliable_units = avaliable_units;
        // this.inTheCart = false;
        // this.inTheCartQuantities = 1;
    }
    topper(){                 //Activates top attribute for appear in tops section.
        if(!this.top) this.top = true;
    }
}

//---------ON LOAD----------//
onload=function(){ 
    console.log("Cargando");
    $.ajax({
        url: 'catalog.php',
        type: 'POST',
        data:{},
        success: function(response){
            let data = JSON.parse(response);
            if(data!=null){
                data.forEach((loaded_product) =>{
                    let new_prod = new product(loaded_product.id,loaded_product.prod_name,loaded_product.prod_value,loaded_product.prod_desc,loaded_product.prod_img,loaded_product.prod_type,loaded_product.outstanding,loaded_product.discounted,loaded_product.discount,loaded_product.top,loaded_product.avaliable_units);
                    if(new_prod.outstandig){
                        outstandigProductsList.push(new_prod);
                        console.log(outstandigProductsList);
                    }
                    
                    productList.push(new_prod);
                    
                });
            }
            else console.log('La consulta resultó NULL');           
        },
        error: function(xhr){
            //alert("estás ejecutandolo desde el lado del cliente, por lo que no se cargarán los datos del servidor.");
        }
    });
    //showCatalogMainpage();
}

//INSERT INTO `tblproduct`(`prod_name`, `prod_value`, `prod_desc`, `prod_type`, `prod_img`, `outstanding`, `discounted`, `discount`, `top`, `avaliable_units`) VALUES ('Carpa Bugisoft','828000','Carpa azul de bugisoft',1,'https://i.linio.com/p/1cde50daa2453865023d25b0bcdb3b51-product.jpg',false,false,0,false,18)


/*-------------GLOBAL VARIABLES------------*/
var productList = [], outstandigProductsList = [], discountedProductsList = [], topProductsList = [];
var liList = ["text","Buy cart"];
var listCategories = ["Carps","Backpacks","Shoes", "Fishing Rods", "Caps & Watterproof vest","Supervivence kits","Bickepacking"];
var typeList = {'C':"The BuyCart",
                0:"Welcome to our catalog!",
                1:"Carps", 
                2:"Backpacks - Legpacks",
                3:"Shoes",
                4: "Fishing Rods",
                5: "Caps & Waterproof vest",
                6: "Supervivence kits",
                7: "Bikepacking"};
var typeDesc = {'C':"Your products in the cart",
                0:"Explore and buy!",
                1:"Camping above the cup of the trees.",
                2: "Spacefull backpacks. Save everything you find.",
                3: "Walk safe and run faster.",
                4: "Fish the sharks!",
                5: "Stay safe from rain or shine",
                6: "Usefull equipment for every ocassion.",
                7: "Are designed to travel are usually made of resistant materials"}

/*----------D.O.M GLOBAL VARIABLES---------*/
var sec = document.querySelector('section');


var doc = document.getElementById("divCat");
//INIT D-G-V.


/*------------OBJECT INSTANCE---------- */
//Carts - In this moment only exists 1 cart but more carts can be added depending of the requeriments.
var productCart = new cart();

/*Products - Each product is directly added in product list. The structure for that is:
code: productList.push("URL OF THE IMG",id,"Name of the product",price,"Description",product type)
Url: string - id: int - Name: string - Price: int - Description: string - Product type: int
Important: It works with a minimum of 3 products because in the cycle of choosing featured, discounted and top products, a minimum of 3 DIFFERENT products are expected.
|ID NOMENCLATURE: Carps: 1000-1999 | BackPacks: 2000-2999 | Shoes 3000-3999*/

// //CARPS
// productList.push(new product("../media/CatalogResources/carp_columbus_huron.webp",1000,"Columbus Carp 1",1260000,"Columbus carp 3-5 people.",1)); 
// productList.push(new product("../media/CatalogResources/carp_columbus_huron2.webp",1001,"Columbus Carp 2",1835000,"Columbus carp 6-8 people.",1)); 
// productList.push(new product("../media/CatalogResources/carp_columbus_tunel.webp",1002,"Carp Tunnel",1500000,"Tunnel carp 5-7 people",1)); 

// //Backpacks and legpacks
// productList.push(new product("../media/CatalogResources/backpack_macuira.webp",2000,"Macuira 90LTS",470000,"Macuira backpack 90LTS.",2)); 
// productList.push(new product("../media/CatalogResources/backpack_legpack.webp",2001,"Rhino Legpack",80000,"Legpack Rhino very cheap and portable.",2)); 
// productList.push(new product("../media/CatalogResources/backpack_galeras.webp",2002,"Galeras 65LTS",420000,"Galeras backpack 65LTS.",2)); 

// //Shoes
// productList.push(new product("../media/CatalogResources/shoes_adidas.jpg",3000,"Adidas Mount",224000,"Adidas - Made by Peter Anguila",3)); 
// productList.push(new product("../media/CatalogResources/shoes_caterpillar.webp",3001,"Caterpillar Ride",134900,"Caterpillar for men. Designed by warriors for warriors.",3)); 
// productList.push(new product("../media/CatalogResources/shoes_waterproof.jpg",3002,"Coal Watterproof",250000,"Water Shoes for Men Women Quick Dry Barefoot Swimming Diving Surfing Water Sports Pool Beach Walking Yoga",3)); 

// //Fishing Rods
// productList.push(new product("../media/CatalogResources/fishing_lutac.webp",4000,"Lutac Fishing",110000,"Cheap fishing rod lurebait casting.",4)); 
// productList.push(new product("../media/CatalogResources/fishing_amazon.webp",4001,"Adidas Mount",760000,"Wholeshale amazon 20 sets children",4)); 
// productList.push(new product("../media/CatalogResources/fishing_flex.jpg",4002,"Flexible Fishing",574000,"Flexible fishing rod",4)); 

// //Caps & waterproof equipment
// productList.push(new product("../media/CatalogResources/cap_fishing_cap.jpg",5000,"Fishing cap",76800,"Fishing cap description",5)); 
// productList.push(new product("../media/CatalogResources/cap_waterproof_origin.webp",5001,"Origin Waterproof",154000,"Origin waterproof description",5)); 
// productList.push(new product("../media/CatalogResources/cap_waterproof_quechua.avif",5002,"Quechua Waterproof",200800,"Quechua waterproof description",5)); 

// //Survival Kits
// productList.push(new product("../media/CatalogResources/kits_kit1.jpg",6000,"Okama Kit",432000,"Okama's kit provides attaking instruments.",6)); 
// productList.push(new product("../media/CatalogResources/kits_kit2.jpg",6001,"Bowie kit",475000,"Bowie's kit provides you usefull instruments.",6)); 
// productList.push(new product("../media/CatalogResources/kits_kit3.jpg",6002,"Healing kit",315000,"Healing's kit ofers you a very usefull emergency health products.",6)); 

// //Bikepacks
// productList.push(new product("../media/CatalogResources/bikepacks_columbus1.webp",7001,"Small Bikepack",210000,"Small bikepack 5lts",7)); 
// productList.push(new product("../media/CatalogResources/bikepacks_columbus2.webp",7001,"Big bikepack",412000,"Big bikepack 15lts",7)); 
// productList.push(new product("../media/CatalogResources/bikepacks_columbus3.webp",7002,"Medium Bikepack",320000,"Mediuem bikepack 10lts",7)); 



//----------ARROWS------------//
var randomProduct =()=> { return  productList[Math.floor(Math.random() * productList.length)];}  // Get random product depending of the large of the obj. product Array.
var getRandomInt = (min, max)=> { min = Math.ceil(min); max = Math.floor(max); //Get a random number above min(included) & under the max (not included).
    return Math.floor(Math.random() * (max - min) + min); }       // The maximum is exclusive and the minimum is inclusive

//----------FUNCTIONS--------//
function showCategories(cat){    //Removes the existing articles in the display and add new articles order by it respective categories.
    clear(cat);
    for(let i=0;i<productList.length;i++) if(typeList[cat] ==  productList[i].type) createArticle(i,0);
}
function addToCart(pos){        //Validates that the product is not in the cart and adds it later. PARAMS: (Postion of the product in the products list).
    if(!productList[pos].inTheCart){
        productCart.add(productList[pos]);
        productList[pos].inTheCart = true;
        actualizeSection();
    }
}
function removeFromCart(pos){   //Validates that the product is in the cart and removes it later. PARAMS: (Postion of the product in the products list).
    if(productList[pos].inTheCart){
        productCart.remove(productList[pos]);
        productList[pos].inTheCart = false;
        actualizeSection();
    }
}
function createCartSection(){   //Gets each product in the cart and graph it in the DOM FUNCTION 'createArticle'. PARAMS: None.
    clear('C');
    for(let i=0;i<productCart.productsInTheCart.length;i++){
        for(let j=0;j<productList.length;j++){
            if(productCart.productsInTheCart[i].id == productList[j].id) {
                createArticle(j,0);
            }
        }
    }
}
//------D.O.M FUNCTIONS------//

function clear(opc){
    //clearCatalogSection();
    //clearCatalogMain();
    createSectionTitle(opc);
}
// function clearCatalogSection(){
//     try{
//         while(document.querySelector('article')) sec.removeChild(document.querySelector('article'));
            // sec.removeChild(document.querySelector('h1'));
//         sec.removeChild(document.querySelector('p'));
//         sec.removeChild(document.getElementById('totalPrice')); 
//     }catch{}
// }
// function clearCatalogMain(){
//     try{
//         while(document.querySelector('article')) {
//             try{
//                 outstandigs.removeChild(document.querySelector('h2'));
//                 outstandigs.removeChild(document.querySelector('h4')); 
//                 discounts.removeChild(document.querySelector('h2'));
//                 discounts.removeChild(document.querySelector('h4')); 
//                 tops.removeChild(document.querySelector('h2'));
//                 tops.removeChild(document.querySelector('h4')); 
//                 outstandigs.style.display = 'none';
//                 discounts.style.display = 'none';
//                 tops.style.display = 'none';
//             }
//             catch{}
//             outstandigs.removeChild(document.querySelector('article'));
//         }       
//     } catch{}
//     try{
//         sec.removeChild(document.getElementById('outstandings'));
//         sec.removeChild(document.querySelector('h1'));
//         sec.removeChild(document.querySelector('p'));
//     } catch{}
//     try{
//         while(document.querySelector('article')) discounts.removeChild(document.querySelector('article'));
//     } catch{}

//     try{
//         while(document.querySelector('article')) tops.removeChild(document.querySelector('article'));
//     }catch{}
// }
// function actualizeSection(){
//     let h1 = document.getElementById('sectionTitle').innerHTML;
//     if(h1 == typeList['C']) createCartSection();
//     else if(h1 == typeList['0']) showCatalogMainpage();
//     else for(const [idTitle, sectionTitle] of Object.entries(typeList)) if(h1 == sectionTitle) showCategories(idTitle);
// }


function createArticle(pos,container){ //Graphs any article on the display. Is the most important part of the catalog. Params: (Position of the article in products list, container where the article will be graphed.)
    //----Image of the article----//
    let image = document.createElement('img');
    image.src = productList[pos].image;
    image.style.width = '60%';
    image.style.height ='45%';

    //---Name of the article---//
    let h3 = document.createElement('h3');
    let h3text = document.createTextNode(productList[pos].name);
    h3.appendChild(h3text);
    h3.style.fontSize = '1.5em';
    h3.style.fontSizeAdjust = '0.8';
    /*PRICE*/
   let p = document.createElement('p');
   //let ptext = document.createTextNode("Art. code: "+productList[pos].id+"\n");
   // p.appendChild(ptext);
    let b = document.createElement('b');
    let btext = document.createTextNode(`$${productList[pos].price}`);
    b.appendChild(btext);
    p.style.fontSize = '1.2rem';
    b.style.fontSize = '20px';
    b.style.display = 'block';
    b.style.marginBottom = '2px'
    /*BUTTONS*/
    // Up button changes dependly the product is in the cart or aren't in the cart
    let a = document.createElement('a');
    if(productList[pos].inTheCart){
        let atext = document.createTextNode("Remove from cart");
        a.setAttribute('class','btn_tp1'); 
        a.setAttribute('onclick', `removeFromCart(${pos})`);
        a.appendChild(atext);
    }
    else{
        let atext = document.createTextNode("Add to cart");
        a.setAttribute('class','btn_tp1');
        a.setAttribute('onclick', `addToCart(${pos})`);
        a.appendChild(atext);
    }
    //Bottom button ever will have the same message.
    let a2 = document.createElement('a');
    let a2text = document.createTextNode("Show more info");
    a2.setAttribute('class','btn_tp1');
    a2.appendChild(a2text);
    
    /*------Article-------: The container*/
    let art = document.createElement('article');
    //css
    art.style.width = '20vw';
    art.style.height = '54vh';
    art.style.display = 'inline-block';
    art.style.minHeight = '450px';
    art.style.minWidth = '300px';
    art.style.borderRadius = '1.2em';
    art.style.background= 'linear-gradient(to top, #333,#444,#333)'
    art.style.padding = '3%';
    art.style.margin = '1% 1% 0px 1%';
    //Adds every created in the container.
    art.appendChild(image);
    art.appendChild(h3);
    art.appendChild(p);
    art.appendChild(b);
    art.appendChild(a);
    art.appendChild(a2);

    //External - Adds a little effect for the text on the article. 
    let textShadowStyle = '1px 1px 2px white, 0 0 1em mintcream,0 0 0.2em deepskyblue'; //'1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'
    art.style.textShadow = textShadowStyle;

    //Configures the bockground and other atributes bassed on the product attributes that have activated.
    if(productList[pos].discounted && !productList[pos].top){
        //Discounteds
        let desc = document.createElement('strike');
        let desctext = document.createTextNode(`${productList[pos].discount}% OFF!`);
        desc.style.background = 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)'
        desc.style.font = 'Bold'
        desc.style.display = 'block';
        desc.style.borderRadius = '2em';
        desc.style.textShadow = '1px 1px 2px white, 0 0 1em wheat,0 0 0.2em deepskyblue';            //'1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'
        desc.appendChild(desctext);
        p.appendChild(desc);
        art.style.background = 'linear-gradient(to top, #d3959b, #bfe6ba)';
    }
    else if(productList[pos].top && !productList[pos].discounted){
        //Tops
        let desc = document.createElement('b');
        let desctext = document.createTextNode(`TOP SELLER`);
        desc.style.display = 'block';
        desc.appendChild(desctext);
        p.appendChild(desc);     
    }
    else if (productList[pos].discounted && productList[pos].top){
        //Best choice is an product state where the product is in discount and is a top product at same time.
        let desc = document.createElement('strike');
        let desctext = document.createTextNode(`${productList[pos].discount}% OFF BEST CHOICE!`);
        desc.style.background = 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)';
        desc.style.borderRadius = '2em';
        desc.style.font = 'Bold';
        desc.style.fontSize = '1rem';
        desc.style.display = 'block';
        desc.appendChild(desctext);
        p.appendChild(desc);
        art.style.background = 'linear-gradient(to top, #A57C01, #B79001,#FFDF01,#EDCB01,#DBB701,#C9A401)';
        //art.style.background = 'wheat';

         //External
         let textShadowStyle = '1px 1px 2px white, 0 0 1em wheat,0 0 0.2em rgb(79,171,127)'; //'1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'
         desc.style.textShadow = '1px 1px 2px white, 0 0 1em wheat,0 0 0.2em gold';            //'1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue'
         h3.style.textShadow = textShadowStyle;           
         p.style.textShadow = textShadowStyle;            
         b.style.textShadow = textShadowStyle;   
    }
    else{
        //If the product have none premium categories. Normal product. 
        let desc = document.createElement('b');
        let desctext = document.createTextNode(`Try now!`);
        desc.appendChild(desctext);
        desc.style.display = 'block';
        p.appendChild(desc);
    }
    //Set the product into any container by container number.
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
} //end
function liClick(){  //Categories list hidden or not hidden.
    // if(doc.style.display=="block") doc.style.display="none";  
    // else doc.style.display="block";
 
    doc.style.display == 'block' ? doc.style.display="none" : doc.style.display="block";
}



//---------CODE OF THE PAGE--------//
for(let i = 0; i<listCategories.length;i++){
    let a = document.createElement('a');
    let aText = document.createTextNode(listCategories[i]);
    a.appendChild(aText);
    a.setAttribute('class','btn_tp2');
    a.setAttribute('onclick',`showCategories(${i+1})`);
    doc.appendChild(a);
}