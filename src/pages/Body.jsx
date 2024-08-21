import vector from '/5004254.jpg';
import landing from '/Landing PG (1).jpg';

function Body() {
  return (
    <div className='Body'>
      <div className='Home relative'>
        <div className="h-[90vh] overflow-hidden relative">
          <img src={landing} alt="landing page" className='object-cover w-full h-full' />
          <div className="absolute mt-16 top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-orange-500 text-4xl p-4">
            <h1>Burger | Pizza | Tacco | Tamales | Sandwich</h1>
          </div>
        </div>
      </div>


      <div className="bg-orange-500">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="self-center my-12">
            <img src={vector} alt="vectorimage" className="p-6 rounded-full rounded-r-2xl" />
          </div>
          <div className="self-center">
            <h1 className='text-center text-4xl'>Karibu Nyumbani!</h1>
            <p className='p-6'>Thinking of Searching effortlessly recipes online?, We Got you, Whether you Are looking for a quick weeknight dinner or a gourmet feast, just type in your ingredients or dish name, and browse through a variety of recipes tailored to your needs. Save your favorites, explore new flavors, and turn cooking into a delightful experience with our intuitive recipe search tool.</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Body;