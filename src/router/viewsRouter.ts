import { Request,Response} from "express"
import express from 'express'

import { Category, Product } from "../models"
import { viewsController } from "../controllers/views"

export const router = express.Router()

router.get('/',viewsController.homeView)

router.get('/showCategories',viewsController.showCategoriesView)

router.get('/category/new',viewsController.newCategoryView)

router.get("/category/:category_id/product/new",viewsController.newProductView)

router.get("/category/edit/:id",viewsController.editCategoryView)

router.get("/product/edit/:id",viewsController.editProductView)

router.get('/category/show/:id',viewsController.showCategoryView)

