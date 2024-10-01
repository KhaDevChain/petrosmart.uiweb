import { Chain } from "../mvvm/models/Chain";

const sso = "https://api2.v2.domain/petrouniver/sso";
const operation = "https://api2.v2.domain/petrouniver/operation";
const einvoice = "https://api2.v2.domain/petrouniver/einvoice";

const domain = [
    {
        // API cho database SSO
        "SSO" : {
            "chains" : [
                {
                    /**
                     *  Lấy chuỗi theo mã id
                     */ 
                    method: "POST",
                    url: (chainId) => { 
                        return sso.concat("/getChainById/", chainId);
                    }
                }
            ],

            "employees" : [
                
            ],

            "customers" : [

            ],

            "fuelpipes" : [

            ],

            "fuelprices" : [

            ],

            "fuelrectangulars" : [

            ],

            "fuels" : [

            ],

            "fueltanks" : [

            ],

            "permissions" : [

            ],

            "roles" : [

            ],

            "shiftchanges" : [

            ],

            "stations" : [

            ],

            "suppliers" : [

            ]
        },

        // API cho database Operation + year
        "OPERATION" : {
            "orders" : [

            ],

            "transactions" : [

            ]
        },

        // API cho database Invoice
        "E_INVOICE" : {
            "invoices" : [

            ]
        }
    }
];

export default domain;