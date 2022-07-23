const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Marrosot',
    database: 'gestorade',
    port: '5432'
});

const getClientes = async (req, res) => {
    const response = await pool.query('SELECT * FROM clientes');
    res.status(200).json(response.rows);
}

const getClienteById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    res.json(response.rows);
}

const postClientes = async (req, res) => {
    const { nombre, version_fox, imp_pdf, tipo, contacto, tecnico, servidor, servidor_windows, servidor_ip, servidor_contrasena, mail, mail_herramienta, mail_cuenta, mail_servidor, mail_contrasena, generacion_pdf, generacion_pdf_empresa,any_desk_id, any_desk_pass, recaudacion } = req.body;
    const response = await pool.query('INSERT INTO clientes (nombre, version_fox, imp_pdf, tipo, contacto, tecnico, servidor, servidor_windows, servidor_ip, servidor_contrasena, mail, mail_herramienta, mail_cuenta, mail_servidor, mail_contrasena, generacion_pdf, generacion_pdf_empresa,any_desk_id, any_desk_pass, recaudacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)', [
        nombre, version_fox, imp_pdf, tipo, contacto, tecnico, servidor, servidor_windows, servidor_ip, servidor_contrasena, mail, mail_herramienta, mail_cuenta, mail_servidor, mail_contrasena, generacion_pdf, generacion_pdf_empresa,any_desk_id, any_desk_pass, recaudacion
    ]);
    console.log(response.rows);
    res.json({
        message: 'Client Added Succesfully',
        body:{
            user: {nombre, version_fox, imp_pdf, tipo, contacto, tecnico, servidor, servidor_windows, servidor_ip, servidor_contrasena, mail, mail_herramienta, mail_cuenta, mail_servidor, mail_contrasena, generacion_pdf, generacion_pdf_empresa,any_desk_id, any_desk_pass, recaudacion}
        }
    })
}

const deleteCliente = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
    console.log(response);
    res.json(`Client ${id} deleted successfully`);
}

const putCliente = async (req,res) => {
    const { nombre, version_fox, imp_pdf, tipo, contacto, tecnico, servidor, servidor_windows, servidor_ip, servidor_contrasena, mail, mail_herramienta, mail_cuenta, mail_servidor, mail_contrasena, generacion_pdf, generacion_pdf_empresa,any_desk_id, any_desk_pass, recaudacion } = req.body;
    const id = req.params.id;
    const response = await pool.query('UPDATE clientes SET nombre = $1, version_fox = $2, imp_pdf = $3, tipo = $4, contacto = $5, tecnico = $6, servidor = $7, servidor_windows = $8, servidor_ip = $9, servidor_contrasena = $10, mail = $11, mail_herramienta = $12, mail_cuenta = $13, mail_servidor = $14, mail_contrasena = $15, generacion_pdf = $16, generacion_pdf_empresa = $17,any_desk_id = $18, any_desk_pass = $19, recaudacion = $20 WHERE id = $21',[
        nombre, version_fox, imp_pdf, tipo, contacto, tecnico, servidor, servidor_windows, servidor_ip, servidor_contrasena, mail, mail_herramienta, mail_cuenta, mail_servidor, mail_contrasena, generacion_pdf, generacion_pdf_empresa,any_desk_id, any_desk_pass, recaudacion, id
    ])
    res.json(`Client ${id} Updated successfully`)
}

module.exports = {
    getClientes,
    postClientes,
    getClienteById,
    deleteCliente,
    putCliente
}