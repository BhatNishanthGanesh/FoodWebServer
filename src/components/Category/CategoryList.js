import React from 'react'
import "./Category.scss"
const CategoryList = ({categories})=> {
  console.log(categories);
  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className='container'>
       <div className='sc-title'>categories</div>
       <section className='sc-category grid'>
        {
          categories.map(category=>{
            const {idCategory: id,strCategory: title, strCategoryThumb:thumnail}=category;
          })
        }
       </section>
      </div> 
    </div>
  )
}

export default CategoryList
