const express = require ('express')
const app = express();
const productsRouter = require('./src/routes/products'); // Rename the variable to productsRouter
const miMiddleware = (req, res, next) => {
  next();
};

//conf
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/products', productsRouter);




app.listen(3000, () => 
  console.log('servidor andando')
);


