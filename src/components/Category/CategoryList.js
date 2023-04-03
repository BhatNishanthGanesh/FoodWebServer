import React,{useState} from 'react'
import "./Category.scss"
import {Link} from "react-router-dom"
const CategoryList = ({categories})=> {
  console.log(categories);
  const [count, setCount] = useState(0);


  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className='container'>
       <div className='sc-title'>categories</div>
       <section className='sc-category grid'>
        {
          categories.map(category=>{
            const {idCategory: id,strCategory: title, strCategoryThumb:thumbnail}=category;

            return (
              <>
                <div className = 'category-itm align-center justify-center'
                key = {
                  id
                } >
              <Link to = {`/meal/category/${title}`} >
                <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                 <img src={thumbnail} alt={title}/>
                 <div className='category-itm-title bg-orange'>
                  <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
                 </div>
              </div>
                  </Link>
                  <div className='align-center justify-between ml-auto
                   flex-row ml-auto pb-4 px-2 category-itm-btns__justify-center
                  '>

                    <button
                      onClick={() => setCount(count + 1)}
                      className={`category-itm-btn plus-btn`}>+</button>
                    <p className='ml-auto count'>
                      {count}
                    </p>
                    <button
                      onClick={() => {
                        if(count === 0) return;
                        setCount(count - 1)
                      }}
                      className={`category-itm-btn`}>-</button>
                  </div>
                </div>
              </>
            )
          })
        }
       </section>
      </div> 
    </div>
  )
}

export default CategoryList
