
const data = [
    {
        id: 123,
        categoria: "Polos",
        producto: "Polo Rambo"
    },
    {
        id: 124,
        categoria: "Polos",
        producto: "Polo Levy"
    }
];

// ##---------------------
// ## Listar Productos 
// ## --------------------

function listar(req, res) {
    res.json({
        data
    })
}

// ##---------------------
// ## Guardar Producto
// ##--------------------- 

function guardar(req, res) {
    res.json({
        message: "Guardado"
    })
}

// ##---------------------
// ## Borrar Producto
// ##--------------------- 

function borrar(req, res) {
    res.json({
        message: "Borrado"
    });
}

// ##------------------------
// ## Actualizar Producto
// ##------------------------ 

function update(req, res) {
    res.json({
        message: "Actualizado"
    });
}

module.exports = { listar, guardar, borrar, update }
