const controller = {};//Objeto
var int = 7;
controller.list = (req, res) => { //Función que manda el hello world
   req.getConnection((err, conn) => {
       conn.query('SELECT * FROM customer', (err, customers) =>{
            if (err) {


                res.json(err);
            }
            
            res.render('customers', { 
                data: customers
            });
       });
   });
};

module.exports = controller; //Exportamos el objeto