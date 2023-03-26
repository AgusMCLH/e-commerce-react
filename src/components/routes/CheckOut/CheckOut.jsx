import React, { useState, useContext} from "react";
import './css/style.css'
import { CartContext } from "../../../contexts/CartContext";
const CheckOut = ()=>{
    let [checkboxNotesBool, setCheckboxNotesBool] = useState(false)
    const {cartContextValue} = useContext(CartContext)


    const CheckboxNotesOnChangeHandler = ()=>{
        setCheckboxNotesBool(document.getElementById('CheckOut_Form_Notes_CheckBox').checked)
    }

    const FormNotesTextAreaOnChangeHandler = ()=>{
        let textareaElement = document.getElementById('CheckOut_Form_Notes_TextArea_Details')
        if (textareaElement.scrollHeight<326) {
            textareaElement.style.height = `${textareaElement.scrollHeight}px`
        }
    }

    let total = ()=>{
        let pricesList = document.getElementsByClassName('priceHook');
        let price = 0;
        for (let i = 0; i < pricesList.length; i++) {

            price += Number(pricesList[i].innerText) ;
        }
        return price;
    }

    console.log(checkboxNotesBool);
    return<div className="CheckOut_Page">
        <div className="Page_Title"><h2>CHECKOUT</h2></div>
        <div className="Page_SubTitle"><h2>Billing Details</h2></div>
        <div className="CheckOut_DataContainer">
            <div className="CheckOut_Form_Container">
                <form>
                    <div className="divider">
                        <div className="flex">
                            <div>
                                <label htmlFor="FirstName">First Name</label>
                                <input type="text" name="FirstName" id="CheckOut_Form_FirstName" required/>
                            </div>
                            <div>
                                <label htmlFor="LastName">Last Name</label>
                                <input type="text" name="LastName" id="CheckOut_Form_LastName" required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Company" className="NotReq">Company</label>
                            <input type="text" name="Company" id="CheckOut_Form_Company"/>
                        </div>
                        <div>
                            <label htmlFor="Country">Country</label>
                            <input type="text" name="Country" id="CheckOut_Form_Country" required/>
                        </div>
                        <div>
                            <label htmlFor="City">City</label>
                            <input type="text" name="City" id="CheckOut_Form_City" required/>
                        </div>
                        <div>
                            <label htmlFor="State">State</label>
                            <input type="text" name="State" id="CheckOut_Form_State" required/>
                        </div>
                        <div>
                            <label htmlFor="ZIP">ZIP Code</label>
                            <input type="number" name="ZIP" id="CheckOut_Form_ZIP" required/>
                        </div>
                        <div>
                            <label htmlFor="Address">Address</label>
                            <input type="email" name="Address" id="CheckOut_Form_Address" required/>
                        </div>
                        <div>
                            <label htmlFor="Phone">Phone</label>
                            <input type="number" name="Phone" id="CheckOut_Form_Phone" required/>
                        </div>

                    </div>
                    <div className="CheckOut_Form_Notes_container">
                        <div className="CheckOut_Form_Notes_CheckBox_Container">
                            <input type="checkbox" name="CheckOut_Form_Notes_CheckBox" id="CheckOut_Form_Notes_CheckBox" onChange={()=>CheckboxNotesOnChangeHandler()}/><p>Order Notes?</p>
                        </div>
                        {checkboxNotesBool?<div className="CheckOut_Form_Notes_CheckBox_Details"><textarea maxLength={1200} placeholder="Notes about your order, e.g. special notes for the delivery." id="CheckOut_Form_Notes_TextArea_Details" onChange={()=>FormNotesTextAreaOnChangeHandler()}/></div>:<div className="CheckOut_Form_Notes_CheckBox_Details"><p>Notes about your order, e.g. special notes for the delivery.</p></div>}
                    </div>
                    <button type="submit" id="CheckOut_Form_Button_Submit">Enviar</button>

                </form>
                    
                </div>
                <div className="Page_SubTitle"><h2>Your Order</h2></div>
                <div className="CheckOut_ProductList_Container">
                    <div className="CheckOut_ProductList_Container_FirstRow">
                        <p className="CheckOut_ProductList_Container_FirstRow_Product">Product</p>
                        <p className="CheckOut_ProductList_Container_FirstRow_SubTotal">Subtotal</p>
                    </div>
                    
                    {cartContextValue[0].hasOwnProperty('id')?<>
                    {cartContextValue.map((el)=>{
                        return (<div key={el.id} className="CheckOut_ProductList_PrdouctListed" >
                        <div className="CheckOut_ProductList_ProductListed_Product">
                            <p className="CheckOut_ProductList_ProductListed_Product_Name">{el.title}</p>
                            <p className="CheckOut_ProductList_ProductListed_Product_Quantity">x{el.quantity}</p>
                        </div>
                        <div className="CheckOut_ProductList_ProductListed_Subtotal">
                            <p className="CheckOut_ProductList_ProductListed_SubTotal_Price">$<span className="priceHook">{Math.round(el.price*el.quantity)}</span></p>
                        </div>
                    </div>)
                    })}
                    <div className="CheckOut_ProductList_Container_LastRow">
                        <p className="CheckOut_ProductList_Container_LastRow_TotalText">Total</p>
                        <p className="CheckOut_ProductList_Container_LastRow_Total">${total()}</p>
                    </div>
                    </>:<>
                    <div className="CheckOut_ProductList_Container_LastRow">
                        <p className="CheckOut_ProductList_Container_LastRow_TotalText">Your cart Is Empty</p>       
                    </div>
                    </>}
                    
                    
                </div>
            </div>
    </div>
}
export default CheckOut