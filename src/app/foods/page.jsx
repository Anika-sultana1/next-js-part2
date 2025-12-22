import React from 'react';
import FoodCard from '../../components/cards/FoodCard';
const getFoods = async()=>{
    const res = await fetch(
        " https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
    )
    const data = await res.json();
    await new Promise((resolve)=>setTimeout(resolve, 3000))
    return data.foods || []
}


const Foods = async () => {

const foods = await getFoods();


    return (
        <div>
            <h3 className='text-4xl font-bold'>Total Found <span className='text-yellow-600'>{foods.length}</span> Foods</h3>
        <div className='grid my-5 grid-cols-3 gap-5'>
{
    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
}
        </div>
       
       
        </div>
    );
};

export default Foods;