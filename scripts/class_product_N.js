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


//INSERT INTO `tblproduct`(`prod_name`, `prod_value`, `prod_desc`, `prod_type`, `prod_img`, `outstanding`, `discounted`, `discount`, `top`, `avaliable_units`) VALUES ('Carpa Bugisoft','828000','Carpa azul de bugisoft',1,'https://i.linio.com/p/1cde50daa2453865023d25b0bcdb3b51-product.jpg',false,false,0,false,18)
var randomProduct =()=> { return  productList[Math.floor(Math.random() * productList.length)];}  // Get random product depending of the large of the obj. product Array.
var getRandomInt = (min, max)=> { min = Math.ceil(min); max = Math.floor(max); //Get a random number above min(included) & under the max (not included).
    return Math.floor(Math.random() * (max - min) + min); }       // The maximum is exclusive and the minimum is inclusive

/*-------------GLOBAL VARIABLES------------*/
var productList = [], outstandigProductsList = [], discountedProductsList = [], topProductsList = [];
var liList = ["text","Buy cart"];
var listCategories = ["Carps","Backpacks - Legpacks","Shoes", "Fishing Rods", "Watterproof vest","Supervivence kits","Bikepacking"];
var typeList = {'C':"The BuyCart",
                0:"Welcome to our catalog!",
                1:"Carps", 
                2:"Backpacks - Legpacks",
                3:"Shoes",
                4: "Fishing Rods",
                5: "Watterproof vest",
                6: "Supervivence kits",
                7: "Bikepacking"};
var typeDesc = {'C':"Your products in the cart",
                0:"Explore and buy!",
                "Carps":"Camping above the cup of the trees.",
                "Backpacks - Legpacks": "Spacefull backpacks. Save everything you find.",
                "Shoes": "Walk safe and run faster.",
                "Fishing Rods": "Fish the sharks!",
                "Watterproof vest": "Stay safe from rain or shine",
                "Supervivence kits": "Usefull equipment for every ocassion.",
                "Bikepacking": "Are designed to travel are usually made of resistant materials"}
var outstandigDescriptions = ["QUALITY GARANTED", "EXCELENT PRODUCT", "100% GARANTED", "UNIC OPORTUNITY"];

let articlesDOM = [];

//Controllers
let divoutstandings = document.getElementById('outstandings');
let divdiscounts = document.getElementById('discounts');
let normalproducts = document.getElementById('normalproducts');
let categoryproducts = document.getElementById('categoryproducts');


let div_category_products = document.getElementById('div_category_products');
let div_outstanding_products = document.getElementById('div_outstanding_products');
let div_discounted_products = document.getElementById('div_discounted_products');
let div_normal_products = document.getElementById('div_normal_products');
let h2_categoryprod = document.getElementById('h2_categoryprod');
let h4_categoryprod = document.getElementById('h4_categoryprod');

let articles = document.getElementsByClassName('product');

var ban = true;
var aliclick = document.getElementById('aliclick');
var divCat = document.getElementById('divCat');

var btnMainCat = document.getElementById('btnMainCat');


//buycart
var buycartHasOpen = false;
const btnBuyCart = document.getElementById('btnBuyCart');
var div_buycart = document.getElementById('div_buycart');

//Dom
btnMainCat.addEventListener('click', function(){
    if(!ban){
        partialCharge();
    }
});
aliclick.addEventListener('click',function(){
    divCat.style.display == 'block' ? divCat.style.display = 'none' : divCat.style.display = 'block';
});

//---------ON LOAD----------//
onload = firstLoad;

/*-------------Buycart------------*/

btnBuyCart.addEventListener('click', function(){ //<-------------------
    if(localStorage.getItem('activeUser')!=null){
        buycartHasOpen = true;
        ban= false;
        divoutstandings.style.display = 'none';
        divdiscounts.style.display = 'none';
        normalproducts.style.display = 'none';
        categoryproducts.style.display = 'none';
        div_buycart.style.display = 'block';
        
        let data = JSON.parse(localStorage.getItem('activeUser'));
        for(let i = 0; i<data.buyCart.length;i++){
            console.log(data.buyCart[i].producto);
            console.log(data.buyCart[i].producto.id)
            
        }
    }
    else alert("Usuario nulo")

});


//-------------Functions--------------//
/* Products */
function partialCharge(){
    if(!ban && buycartHasOpen){
        buycartHasOpen = false;
        div_buycart.style.display = 'none';
        categoryproducts.style.display = 'none';
        divoutstandings.style.display = 'block';
        divdiscounts.style.display = 'block';
        normalproducts.style.display = 'block';  
    }
    else if(!ban && !buycartHasOpen){
        div_buycart.style.display = 'none';
            categoryproducts.style.display = 'none';
            divoutstandings.style.display = 'block';
            divdiscounts.style.display = 'block';
            normalproducts.style.display = 'block';
            firstLoad();
    }
}


function firstLoad(){
    for(let product of productList){
        let article = document.createElement('article');
        article.setAttribute('class','product');
        let frontDiv = document.createElement('div');
        frontDiv.setAttribute('class','frontDiv');
        /**title */
        let h4 = document.createElement('h4');
        h4.setAttribute('class','productName');
        let h4text = document.createTextNode(product.name);
        h4.appendChild(h4text);
        frontDiv.appendChild(h4);
        /*Image */
        let image = document.createElement('img');
        image.src = product.image;
        image.setAttribute('class','productImage');
        image.setAttribute('alt','ProductImage');
        frontDiv.appendChild(image);
    
        /**EventS */
        let productEvent = document.createElement('div');
        productEvent.setAttribute('class','productEvent');
    
        frontDiv.appendChild(productEvent);
        
    
        /**Controllers */
        let controllersDiv = document.createElement('div');
        controllersDiv.setAttribute('class', 'productControllers');
    
        let priceDiv = document.createElement('div');
    
        /**Num Input */
        let cantInput = document.createElement('input');
        cantInput.setAttribute("type","number");
        cantInput.setAttribute('min',1);
        cantInput.setAttribute('max',product.avaliable_units);
        cantInput.setAttribute('value',1);
        priceDiv.appendChild(cantInput);
    
        /**Price */
        let b = document.createElement('b');
        b.innerHTML = ` x ${cantInput.value * product.price}`;
    
        /**num x price */
        cantInput.addEventListener('input',()=>{
            var max = product.avaliable_units;
            var min = 1;
            var value = cantInput.value;
            b.innerHTML= ` x ${cantInput.value * product.price}`;
            // console.log(product.avaliable_units);
            // console.log(value > max);
            // if(value < max){
            //     cantInput.value = product.avaliable_units;
            //     b.innerHTML = ` x ${product.price * product.avaliable_units}`; //Previene superar el precio de las unidades maximas
            // }
            if(value < min){
                cantInput.value = 0;
                b.innerHTML = " x 0"
            }
        });
    
        priceDiv.appendChild(b);
        controllersDiv.appendChild(priceDiv);
        
    
        let btnSeeInfo = document.createElement("input");
        btnSeeInfo.setAttribute('type',"button");
        btnSeeInfo.setAttribute('class','btn_tp2');
        btnSeeInfo.value = "See Info";
        controllersDiv.appendChild(btnSeeInfo);
        btnSeeInfo.addEventListener('click',()=>{
            frontDiv.style.display = 'none';
            backDiv.style.display = 'block';
            console.log(backDiv.style.display);
            console.log(product);
        });
    
        let btnAddToCart = document.createElement('input');
        btnAddToCart.setAttribute('type',"button");
        btnAddToCart.setAttribute('class','btn_tp2');
        btnAddToCart.value = "Add To cart";
        
        btnAddToCart.addEventListener('click', ()=>{
            if(localStorage.getItem('activeUser')!=null){
                    let data = JSON.parse(localStorage.getItem('activeUser'));
                    let buyCart = data.buyCart;
                    let item ={ producto: product,
                                cantidad: cantInput.value,
                                valor: cantInput.value * product.price }
                    buyCart.push(item);
                    data.buyCart = buyCart;
                    localStorage.setItem('activeUser',JSON.stringify(data));  


                    

                }
                else alert("You must log in before adding products to the cart");
            });
            
        controllersDiv.appendChild(btnAddToCart);
        frontDiv.appendChild(controllersDiv);
        
    
        /**------Backdiv--------*/
        let backDiv = document.createElement('div');
        backDiv.setAttribute('class','backDiv');
    
        let h4back = document.createElement('h4');
        h4back.innerHTML = 'Description';
        backDiv.appendChild(h4back);
    
        let divDescription = document.createElement('div');
        divDescription.setAttribute('class','productDescription');
    
    
        let pback = document.createElement('p');
        pback.innerHTML = product.description;
        divDescription.appendChild(pback);
        backDiv.appendChild(divDescription);
    
        let pid = document.createElement('p');
        pid.innerHTML = product.id;
        pid.setAttribute('class','pid');
        backDiv.appendChild(pid);

    
        let pAvaliableUnits = document.createElement('b');
        pAvaliableUnits.innerHTML = `Avaliable units: ${product.avaliable_units}`;
        pAvaliableUnits.setAttribute('class','productAvaliableUnits');
        backDiv.appendChild(pAvaliableUnits);
    
        let btnBack = document.createElement('input');
        btnBack.setAttribute('type','button');
        btnBack.setAttribute('value','Go back');
        btnBack.setAttribute('class','btn_tp2 btnBack');
        btnBack.addEventListener('click', function(){
            backDiv.style.display = 'none';
            frontDiv.style.display ='block';        
        });
    
        let typeHidden = document.createElement('p');
        typeHidden.innerHTML = product.type;
        typeHidden.setAttribute('class','productType');
        article.appendChild(typeHidden);
    
        //-----------EVENTS---------//
    
        if(product.outstandig){
            let outstanded = document.createElement('div');
            outstanded.setAttribute('class','outstanded');
            let boutstanded = document.createElement('b');
            boutstanded.innerHTML = outstandigDescriptions[getRandomInt(0,outstandigDescriptions.length)];
            outstanded.appendChild(boutstanded);
            productEvent.appendChild(outstanded);
        }
        //discounted
        if(product.discounted){
            let discounted = document.createElement('div');
            discounted.setAttribute('class','discounted');
            let bdiscounted = document.createElement('b');
            bdiscounted.innerHTML = `NOW <strike>${product.discount}%</strike> OFF`;
            discounted.appendChild(bdiscounted);
            productEvent.appendChild(discounted);
        }
    
        backDiv.appendChild(btnBack);
        article.appendChild(backDiv);
        article.appendChild(frontDiv);
        
        //--------Distribution-------//
        if(product.outstandig && !product.discounted) 
            div_outstanding_products.appendChild(article);
        else if(product.discounted && !product.outstandig)
            div_discounted_products.appendChild(article);
        else if(product.outstandig && product.discounted)
            div_outstanding_products.appendChild(article);
        else div_normal_products.appendChild(article);

        ban = true;
    }
}

async function loadBD(){
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
                    productList.push(new_prod);                    
                });
            }
            else console.log('No hay artículos en la base de datos');           
        },
        error: function(xhr){
            alert("estás ejecutandolo desde el lado del cliente, por lo que no se cargarán los datos del servidor. err-->" +xhr.responseText);
        }
    });
}

loadBD();

//-------------Code-----------//
console.log(productList)


for (let text of listCategories){
    let a = document.createElement('a');
    let atext = document.createTextNode(text);
    a.setAttribute('class','btn_tp1');
    a.appendChild(atext);

    a.addEventListener('click',()=>{
        ban = false;
        divoutstandings.style.display = 'none';
        divdiscounts.style.display = 'none';
        normalproducts.style.display = 'none';
        categoryproducts.style.display = 'block';

        h2_categoryprod.innerHTML = text;
        h4_categoryprod.innerHTML = typeDesc[text];
        
        for(let product of articles){
            let tp = product.querySelector(".productType").innerHTML;
            if(tp != text) product.style.display = 'none';
        }
        
        for(let product of articles){
            let tp = product.querySelector(".productType").innerHTML;    
            if(tp == text){
                div_category_products.appendChild(product);
                product.style.display = 'block';
            }
        }
    });
    divCat.appendChild(a);
}


