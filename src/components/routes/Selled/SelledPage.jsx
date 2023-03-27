import React from "react";
import { useParams } from "react-router";
import SuccesfullPurchaseSVG from './../../../img/undraw_shopping_re_hdd9.svg'
import './css/style.css'

const SelledPage = ()=>{
    let {id} = useParams()
    return<>
    <div className="MainImage"><img src={SuccesfullPurchaseSVG} alt="Undraw Icon" />
    <p className="SP">Succesfull Purchase</p>
    <p className="TRSID">Your Transaction ID is: <span>{id}</span></p>
    </div></>
}

export default SelledPage