rose
class pack{
    constructor(id,weight,destination){
        this.id=id;
        this.weight=weight;
        this.destination=destination;

    }
}

class shipment{
    constructor(id,pack,status,courier){
        this.id=id;
        this.pack=pack;
        this.status=status;
        this.courier=courier;

    }
}

class courier{
    constructor(id,name,vehical){
        this.id=id;
        this.name=name;
        this.vehical=vehical;

    }
}


class ShippingCompany{

    Packages={};
    Shipments={};
    Couriers={};
    Shipments={};
    constructor(packages,shipments,couriers){
        this.packages=packages;
        this.shipments=shipments;
        this.couriers=couriers;
    }

    addPacakages(p){
        this.Packages[p.id]=p;
    }

    viewAllPackages(){
        // console.log("check")
        for(let i=1;i<=Object.keys(this.Packages).length;i++){
        // console.log("check")
            console.log(S.Packages[i]);
        }
    }

    registerCourier(c){
        this.Couriers[c.id]=c;
    }

    viewCourierinfo(id){
        console.log(this.Couriers[id]);
    }

    storeShipments(s){
        this.Shipments[S.id]=S;
    }
    
    trackShipment(sid){
        console.log(this.Shipments[sid]);
    }
    updateStatus(sid){
        this.Shipments[sid].status="Delivered"
    }
    
}

let S = new ShippingCompany();
let p1=new pack(1,"20kg","Kolhapur");
let p2=new pack(2,"20kg","Kolhapur");
let p3=new pack(3,"20kg","Kolhapur");
S.addPacakages(p1);
S.addPacakages(p2);
S.addPacakages(p3);
// console.log(S.Packages[2]);
S.viewAllPackages();

let c1 = new courier(1,"p2p","Ashok Leyland");
console.log("Couriers Info:\n")
S.registerCourier(c1);

//Showing courer info using id
S.viewCourierinfo(1);

let shipment1 = new shipment(1,[p1,p2],"In Transit", c1);
console.log("Shipment info:\n",shipment1);
// shipment1.status="delivered"
// console.log("S
// hipment info:\n",shipment1);
S.storeShipments(shipment1);
S.trackShipment(1);



