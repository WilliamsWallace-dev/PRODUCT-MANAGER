import express from 'express'
import { Request,Response } from 'express'
import { Category } from '../models'

export const router = express.Router()

router.get('/',async(req : Request,res : Response)=>{

    try {
        const result = await Category.findAll();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error)
    }

})
router.post('/',async(req : Request,res : Response)=>{
    const {name} = req.body.category
    try {
        const category = await Category.findAll({
            where : {name}
        }) 

        if(category.length) throw new Error("Categoria já está cadastrada!")
        else if(!name.length) throw new Error("Nome deve ser preenchido!")

        else{
            const result = await Category.create({name})
            res.status(200).redirect('/showCategories')
        }
    } catch (error) {
        const category = await new Category()
        res.status(422).render('pages/NewAndUpdate/index', {category ,type : "category", url : "/category", error})
    }
})
router.put('/:id',async(req : Request,res : Response)=>{
    const {name} = req.body
    const id = Number(req.params.id)
    try {
        const result = await Category.update({name},{
            where : {id},
            returning : true
        })
        res.status(200).send(`Categoria atualizada com sucesso ! ${result[1][0].dataValues.name}`)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.delete('/:id',async(req : Request,res : Response)=>{
    const id = req.params.id
    try {
        await Category.destroy({
            where : {id}
        })
        res.status(200).redirect('/showCategories')
    } catch (error) {
        res.status(400).send(error)
    }
})
