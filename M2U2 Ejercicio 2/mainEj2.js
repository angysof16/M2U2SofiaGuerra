const
    A = document.getElementById('numberOne'),
    B = document.getElementById('numberTwo'),
    C = document.getElementById('numberThree'),
    D = document.getElementById('numberFour'),
    button = document.getElementById('button'),
    textoMayor = document.getElementById('numMayor'),
    textoMenor = document.getElementById('numMenor')
    

button.addEventListener('click', ()=>{
    if((A.value == B.value) || (A.value == C.value) || (A.value == D.value)){
    alert("Debes ingresar números distintos entre si")
}else if((B.value == C.value) || (B.value == D.value)){
    alert("Debes ingresar números distintos entre si")
}else if(C.value == D.value){
    alert("Debes ingresar números distintos entre si")
}else{
    let numMayor = Math.max(A.value, B.value, C.value, D.value)
    if(numMayor == A.value){
        textoMayor.innerHTML = 'El número mayor es ' + numMayor
    }else if(numMayor == B.value){
        textoMayor.innerHTML = 'El número mayor es ' + numMayor
    }else if(numMayor == C.value){
        textoMayor.innerHTML = 'El número mayor es ' + numMayor
    }else if(numMayor == D.value){
        textoMayor.innerHTML = 'El número mayor es ' + numMayor
    }

    let numMenor = Math.min(A.value, B.value, C.value, D.value)
    if(numMenor == A.value){
        textoMenor.innerHTML = 'El número menor es ' + numMenor
    }else if(numMenor == B.value){
        textoMenor.innerHTML = 'El número menor es ' + numMenor
    }else if(numMenor == C.value){
        textoMenor.innerHTML = 'El número menor es ' + numMenor
    }else if(numMenor == D.value){
        textoMenor.innerHTML = 'El número menor es ' + numMenor
    }
}
})