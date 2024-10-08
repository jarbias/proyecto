export default class Cl_vClientes {
    constructor(controlador) {
        this.vista = document.getElementById("clientesform");
        this.incedula = document.getElementById("clientesform_incedula");
        this.incantidad = document.getElementById("clientesform_incantidad");
        this.inprecio = document.getElementById("clientesform_inprecio");
        this.incodigo = document.getElementById("clientesform_incodigo");
        this.btaceptar = document.getElementById("clientesform_btaceptar");
         this.btaceptar.onclick = () => 
            controlador.agregarCliente({
                cedula: this.incedula.value,
                codigo: this.incodigo.value,
                 cantidad: this.incantidad.value
             
         });
         this.ocultar();
    }

    ocultar() {
        this.vista.hidden = true;
    }

    mostrar() {
        this.vista.hidden = false;

    }

}