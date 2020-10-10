import React from "react"
import Category from "./Category"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faBus } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"

function Categories(props) {
    return (
        <div className={`categories`}>
            <Category category="Groceries" items={2} amount={9.63} icon={faUtensils}/>      
            <Category category="Entertainment" items={4} amount={23.45} icon={faGamepad} />       
            <Category category="Transport" items={6} amount={27.48} icon={faBus}/>     
            <Category category="Shopping" items={1} amount={2.64} icon={faShoppingBasket}/>  
            <Category category="Groceries" items={2} amount={9.63} icon={faUtensils}/>      
            <Category category="Entertainment" items={4} amount={23.45} icon={faGamepad} />       
            <Category category="Transport" items={6} amount={27.48} icon={faBus}/>     
            <Category category="Shopping" items={1} amount={2.64} icon={faShoppingBasket}/>            
        </div> 
    )
}

export default Categories