import express from 'express'
import {Response, Request} from 'express'
import { Category, Product } from '../models'

export const viewsController = {
    homeView : async(req : Request,res : Response)=>{
        try {
            res.render('pages/index')
        } catch (error) {
            res.render('pages/error/index')
        }
    },
    showCategoriesView : async(req : Request, res : Response)=>{

        try {
            const categories = await Category.findAll({
                include : Product
            })
            res.render('pages/showCategories/index',{categories})
        } catch (error) {
            res.render('pages/error/index')
        }
    },
    newCategoryView : async(req : Request, res : Response)=>{
        const category = new Category()
        try {
            res.render('pages/NewAndUpdate/index',{category, type : "category",url : "/category", error : null})
        } catch (error) {
            res.render('pages/error/index')
        }
    },
    newProductView : async(req : Request, res : Response)=>{
        const product = new Product()
        const {category_id} = req.params
        try {
            res.render('pages/NewAndUpdate/index',{product, type : "product",url : `/product/${category_id}`, error : null})
        } catch (error) {
            res.render('pages/error/index')
        }
    },
    editCategoryView : async(req : Request, res : Response)=>{
        const {id} = req.params
    
        try {
            const category = (await Category.findAll({
                where : {id}
            }))[0].dataValues
    
            res.render('pages/NewAndUpdate/index',{category, type : "category",url : `/category/${category.id}?_method=put`, error : null})
        } catch (error) {
            res.render('pages/error/index')
        }
    },
    editProductView : async(req : Request, res : Response)=>{
        const {id} = req.params
        try {
            const product = (await Product.findAll({
                where : {id}
            }))[0].dataValues
            
            res.render('pages/NewAndUpdate/index',{product, type : "product",url : `/product/${product.id}?_method=put`, error : null})
        } catch (error) {
            res.render('pages/error/index')
        }
    },
    showCategoryView : async(req : Request, res : Response)=>{
        const {id} = req.params
        try {
            const category = (await Category.findAll({
                where : {id},
                include : Product
            }))[0].dataValues
            res.render('pages/showCategory/index', {category})
        } catch (error) {
            res.render('pages/error/index')
        }
    },
}
