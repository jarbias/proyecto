import Cl_mTienda  from "./Cl_mtienda.js";
import Cl_mclientes from "./Cl_mclientes.js";
import Cl_vTienda from "./Cl_vtienda.js";
import Cl_vClientes from "./Cl_vclientes.js";
export default class Cl_controlador {
    constructor() { 
        this.mTienda = new Cl_mTienda();
        this.vClientes = new Cl_vClientes(this);
        this.vTienda = new Cl_vTienda(this);
    }
    mostrarVistaClientes() {
        this.vTienda.ocultar();
        this.vClientes.mostrar();
    }

    mostrarVistaTienda() {
        this.vClientes.ocultar();
        this.vTienda.mostrar();
    }

    agregarCliente({cedula, codigo, cantidad}) {
        let cliente = new Cl_mclientes({cedula, codigo, cantidad});
        this.mTienda.procesarCliente(cliente);
        this.vTienda.reportarcliente({
            cedula: cliente.this.cedula,
            codigo: cliente.this.codigo,
            cantidad: cliente.this.cantidad,
            montoPagar: cliente.montoPagar(),
            MayorArtVendido: this.mTienda.MayorArtVendido(),
            TotalVentas: this.mTienda.TotalVentas()
        });
        this.mostrarVistaTienda();
        }
}