alert("Compra nuestros cursos!")
let precioGeometria = document.getElementById("geo")
precioGeometria = parseInt(precioGeometria)

const cursosMatematica = [
    {curso:"Geometria", duracion:"8 semanas", precio:520},
    {curso:"Algebra", duracion:"7 semanas", precio:550},
    {curso:"Aritmetica", duracion:"10 semanas", precio:575},
    {curso:"Trigonometria", duracion:"5 semanas", precio:580},
    {curso:"Razonamiento Matematico", duracion:"9 semanas", precio:600},
    {curso:"Fisica Elemental", duracion:"6 semanas", precio:545}
]


const carrito = []

let eleccion = prompt("¿Desea adquirir algun curso (si) o (no)?")
while(eleccion != "si" && eleccion != "no"){
    alert('Responda solo con "si" o "no"')
    eleccion = prompt("¿Desea adquirir algun curso (si) o (no)?")
}

if(eleccion == "si"){
    alert("Le mostraremos los cursos disponibles")
    let listaCursos = cursosMatematica.map(
        (cursosMat) => "- "+cursosMat.curso + " " + "$"+ cursosMat.precio +"\n"
    );
    alert(listaCursos.join(""))
} else if (eleccion == "no"){
    alert("Gracias!")
}

while(eleccion != "no"){
    let cursosMat = prompt("Agrega un curso a tu carrito")


    let cursoEncontrado = cursosMatematica.find((item) => item.curso == cursosMat)
    if(cursoEncontrado != undefined){
        let usuarios = parseInt(prompt("¿Para cuántos usuarios?"))

        carrito.push({nombre:cursosMat, cantidad:usuarios, precio:cursoEncontrado.precio})
        console.log(carrito)
    } else{
        alert("No tenemos ese curso")
    }

    eleccion = prompt("¿Desea seguir comprando? si/no ")
    if(eleccion === "no"){
        alert("Gracias por su compra, Nos vemos ...")
        carrito.forEach((carritoFinal)=> {
            console.log( `cursosMat: ${carritoFinal.curso}, usuarios ${carritoFinal.cantidad}, total a pagar: ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`El total a pagar por su compra es : ${total}`)


