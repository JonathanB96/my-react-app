import React from 'react'
import './Addrecipe.css'

export default function Addrecipe() {
  return <>
    <div className="addrecipe-container">
  <form>

    <label for="fname">Recipe name</label>
    <input type="text" id="RecipeName" name="firstname" placeholder="Recipe name.."/>

    <label for="lname">Image URL</label>
    <input type="text" id="imageUrl" name="lastname" placeholder="Image URL here"/>

    <label for="subject">Steps</label>
    <textarea id="steps" name="subject" placeholder="Describe the steps of the recipe.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div> 
  </>
}
