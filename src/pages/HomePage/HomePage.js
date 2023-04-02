import React from 'react'
import "./HomePage.scss"
import { useMealContext } from '../../context/mealContext'
import loader  from '../../components/Loader/Loader';
import CategoryList from '../../components/Category/CategoryList'
const HomePage = () => {
    const {categories,meals,categoryLis,mealsLoading}=useMealContext();

  return (
    <main className='main-content'>
     (categoryLoading)? <loader/>:<CategoryList categories = {categories}/>
    </main>
  )
}

export default HomePage
