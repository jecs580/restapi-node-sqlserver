import {getConnection} from '../db/connection'
import {response,request} from 'express'
export const getProducts= async (req= request,res=response)=>{
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Products");
    console.log(result);
    res.status(200).json({
        ok:true,
        products:result.recordset
    });
}

