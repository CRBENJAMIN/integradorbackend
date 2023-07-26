const path = require ('path');
const fs = require ('fs');
const ruta = path.resolve(__dirname, '../data/products.json');
const jsProducts = fs.readFileSync(ruta, {encoding: 'utf-8'});
const products = JSON.parse(jsProducts)

const controllers = {
    crear:(req, res) => {
        const nuevoProducto = req.body;
        products.push(nuevoProducto);
        res.status(200).json(nuevoProducto);
    },
    listar:(req, res) => {
        res.json(products);
    },
    detalle:(req, res) => {
        const {id}= req.params; 
        console.log("esto es products", products)
    const product = products.filter((product) =>{ return product.id == id});

    res.status(200).json({product});

    },
};


module.exports = {
    controllers: controllers,
    products: products,
  };
