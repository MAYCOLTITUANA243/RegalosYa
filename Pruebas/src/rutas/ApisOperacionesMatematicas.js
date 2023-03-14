const express = require("express");
const router = express.Router();
const OperacionesMatematicas = require("../modelos/OperacionesMatematicas");

//obtener Suma
router.get("/OperacionesMatematicas", (req, res) => {
    OperacionesMatematicas.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//SUMA
router.post("/OperacionesMatematicas/suma", (req, res) => {
    const {numero1, numero2} = req.query;
    var resultado= 0;
    var error = "";
    error = validarValorNumerico(Number(numero1), Number(numero2))

    if (error == ""){
        resultado = Number(numero1) + Number(numero2);

        const operacionesSuma = OperacionesMatematicas({
            numero1,
            numero2,
            tipoOperacion: "suma",
            resultado
        });
    
        operacionesSuma
            .save()
            .then((data) => res.json({
                mensaje: "Realizado correctamente",
                resultado: data.resultado,
            }))
            .catch((errorCatch) => res.json(
                {
                    mensaje: errorCatch
                }
            ));
    }else{
        res.json({
            mensaje: error
        })
    }
    
});

//SUSTRACCIÓN
router.post("/OperacionesMatematicas/sustraccion", (req, res) => {
    const {numero1, numero2} = req.query;
    var resultado= 0;
    var error = "";
    error = validarValorNumerico(Number(numero1), Number(numero2))

    if (error == ""){
        resultado = Number(numero1) - Number(numero2);  

    const operacionesResta = OperacionesMatematicas({
        numero1,
        numero2,
        tipoOperacion: "sustraccion",
        resultado
    });

    operacionesResta
        .save()
        .then((data) => res.json({
            mensaje: "Realizado correctamente",
            resultado: data.resultado,
        }))
        .catch((errorCatch) => res.json(
            {
                mensaje: error
            }
        ));

    }else{
        res.json({
            mensaje: error
        })

    }
    
});

//PRODUCTO
router.post("/OperacionesMatematicas/producto", (req, res) => {
    const {numero1, numero2} = req.query;
    var resultado= 0;
    var error = "";
    error = validarValorNumerico(Number(numero1), Number(numero2))
    resultado = Number(numero1) * Number(numero2);  

    if(error == ""){
        const operacionesProducto = OperacionesMatematicas({
            numero1,
            numero2,
            tipoOperacion: "producto",
            resultado
        });
    
        operacionesProducto
            .save()
            .then((data) => res.json({
                mensaje: "Realizado correctamente",
                resultado: data.resultado,
            }))
            .catch((errorCatch) => res.json(
                {
                    mensaje: error
                }
            ));
    }else{
        res.json({
            mensaje: error
        })
    }
    
});

//Division
router.post("/OperacionesMatematicas/division", (req, res) => {
    const {numero1, numero2} = req.query;
    var resultado= 0;
    var error = "";
    error = validarValorNumerico(Number(numero1), Number(numero2));   
    //error += validarDivision(numero2);
    
    if(error === ""){     
        resultado = Number(numero1) / Number(numero2);
        const operacionesDivision = OperacionesMatematicas({
            numero1,
            numero2,
            tipoOperacion: "division",
            resultado
        });
    
        operacionesDivision
            .save()
            .then((data) => res.json({
                mensaje: "Realizado correctamente",
                resultado: data.resultado,
            }))
            .catch((errorCatch) => res.json(
                {
                    mensaje: error
                }
            ));
    }else{
        res.json({
            mensaje: error,
        })
    }
    
});

//VALIDACIONES
function validarValorNumerico(numero1, numero2){
    var error = "";
    //VALIDACIONES
    if (isNaN(numero1) || isNaN(numero2)){
        error += "ERROR: Solo valores numericos ,";
    }
    return error;
}

function validarDivision(divisor){
    var error = "";
    if (divisor == 0){
        error = "ERROR: No se puede dividir para cero"
    }
    return error;
}

module.exports = router;