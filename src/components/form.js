import React from "react";

const Form = props =>{
    return(
        <form onSubmit={props.getRecipe}>
            <input type="text" placeholder="search here" name="recipeName"/>
            <button>search</button>
        </form>
        )
}

export default Form;