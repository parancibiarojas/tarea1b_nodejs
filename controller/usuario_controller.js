
const data = [
    {
        id: 123,
        producto: "user1"
    },
    {
        id: 124,
        producto: "user2"
    }
];

// ##---------------------
// ## Listar Usuarios
// ## --------------------

function listar(req, res) {
    res.json({
        data
    })
}

// ##---------------------
// ## Guardar Usuario
// ##--------------------- 

function guardar(req, res) {
    res.json({
        message: "Guardado"
    })
}

// ##---------------------
// ## Borrar Usuario
// ##--------------------- 

function borrar(req, res) {
    res.json({
        message: "Borrado"
    });
}

// ##------------------------
// ## Actualizar Usuario
// ##------------------------ 

function update(req, res) {
    res.json({
        message: "Actualizado"
    });
}

module.exports = { listar, guardar, borrar, update }
