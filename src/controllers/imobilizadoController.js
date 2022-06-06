const db = require("../db/config")
const {Imobilizado} = require("../../public/scripts/class")
module.exports ={
    async create(req, res){
        
        const imobilizado = req.body.imobilizado
        const idCategoria = req.body.idCategoria
        const numeroSerie = req.body.numeroSerie
        const notaFiscal = req.body.notaFiscal
        const dataCompra = req.body.dataCompra
        const valorCompra = req.body.valorCompra
        const descricao = req.body.descricao

        let imob =  new Imobilizado(imobilizado,descricao,idCategoria,numeroSerie,notaFiscal,dataCompra,valorCompra)
        
        await db.query(`INSERT INTO imobilizado (id,descricao,idCategoria,numeroSerie,notaFiscal,dataCompra,valorCompra)
        VALUES (
            ${imob.getPlaqueta()},
            '${imob.getDescricao()}',
            ${imob.getIdCategoria()},
            '${imob.getNumeroSerie()}',
            '${imob.getNotaFiscal()}',
            '${imob.getDataCompra()}',
            ${imob.getValorCompra()}
        )`);


        res.redirect(`/list-imob`)

    }
    ,
    async list(req, res){
        const id = req.body.id
        console.log(id)
        const results = await db.query(`SELECT i.id,i.descricao,c.nome,i.numeroserie,i.notafiscal, TO_CHAR(i.datacompra, 'DD/MM/YYYY') as datacompra ,i.valorCompra FROM imobilizado i inner join categoriaimob c on(i.idcategoria = c.id)`)
        const result = results.rows
        res.render("list-imob", {result , id})
        
    }
    ,

    async alter(req, res){
        const id = req.params.imob
        const results = await db.query(`SELECT * FROM imobilizado WHERE id = ${id}`)
        const result = results.rows
        res.render("alter-imob", {result})

      
    },

    async update(req,res){
        const id = req.params.imob
        const idCategoria = req.body.idCategoria
        const numeroSerie = req.body.numeroSerie
        const notaFiscal = req.body.notaFiscal
        const dataCompra = req.body.dataCompra
        const valorCompra = req.body.valorCompra
        const descricao = req.body.descricao
        await db.query(`UPDATE imobilizado SET descricao = '${descricao}', idcategoria = ${idCategoria}, numeroserie = '${numeroSerie}',
        notafiscal = '${notaFiscal}',
        datacompra = '${dataCompra}',
        valorcompra = ${valorCompra} WHERE id = ${id}`);


        res.redirect("/list-imob")
    },

    async delete(req,res){
        
    }


}