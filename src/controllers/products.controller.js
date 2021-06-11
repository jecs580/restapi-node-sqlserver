import {getConnection, sql, queries} from '../db'
import {response,request} from 'express'
import querys from '../db'
export const getProducts= async (req= request,res=response)=>{
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);
        res.status(200).json({
            ok:true,
            products:result.recordset
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error a la hora de obtener los productos'
        })
    }
}
export const createNewProduct= async(req=request,res= response)=>{
    const {name,description} = req.body;
    let {quantity}=req.body;
    if(name==null || description==null){
        return res.status(400).json({
            ok:false,
            msg:'Todos los campos son requeridos' 
        })
    }
    if(quantity==null) quantity=0;
    try {
        const pool = await getConnection()
        await pool.request()
        .input("name",sql.VarChar,name)
        .input("description",sql.Text,description)
        .input('quantity', sql.Int,quantity)
        .query(queries.createNewProduct)
        res.json({
            ok:true,
            product:{
                name,
                description,
                quantity
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok:false,
            msg:'Error a la hora de crear un producto'
        })
    }
}

export const getProductById = async(req=request, res=response)=>{
    const {id} = req.params;
   try {
    const pool = await getConnection();
    const result = await pool.request()
    .input('id',id)
    .query(queries.getProductById)
    if(result.recordset.length==0){
        return res.status(400).json({
            ok:false,
            msg:'No existe un producto con ese id'
        })
    }
    return res.json({
        ok:true,
        product:result.recordset[0]
    })
   } catch (error) {
       console.log(error);
       return res.status(400).json({
        ok:false,
        msg:'Error a la hora de obtener un producto'
    })
   }
}

