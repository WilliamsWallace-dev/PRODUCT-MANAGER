import express from 'express'
import { Request,Response } from 'express'
import { Category } from '../models'

export const categoryController = {
    getCategory : async(req : Request,res : Response)=>{

        try {
            const result = await Category.findAll();
            res.status(200).json(result)
        } catch (error) {
            res.status(400).send(error)
        }
    
    },
    postCategory : async(req : Request,res : Response)=>{
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
    },
    updateCategory : async(req : Request,res : Response)=>{
        const {name} = req.body.category
        const {id} = req.params
    
        try {
            const result = (await Category.update({name},{
                where : {id},
                returning : true
            }))
            res.status(200).redirect('/showCategories')
        } catch (error) {
            const category = (await Category.findAll({
                where : {id}
            }))[0].dataValues
        
            res.render('pages/NewAndUpdate/index',{category, type : "category",url : `/category/${category.id}?_method=put`, error : null})
        }
    },
    deleteCategory : async (req : Request,res : Response)=>{
        const id = req.params.id
        
        try {
            await Category.destroy({
                where : {id}
            })
            res.status(200).redirect('/showCategories')
        } catch (error) {
            if(error == 'SequelizeForeignKeyConstraintError: atualização ou exclusão em tabela "categories" viola restrição de chave estrangeira "products_category_id_fkey" em "products"' )
                res.status(400).render('pages/error/index',{error : 'Não é possível excluir a categoria, pois ainda possui produtos cadastrados!'})
            res.status(400).render('pages/error/index',{error})
        }
    },
}

