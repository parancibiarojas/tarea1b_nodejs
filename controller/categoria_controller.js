
const data = [
    {
        id: 123,
        nombre: "Polos"
    },
    {
        id: 124,
        nombre: "Pantalones"
    }
];

// ##---------------------
// ## Listar Categorias 
// ## --------------------

function listar(req, res) {
    res.json({
        data
    })
}

// ##---------------------
// ## Get Categoria 
// ## --------------------

function getCategoria(req, res) {
    res.json(
        {
            id: 124,
            nombre: "Pantalones"
        }
    )
}


// ##---------------------
// ## Guardar Categoria
// ##--------------------- 

function guardar(req, res) {
    res.json({
        message: "Guardado"
    })
}

// ##---------------------
// ## Borrar Categoria
// ##--------------------- 

function borrar(req, res) {
    res.json({
        message: "Borrado"
    });
}

// ##------------------------
// ## Actualizar Categoria
// ##------------------------ 

function update(req, res) {
    res.json({
        message: "Actualizado"
    });
}

module.exports = { listar, getCategoria, guardar, borrar, update }