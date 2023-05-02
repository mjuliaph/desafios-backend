import { Router } from 'express';
import ProductManager from '../../managers/ProductManager.js';

const router = Router();

const productManager = new ProductManager();

router.get('/', async (req, res) => {
    try {
        // req.query.limit//HACER UN LIMITE DE 3
        const products = await productManager.getProducts();
        console.log('Todos los productos', products);
        res.send({ products });
        //DEBE TRAER TODOS LOS PRODUCTOS DE LA BASE, INCLUYENDO EL LÍMITE         
    } catch (error) {
        res.status(500).send({ status:"error", error: "Error al obtener el Poducto"})
    }

});

router.get('/:pid', (req, res) => {
    //DEBE TRAER UNICAMENTE EL PRODUCTO QUE SELECCIONE
})

// router.post('/', (req, res) => {
//     const product = req.body;
//     products.push(product);
//     // res.status(200).send("Producto agregado!")
//     res.send({ status: "success", message: "Producto agregado" });
// });

router.post('/', async (req, res) => {
    try {
        //DEBE AGREGAR UN PRODUCTO CON TODOS LOS CAMPOS
        const product = req.body;
        await productManager.addProduct(product);
        res.send({ status: "success", message: "Producto agregado" });
    } catch (error) {
        return res.status(400).send({ status:"error", error: "Valores incompletos"})
    }
});

router.put('/', (req, res) => {
    //DEBE TOMAR EL PRODUCTO CON LOS CAMPOS ENVIADOS DESDE EL BODY; NUNCA DEBE ACTUALIZAR O ELIMINAR EL ID.
});

router.delete('/', (req, res) => {
    //BORRA EL PRODUCTO CON EL ID QUE INDIQUE.
});





export default router;