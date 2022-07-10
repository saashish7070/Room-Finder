import React from "react"
import {useState} from 'react';
import App from "../App.css"
export default function Search(){
    const [displayFile,setDisplay] = useState(true);
    function dropDownShow(){
       setDisplay(current=>!current);
    }
    return(
        <div className="bigContainer1">
            <div className="container1">
                <div className="logo">

                </div>
                <div className="SearchBar">
                    <form className="dropDownMenu">
                        <div onMouseDown={dropDownShow} className="productDropDown">Product</div>
                        <div id="dropDown" className="dropDown" style={{display:(displayFile?"none":"block")}}>
                            <a className="button">Product</a>
                            <a>Member</a>
                        </div>
                    </form>
                    <div className="input_part">
                        <input className="input_place" type="text" placeholder="Search for the products and members"></input>
                    </div>
                </div>
            </div>
            <div className="container2">
                    <a className="wishList">Wishlist</a>
                    <div className="bigSell"><div className="sellItem">Sell Now</div></div>
            </div>
        </div>
    )
};