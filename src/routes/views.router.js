import { Router } from 'express';
import ProductManager from '../../managers/ProductManager.js';

const router = Router();

const productManager = new ProductManager();

router.get('/', async (req, res) => {
    const user = {
        name:"Julia",
        email:"correoagus@correo.com"
    }
    const productsList = await productManager.getProducts();
    res.render('index', {name:user.name, productsList, css:'home'})
});


router.get('/realtimeproducts', async (req, res) => {
    const listadoProductosModificado = await productManager.addProduct();
    // console.log({ listadoProductosModificado });
    res.render('realTimeProducts', { listadoProductosModificado });
})



router.get('/products', (req, res) => {
    const food = [
        {name:"Hamburguesa", price:100},
        {name:"Papa con queso", price:2000000},
        {name:"Pancho",price:30},
    ]
    res.render('products', { food });
});

// router.get('/:uid', (req, res) => {
//     //aca va el find y se renderiza.
//     res.render('home', { name: user.name });
// });


export default router;