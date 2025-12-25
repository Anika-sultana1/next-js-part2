import React from 'react';
import FoodCard from '../../components/cards/FoodCard';
import CartItems from './[id]/CartItems';
import InputSearch from '../../components/InputSearch';
import style from './Foods.module.css'
const getFoods = async(search)=>{
    const res = await fetch(
       `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, {next: {revalidate:10}}
    )
    const data = await res.json();
    await new Promise((resolve)=>setTimeout(resolve, 3000))
    return data.foods || []
}

export const metadata={
  title:'All Foods',
  description: "Best Fastfood in Noakhali"
}

const Foods = async ({searchParams}) => {


const {search = ""} = await searchParams;
const foods = await getFoods(search);

    return (
        <div>
            <h3 className={`text-4xl font-bold ${style.bgred}`}>Total Found <span className='text-yellow-600'>{foods.length}</span> Foods</h3>
       <div>
        <InputSearch></InputSearch>
       </div>
       <div className='flex gap-5'>
        <div className='flex-1 grid my-5 grid-cols-3 gap-5'>
{
    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
}
        </div>
        <div className='w-[250px] border-2 rounded p-4'>
<h2 className='text-2xl font-bold'>Cart items</h2> <hr />
<CartItems></CartItems>
        </div>
       </div>
       

       
       
        </div>
    );
};

export default Foods;