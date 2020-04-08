//DOM
// querySelectorAll
/*let links = document.querySelectorAll("a");
links.forEach(function(link){
    console-log(link);
}); 

let celdas = document.querySelector("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});
*/

//Obtener los elementos de la clase .close
let links = document.querySelector(".close");


//recorrerlos
links.forEach(function(link) {
    


// Agregar un evento click a cada uno de ellos
 link.addEventListener("Click",function(ev){
 ev.preventDefault(); 
let content = document.querySelector('.content');

content.classList.remove("fadeInDown");
content.classList.remove("animated");

content.classList.add("dadeOutUp");
content.classList.add("animated");


setTimeout(function(){
    location.href = "/BACI";

},600);

return false;
 });

});

let iconos = document.querySelector("i");
iconos.forEach(function(icono){

})

