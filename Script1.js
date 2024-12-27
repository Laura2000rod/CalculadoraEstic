var segundoTexto = false;
var operador = "";

function Sumar() {
    segundoTexto = true;
    operador = "+";
    //alert("El resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
}
function Restar() {
    segundoTexto = true;
    operador = "-";
    //alert("El resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
}
function Multiplicar() {
    segundoTexto = true;
    operador = "x"
    //alert("El resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
}
function Dividir() {
    segundoTexto = true;
    operador = "/"
    //alert("El resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
}

function Escribir(numBoton) {
    if (!segundoTexto) {
        txtNum1.value += numBoton;
    }
    if (segundoTexto) {
        txtNum2.value += numBoton;
    }
}

function operacion() {
    if (operador == "+") {
        alert("El resultado es = " + (Number(txtNum1.value) + Number(txtNum2.value)));
    }
    if (operador == "-") {
        alert("El resultado es = " + (Number(txtNum1.value) - Number(txtNum2.value)));
    }
    if (operador == "x") {
        alert("El resultado es = " + (Number(txtNum1.value) * Number(txtNum2.value)));
    }
    if (operador == "/") {
        alert("El resultado es = " + (Number(txtNum1.value) / Number(txtNum2.value)));
    }
}
function Borrar() {
    txtNum1.value = "";
    txtNum2.value = "";

    segundoTexto = false;
    operador = "";
}