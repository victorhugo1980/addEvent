/* function change() {
    // document.getElementsByTagName("H2") returns a NodeList of the <h2>
    // elements in the document, and the first is number 0:

    var header = document.getElementsByTagName("h1").item(0);
    // the firstChild of the header is a Text node:
   // header.firstChild.data = "Página dinámica";
    header.style.color="red";
    

    var para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "Este es el primer párrafo.";

    // create a new Text node for the second paragraph
    var newText = document.createTextNode("Este es el segundo párrafo");
    // create a new Element to be the second paragraph
    var newElement = document.createElement("p");
    // put the text in the paragraph
    newElement.appendChild(newText);
    // and put the paragraph on the end of the document by appending it to
    // the BODY (which is the parent of para)
    para.parentNode.appendChild(newElement);
  }
 */
/* 
  let agregadoJS=true;
  let agregadoJQ= false;
  let parrafo= document.getElementsByTagName("p").item(0)
  let textoJS= "Texto jsScript";
  let textoJQ="Texto JQ";


let botones= document.getElementById("#boton");
botones.addEventListener("click",agregarParrafo);
//botones[1].addEventListener("click",agregarParrafoJQ);


function agregarParrafo(){
  alert("hola");

}

var nuevoContenido = document.createTextNode(textoJS);
var nuevoParrafo= document.createElement("p");
nuevoParrafo.appendChild(nuevoContenido);
parrafo.parentNode.appendChild(nuevoParrafo); */

/* var boton= document.getElementById("boton");
boton.addEventListener("click", mensaje());

function mensaje(){
  alert("hola");
} */

document.getElementById('boton').addEventListener('click',function(){
  document.write("hola como estas");
})

