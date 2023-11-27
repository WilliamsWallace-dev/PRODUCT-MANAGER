import { Request,Response} from "express"
import express from 'express'

import { Category, Product } from "../models"

export const productController = {
    
    getCategoryAndProducts : async(req : Request,res : Response)=>{
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
    },
    postProduct : async(req : Request,res : Response)=>{
        const {name,amount,price} = req.body.product
        const category_id = Number(req.params.category_id)
        try {
            const category = await Category.findByPk(category_id)
            if(!category) throw new Error("Categoria não cadastrada!")
                else if(!name.length) throw new Error("Nome deve ser preenchido!")
                    else{
                        await Product.create({name,amount,price,category_id})
                        res.status(200).redirect(`/category/show/${category_id}`)
                    }
        } catch (error) {
            const product = await new Product()
            res.render('pages/NewAndUpdate/index',{product, type : "product",url : `/product/${category_id}`, error})
        }
    },
    updateProduct : async(req:Request, res:Response)=>{
        const {id} = req.params
        const {name,amount,price} = req.body.product

        try {
    
            const result = (await Product.update({name,amount,price},{
                where : {id},
                returning : true
            }))[1][0].dataValues
            // @ts-ignore
            res.status(200).redirect(`/category/show/${result.categoryId}`)
        } catch (error) {
            const product = (await Product.findAll({
                where : {id}
            }))[0].dataValues
            res.render('pages/NewAndUpdate/index',{product, type : "product",url : `/product/${product.id}`, error})
        }
    },
    deleteProduct : async(req:Request,res:Response)=>{
        const {id,category_id} = req.params
        try {
            const result = await Product.destroy({
                where : {id},
            })
            // res.status(200).send("Produto excluído com sucesso")
            res.status(200).redirect(`/category/show/${category_id}`)
        } catch (error) {
            res.render('pages/error/index')
        }
    },

}

