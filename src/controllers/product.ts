import { Request,Response} from "express"
import express from 'express'

import { Product } from "../models/Product"

export const router = express.Router()

router.post('/',async(req : Request,res : Response)=>{
    const {name,amount} = req.body
    console.log(name,amount)
    try {
        await Product.create({name,amount})
        res.status(200).send("Produto cadastrado com sucesso")
    } catch (error) {
        res.status(401).json(error)
    }
})


router.get("/show", async(req : Request,res : Response)=>{
    // try {
        const result = await Product.findAll()
        console.log(result)
        res.status(200).send(result)
    // } catch (error) {
    //     res.status(400).json("error")
    // }
})

router.put("/:id",async(req:Request, res:Response)=>{
    const {id} = req.params
    const data = req.body
    try {
        const product = await Product.findByPk(id)
        await product?.update(data)
        res.status(200).send("Produto alterado com sucesso")
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/:id",async(req:Request,res:Response)=>{
    const {id} = req.params
    try {
        const result = await Product.findByPk(id)
        console.log(result)
        await result?.destroy()
        res.status(200).send("Produto excluído com sucesso")
    } catch (error) {
        res.status(400).send(error)
    }
})
