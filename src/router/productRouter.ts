import { Request,Response} from "express"
import express from 'express'

import { Category, Product } from "../models"
import { productController } from "../controllers/product"

export const router = express.Router()

router.get("/:category_id", productController.getCategoryAndProducts)

router.post('/:category_id',productController.postProduct)

router.put("/:id",productController.updateProduct)

router.delete("/:category_id/:id",productController.deleteProduct)

