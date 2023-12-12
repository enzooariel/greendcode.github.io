
function redirigirAPago() {
    window.location.href = "pago.html";
}
/* -------------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    


    let submenu = document.getElementById("submenu");

        submenu.addEventListener("click",(e=>{
            console.log("console desde el hover")
            let modal = document.getElementById("modal");
            console.log(modal)
            modal.classList.toggle('cerrar')
            submenu.classList.toggle('bgc')
            document.getElementById("modal").appendChild(totalCompra);
        }));


// MODALEEEEEEEEES

//Modales 0

const openModal0 = document.querySelector('.prod__cta0');
const modal0 = document.querySelector('.modal-0');
const closeModal0 = document.querySelector('.modal__close0');


openModal0.addEventListener('click', (e) => {
    e.preventDefault();
    modal0.classList.add('modal--show');
});

closeModal0.addEventListener('click', (e) => {
    e.preventDefault();
    modal0.classList.remove('modal--show');
});


//Modales 1

const openModal = document.querySelector('.prod__cta');
const modal1 = document.querySelector('.modal-1');
const closeModal = document.querySelector('.modal__close');


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal1.classList.add('modal--show');

    // Se Agrega timeout de 10 segundos para cerrar el modal automáticamente
    setTimeout(() => {
        modal1.classList.remove('modal--show');
    }, 10000); // 10000 milisegundos = 10 segundos
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal1.classList.remove('modal--show');
});

//Modales 2

const openModal2 = document.querySelector('.prod__cta2');
const modal2 = document.querySelector('.modal-2');
const closeModal2 = document.querySelector('.modal__close2');


openModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.add('modal--show');

    // Se Agrega timeout de 10 segundos para cerrar el modal automáticamente
    setTimeout(() => {
        modal2.classList.remove('modal--show');
    }, 10000); // 10000 milisegundos = 10 segundos
});

closeModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal2.classList.remove('modal--show');
});

//Modales 3

const openModal3 = document.querySelector('.prod__cta3');
const modal3 = document.querySelector('.modal-3');
const closeModal3 = document.querySelector('.modal__close3');


openModal3.addEventListener('click', (e) => {
    e.preventDefault();
    modal3.classList.add('modal--show');

    // Se Agrega timeout de 10 segundos para cerrar el modal automáticamente
    setTimeout(() => {
        modal3.classList.remove('modal--show');
    }, 10000); // 10000 milisegundos = 10 segundos
});

closeModal3.addEventListener('click', (e) => {
    e.preventDefault();
    modal3.classList.remove('modal--show');
});



/* -------------------------------------------------------------------------------- */


function EliminarItem(){
    console.log("Click desde Eliminar Item")
   // document.getElementsByClassName("carrito").remove(posicion)
}

const carrito = [];
const sumaTotal = [];
let suma = 0;
let operador = 0;

const producto = [
    {
        id:0,
        nombre:"Jugo Ades",
        Descripcion:"Bebibas",
        img:"img/pr1.png",
        precio:200,

    },
    {
        id:1,
        nombre:"Yogurt Light Fresa",
        Descripcion:"Bebidas",
        img:"img/pr2.png",
        precio:2040,

    },
    {
        id:2,
        nombre:"Galletas 0% grasas",
        Descripcion:"Dulces",
        img:"img/pr3.png",
        precio:2100,

    },
    {
        id:3,
        nombre:"Ades sabor Uva",
        Descripcion:"Bebidas",
        img:"img/pr4.png",
        precio:1300,

    },
    {
        id:4,
        nombre:"Choco Carlos 0% gra",
        Descripcion:"Dulces",
        img:"img/pr5.png",
        precio:6100,

    },
    {
        id:5,
        nombre:"Frutos Secos Vegan",
        Descripcion:"Frutas y Vegetales",
        img:"img/pr6.png",
        precio:1300,

    },
    {
        id:6,
        nombre:"Gamesa Coockie",
        Descripcion:"Dulces",
        img:"img/pr7.png",
        precio:7300,

    },
    {
        id:7,
        nombre:"Leche Vegetal",
        Descripcion:"Bebidas",
        img:"img/pr8.png",
        precio:900,

    },
    {
        id:8,
        nombre:"Chocolate Vegan",
        Descripcion:"Dulces",
        img:"img/pr9.png",
        precio:5400,

    },
    {
        id:9,
        nombre:"CRUNCH 0% grasa",
        Descripcion:"Dulces",
        img:"img/pr10.png",
        precio:700,

    },
    {
        id:10,
        nombre:"Elote light",
        Descripcion:"Frutas y Verduras",
        img:"img/pr11.png",
        precio:400,

    },
    {
        id:11,
        nombre:"Zanahoria seca",
        Descripcion:"Frutas y Verduras",
        img:"img/pr12.png",
        precio:800,
    },
   
];    

/* Funcionalidad para generar los productos desde javascript (Comprar) */

producto.forEach( element => {
    let ps = document.createElement("span")

    ps.innerHTML = (
        
        `<div class="box">
        <img src=${element.img} alt="">
        <div class="product-txt">
        <h3>${element.nombre}</h3>
        <p>${element.Descripcion}</p>
        <p class=precio>${element.precio}</p>
        <button href="#" class=" AgregarCarrito agregar-carrito  btn-3" data-id="1">
        Agregar al carrito
        </button>
        </div>
        </div>`
        )
        document.getElementById("lista-1").appendChild(ps)
});         


const Eliminar = document.getElementsByClassName("Eliminar");








let totalCompra = document.createElement("p");




/* Funcionalidad del boton para agregar al carrito (Comprar) */
const AgregarCarrito = document.getElementsByClassName("AgregarCarrito");
for(const x in AgregarCarrito){

    
    AgregarCarrito[x].addEventListener("click", (e=>{
        let productoI = producto[x] 
        carrito.push(productoI.nombre )
        console.log(carrito)

        let span = document.createElement("span")
        

    for(const w in carrito){
        console.log(w);
        operador = w;

        span.innerHTML = 
        (`<div id=${w} class="productosLista">
        <img class=img-modal src=${productoI.img} alt="">
        <h4 class="titulo">${productoI.nombre}</h4>
        <p>${productoI.Descripcion}</p>
        <p>${productoI.precio}</p>
        <button   class="Eliminar" >X</button>
        </div>`);
        
    }
    suma += productoI.precio
    
    totalCompra.innerHTML = `<div id="suma">Precio total ${suma}</div>
                              <div id="eliminarTodo">
                              <button id="pasarela" onclick="redirigirAPago()">Continuar pago</button>
                             </div>`;
    
    sumaTotal.forEach(elemento =>{
        suma += elemento;
        
    })
    
    
    document.getElementById("modal").appendChild(span);

    
    var listita =  document.getElementsByClassName("productosLista");


    
    
            for(let d in listita){
                console.log(d, listita)
                for( const y in Eliminar){
                    Eliminar[y].addEventListener("click", (e=>
                        {
                            let productoLista = listita[y]

                            let modal = document.getElementById("modal");
                            
                            document.getElementById(y).remove()
                            carrito.pop(y);
                       

                            suma-=productoI.precio;
                       
                            totalCompra.innerHTML = `<div id="suma">Precio total: ${suma}</div>`;




                        }
                        )
                    )
                };
            }
        

    }));

};



});

