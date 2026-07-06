import React from 'react'
import { categories } from '../../Category'

function CategoriesFilter({ searchTerm, selectedCategory, onCategorySelect }) {
    // Hide categories when user is searching
    if (searchTerm !== "") {
        return null
    }

    return (
        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
            {categories.map((item) => (
                <div 
                    key={item.id} 
                    className='w-[103px] h-[110px] justify-center items-center flex flex-col gap-2 font-semibold 
                    rounded-md shadow-lg hover:bg-slate-400 cursor-pointer transition-all duration-200
                    ${selectedCategory === item.name.toLowerCase() ? "bg-slate-300" : ""}' 
                    onClick={() => onCategorySelect(item.name)}
                >
                    {item.icon}
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default CategoriesFilter
