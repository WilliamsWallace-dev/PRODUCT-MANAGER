import { Request,Response} from "express"
import express from 'express'

import { Category, Product } from "../models"
import { categoryController } from "../controllers/category"


export const router = express.Router()

router.get('/',categoryController.getCategory)

router.post('/',categoryController.postCategory)

router.put('/:id',categoryController.updateCategory)

router.delete('/:id',categoryController.deleteCategory)

