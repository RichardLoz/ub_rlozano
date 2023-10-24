const Marcas = '{"marcas": ' +
'[' +
'{"Marca":"Honda"},' +
'{"Marca":"Yamaha"},' +
'{"Marca":"Kawasaki"},' +
'{"Marca":"Ducati"},' +
'{"Marca":"Suzuki"},' +
'{"Marca":"BBB"}' +
']' +
'}';

const concesionaria = JSON.parse(Marcas)
console.log('Mercadorias: ', concesionaria);

const opcionesMarca = () => {
    concesionaria.marcas.forEach(function(argValor, argIndice) {
        const objOpcion = document.createElement("option")
        objOpcion.setAttribute("className", "elementoOptionSelect")
        objOpcion.setAttribute("value", argValor.Marca)
        objOpcion.innerHTML = argValor.Marca
        document.getElementById("marca").appendChild(objOpcion)
    })
}

$(document).ready(function (){
    opcionesMarca()
})