function registrarNombre() {
    name = document.getElementById('nombremateria').value;
}

function registrarMateria() {
    total = 0;
    materias = document.getElementById('materias').value;
    for (let i = 0; i < materias; i++) {
	total += parseFloat(window.prompt('valor de la materia ' + (i + 1) ,"0"));
    }
    descuento = total * 20 / 100
    total = 28000 + total - descuento
    alert('El total a pagar de su matricula es: $' +  total);
}

const textoF = document.getElementById('datos');

textoF.innerHTML = 'Nombre: ' + name 
