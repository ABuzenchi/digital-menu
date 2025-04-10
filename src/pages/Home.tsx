import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'; 
import foodAnimation from '../assets/food-animation.json';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-16 py-32 bg-gradient-to-br from-red-50 to-white">
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-red-800 mb-20">
          What do you like to eat today?
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
          <Link to="/menu">
            <button className="bg-red-700 text-white text-lg px-8 py-4 rounded-full hover:bg-red-800 transition">
              Order Now
            </button>
          </Link>
          <Link to="/menu">
            <button className="border border-red-700 text-red-700 text-lg px-8 py-4 rounded-full hover:bg-red-100 transition">
              See Full Menu
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 mt-10 md:mt-0 md:ml-32">
        <Lottie
          animationData={foodAnimation}
          loop
          autoplay
          style={{ height: '500px', width: '500px' }}
        />
      </div>
    </div>
  );
};

export default Home;
