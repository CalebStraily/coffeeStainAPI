const pool = require('../config/dbconfig');

class ProductsDao 
{
    constructor()
    {
        this.pool = pool
    }

    findAll(req, res)
    {
        pool.query('SELECT product.name, product.game, category.type, product.preorder, product.price, product.is_featured, product.image, product.description FROM product INNER JOIN category ON product.category = category.id', (err, rows) => {
            if (err)
            {
                console.log(err);
            }
            else
            {
                console.log(rows);
                res.send(rows);
            }
        })
    }
}

module.exports = ProductsDao;