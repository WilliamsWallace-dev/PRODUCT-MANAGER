import { Request,Response} from "express"
import express from 'express'

import { Category, Product } from "../models"

export const router = express.Router()

router.get("/:category_id", async(req : Request,res : Response)=>{
    const {category_id} = req.params
    console.log(category_id)
    try {
        const category = await Category.findByPk(category_id,{
            include : Product
        })
        res.status(200).json(category)

    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/:category_id',async(req : Request,res : Response)=>{
    const {name,amount} = req.body.product
    const category_id = Number(req.params.category_id)
    try {
        const category = await Category.findByPk(category_id)
        if(!category) throw new Error("Categoria não cadastrada!")
            else if(!name.length) throw new Error("Nome deve ser preenchido!")
                else{
                    await Product.create({name,amount,category_id})
                    res.status(200).redirect(`/category/show/${category_id}`)
                }
    } catch (error) {
        const product = await new Product()
        res.render('pages/NewAndUpdate/index',{product, type : "product",url : `/product/${category_id}`, error})
    }
})

router.put("/:id",async(req:Request, res:Response)=>{
    const {id} = req.params
    const data = req.body
    try {
        const result = await Product.update(data,{
            where : {id},
            returning : true
        })
        res.status(200).send(`Produto alterado com sucesso! ${result}`)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/:id",async(req:Request,res:Response)=>{
    const id = req.params.id
    try {
        await Product.destroy({
            where : {id}
        })
        res.status(200).send("Produto excluído com sucesso")
    } catch (error) {
        res.status(400).send(error)
    }
})
