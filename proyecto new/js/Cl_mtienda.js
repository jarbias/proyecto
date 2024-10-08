export default class Cl_mTienda {
    constructor() {	
        this.acventas = 0;
        this.cntproductoA = 0;
        this.cntproductoB = 0;
        this.cntproductoC = 0;
        this.mayor = 0;

    }


    procesarCliente(cliente) {
        this.acventas += cliente.montoPagar();
        if (this.cntproductoA > this.cntproductoB && this.cntproductoA > this.cntproductoC) {
            this.cntproductoA++;
            this.mayor = this.cntproductoA;
        } else if (this.cntproductoB > this.cntproductoA && this.cntproductoB > this.cntproductoC) {
            this.cntproductoB++;
            this.mayor = this.cntproductoB;
        } else if (this.cntproductoC > this.cntproductoA && this.cntproductoC > this.cntproductoB) {
            this.cntproductoC++;
            this.mayor = this.cntproductoC;
            
        }
    }

    TotalVentas() {
        return this.acventas;
    }

    MayorArtVendido() {
        return this.mayor;
    }
}	