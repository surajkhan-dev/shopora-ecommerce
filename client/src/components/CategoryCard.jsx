
const CategoryCard = ({ name, image, onClick }) => {
  return (
    <div 
    onClick={onClick}
    className="bg-white group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <img src={image} alt={name} className="w-full h-40 group-hover:scale-110 object-cover transition-transform duration-300" />
      <h3 className="text-center font-semibold py-3">{name}</h3>
    </div>
  );
};

export default CategoryCard;
