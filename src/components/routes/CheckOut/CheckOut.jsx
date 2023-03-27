import React, { useState, useContext, useEffect} from "react";
import './css/style.css'
import { CartContext } from "../../../contexts/CartContext";
import { getFirestore, collection, addDoc} from 'firebase/firestore'
import { useNavigate } from "react-router";

const CheckOut = ()=>{
    const navigate = useNavigate()
    const {cartContextValue, setCartMenuActive, setCartContext} = useContext(CartContext)
    let [checkboxNotesBool, setCheckboxNotesBool] = useState(false)
    let [checkboxTermsAndConditions, setCheckboxTermsAndConditions] = useState(false)
    let [form, setForm] = useState({
        FirstName:'',
        LastName:'',
        Company:'',
        Country:'',
        City:'',
        State:'',
        ZIP:'',
        Address:'',
        Phone:'',
        Notas:'',
        Productos:cartContextValue
})

    useEffect(()=>{
        setCartMenuActive(false)
    },[setCartMenuActive])

    const CheckboxTACOnChangeHandler = ()=>{
        setCheckboxTermsAndConditions(document.getElementById('termsandconditions_Checkbox').checked)
    }
    const CheckboxNotesOnChangeHandler = ()=>{
        setCheckboxNotesBool(document.getElementById('CheckOut_Form_Notes_CheckBox').checked)
    }

    let total = ()=>{
        let pricesList = document.getElementsByClassName('priceHook');
        let price = 0;
        for (let i = 0; i < pricesList.length; i++) {

            price += Number(pricesList[i].innerText) ;
        }
        return price;
    }

    const PlaceOrderButtonOnClickHandler = ()=>{
        document.getElementById('CheckOut_Form_Button_Submit').click()
    }

    const SubmitHandler = (ev)=>{
        ev.preventDefault()
        const db=getFirestore()
        const OrdersFormCollection = collection(db, 'orders')
        addDoc(OrdersFormCollection, form).then((snapshot)=>{navigate(`./succesfull-purchase/${snapshot.id}`)})
        setCartContext([{}])
        setForm({
            FirstName:'',
            LastName:'',
            Company:'',
            Country:'',
            City:'',
            State:'',
            ZIP:'',
            Address:'',
            Phone:'',
            Notas:'',
            Productos:cartContextValue
    })
    }

    const InputOnChangeHandler =(ev)=>{
        const {name, value} = ev.target;
        setForm({...form,[name]: value})
    }
    return<div className="CheckOut_Page">
        <div className="Page_Title"><h2>CHECKOUT</h2></div>
        <div className="Page_SubTitle"><h2>Billing Details</h2></div>
        <div className="CheckOut_DataContainer">
            <div className="CheckOut_Form_Container">
                <form onSubmit={SubmitHandler}>
                    <div className="divider">
                        <div className="flex">
                            <div>
                                <label htmlFor="FirstName">First Name</label>
                                <input onChange={InputOnChangeHandler} value={form.FirstName} type="text" name="FirstName" id="CheckOut_Form_FirstName" required/>
                            </div>
                            <div>
                                <label htmlFor="LastName">Last Name</label>
                                <input onChange={InputOnChangeHandler} value={form.LastName} type="text" name="LastName" id="CheckOut_Form_LastName" required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Company" className="NotReq">Company</label>
                            <input onChange={InputOnChangeHandler} value={form.Company} type="text" name="Company" id="CheckOut_Form_Company"/>
                        </div>
                        <div>
                            <label htmlFor="Country">Country</label>
                            <input onChange={InputOnChangeHandler} value={form.Country} type="text" name="Country" id="CheckOut_Form_Country" required/>
                        </div>
                        <div>
                            <label htmlFor="City">City</label>
                            <input onChange={InputOnChangeHandler} value={form.City} type="text" name="City" id="CheckOut_Form_City" required/>
                        </div>
                        <div>
                            <label htmlFor="State">State</label>
                            <input onChange={InputOnChangeHandler} value={form.State} type="text" name="State" id="CheckOut_Form_State" required/>
                        </div>
                        <div>
                            <label htmlFor="ZIP">ZIP Code</label>
                            <input onChange={InputOnChangeHandler} value={form.ZIP} type="number" name="ZIP" id="CheckOut_Form_ZIP" required/>
                        </div>
                        <div>
                            <label htmlFor="Address">Address</label>
                            <input onChange={InputOnChangeHandler} value={form.Address} type="text" name="Address" id="CheckOut_Form_Address" required/>
                        </div>
                        <div>
                            <label htmlFor="Phone">Phone</label>
                            <input onChange={InputOnChangeHandler} value={form.Phone} type="number" name="Phone" id="CheckOut_Form_Phone" required/>
                        </div>

                    </div>
                    <div className="CheckOut_Form_Notes_container">
                        <div className="CheckOut_Form_Notes_CheckBox_Container">
                            <input type="checkbox" name="CheckOut_Form_Notes_CheckBox" id="CheckOut_Form_Notes_CheckBox" onChange={()=>CheckboxNotesOnChangeHandler()}/><p>Order Notes?</p>
                        </div>
                        {checkboxNotesBool?<div className="CheckOut_Form_Notes_CheckBox_Details">
                                            <textarea maxLength={1200} name='Notas' value={form.Notas} onChange={InputOnChangeHandler} placeholder="Notes about your order, e.g. special notes for the delivery." id="CheckOut_Form_Notes_TextArea_Details"  />
                                            </div>:
                                            <div className="CheckOut_Form_Notes_CheckBox_Details"
                                                ><p>Notes about your order, e.g. special notes for the delivery.</p>
                                            </div>}
                    </div>
                    <button type="submit" id="CheckOut_Form_Button_Submit" >Enviar</button>

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
                        <p className="CheckOut_ProductList_Container_LastRow_TotalText">Your cart Is Empty.</p>       
                    </div>
                    </>}
                </div>
                    <div className="privacyWarning">
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposed described in our<a target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> privacy policy.</a></p>
                    </div>
                    <div className="termsandconditions_Checkbox_container">
                        <input type="checkbox" name="termsandconditions_Checkbox" id="termsandconditions_Checkbox" onChange={()=>CheckboxTACOnChangeHandler()}/><p>I have read and agree to the website <a target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">terms and conditions</a></p>
                    </div>
                    {checkboxTermsAndConditions && cartContextValue[0].hasOwnProperty('id')?<button onClick={()=>{PlaceOrderButtonOnClickHandler()}} className="PlaceOrder_Button">PLACE ORDER</button>:<button disabled className="PlaceOrder_Button">PLACE ORDER</button>}
                    
            </div>
    </div>
}
export default CheckOut