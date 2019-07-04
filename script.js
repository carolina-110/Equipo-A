


let respuesta;


function deshabilitar() {
    op1 = document.getElementById("velocidad").value;
    op2 = document.getElementById("distancia").value;
    op3 = document.getElementById("tiempo").value;

    op4 = document.getElementById("aceleracion").value;
    op5 = document.getElementById("vi").value;
    op6 = document.getElementById("vf").value;
    op7 = document.getElementById("time").value;


    if (op1 !== "" && op2 !== "") {
        document.getElementById("tiempo").disabled = true;
    } else if (op3 !== "" && op2 !== "") {
        document.getElementById("velocidad").disabled = true;
    } else if (op3 !== "" && op1 !== "") {
        document.getElementById("distancia").disabled = true;

    } else if (op4 !== "" && op5 !== "" && op6 !== "") {
        document.getElementById("time").disabled = true;
    }
    else if (op5 !== "" && op6 !== "" && op7 !== "") {
        document.getElementById("aceleracion").disabled = true;
    }
    else if (op6 !== "" && op7 !== "" && op4 !== "") {
        document.getElementById("vi").disabled = true;
    }
    else if (op7 !== "" && op4 !== "" && op5 !== "") {
        document.getElementById("vf").disabled = true;
    }


}



function velocidadF() {

    if (op1 === "") {
        resultado = op2 / op3;
        return resultado

    } else if (op2 === "") {
        resultado = op1 * op3

        return resultado
    } else {
        resultado = op2 / op1
        return resultado
    }

}
 (vf-v1)/t


function aceleracion(){
    if (op4 === "") {
        resultado = (op6 - op5)/math.pow(op7,2)
        return resultado
}


function imprimirRespuesta() {
    document.getElementById('respuesta').innerHTML = velocidadF();
}



// op4 = document.getElementById("aceleracion").value;
// op5 = document.getElementById("vi").value;
// op6 = document.getElementById("vf").value;
// op7 = document.getElementById("time").value;