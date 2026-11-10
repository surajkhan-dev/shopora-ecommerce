import imgFashion from '../assets/Fashion.webp'
import imgElectronics from '../assets/Electronics.webp'
import imgHomes from '../assets/Homes.webp'
import imgBeauty from '../assets/Beauty.webp'
import imgSports from '../assets/Sports.webp'
import imgAccessories from '../assets/Accessories.webp'

import CategoryCard from './CategoryCard'

const categories = [
    {
        id: 1,
        name: "Fashion",
        image : imgFashion,
    },
        {
        id: 2,
        name: "Electronics",
        image : imgElectronics,
    },
       {
        id: 3,
        name: "Home & Living",
        image : imgHomes,
    },
       {
        id: 4,
        name: "Beauty",
        image : imgBeauty,
    },
       {
        id: 5,
        name: "Sports",
        image : imgSports,
    },
       {
        id: 6,
        name: "Accessories",
        image : imgAccessories,
    },
    
]

const CategorySection = ({onCategorySelect}) => {
  return (
    <section className='py-16 px-8'>
        
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-2xl font-bold py-2'>Shop by Category</h2>
            <p className='text-gray-500'>Explore our curated collections and find everything you need in one place.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                {/* <img src={imgFashion} alt="Fashion" className='rounded-xl shadow-2xl' /> */}
                {categories.map((category)=>{
                    return(
                        <CategoryCard 
                        key={category.id} 
                        name = {category.name} 
                        image={category.image}
                        onClick={()=> onCategorySelect(category.name)}
                         />
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default CategorySection
