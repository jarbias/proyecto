export default class Cl_vTienda {
    constructor(controlador) {
       this.vista = document.getElementById("mainform");
       this.tabla = document.getElementById("mainform_tabla");
       this.btagregar = document.getElementById("mainform_btagregar");
       this.lbltotal = document.getElementById("mainform_lbltotal");
       this.lblmayor = document.getElementById("mainform_lblmayor");
      this.lbltotalventas = document.getElementById("mainform_lbltotalventas");
      this.btagregar.onclick = () => controlador.mostrarVistaClientes();
       }
    mostrar() {
      this.Cl_Tienda.hidden = false;
      this.Cl_vClientes.hidden = true;
    }

    ocultar() {
      this.Cl_vTienda.hidden = true;
      this.Cl_vClientes.hidden = false;
    }
     reportarcliente({
      cedula,
      cantidad,
      codigo,
      montoPagar,
      MayorArtVendido,
      TotalVentas,

    }){
      this.tabla.innerHTML += `<tr>
      <td>${cedula}</td>
      <td>${cantidad}</td>
      <td>${codigo}</td>
      <td>${montoPagar}</td>
      <td>${MayorArtVendido}</td>
      <td>${TotalVentas}</td>
      </tr>`
      
      this.lbltotal.innerHTML = TotalVentas;
      this.lblmayor.innerHTML = MayorArtVendido;
      this.lbltotalventas.innerHTML = TotalVentas;

    }
}