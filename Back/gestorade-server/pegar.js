


const postClientes = async (req, res) => {
    const { nombre, version_fox, imp_pdf, tipo } = req.body;
    const response = await pool.query('INSERT INTO clientes (nombre, version_fox, imp_pdf, tipo) VALUES ($1, $2, $3, $4)', [
        nombre, 
        version_fox, 
        imp_pdf, 
        tipo
    ]);
    console.log(response.rows);
    res.json({
        message: 'Client Added Succesfully',
        body:{
            user: {nombre, version_fox, imp_pdf, tipo}
        }
    })
}