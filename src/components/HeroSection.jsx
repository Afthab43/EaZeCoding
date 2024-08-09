// import video1 from '../assets/videos/videos1'
import gif1 from '../assets/videos/gif1.gif';
import HeroSecImage2 from '../assets/videos/robot_human.jpeg';

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col item-center mt-5 lg:mt-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Streamline Development with Cutting-Edge Tools{" "}
          <span className="bg-gradient-to-r from-purple-700 to-purple-950 text-transparent bg-clip-text">
            for Developers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 px-20">
          Transform your coding experience with{" "}
          <span className="hover:text-purple-600 cursor-pointer">
            EaZeCoding
          </span>
          , providing innovative and efficient tools designed specifically for
          developers to enhance productivity and simplify complex development
          tasks effortlessly.
        </p>
        <div className="flex  justify-center  my-7">
          <a href="#" className="py-2 px-3 mx-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-950">
          Get started for free
          </a>
          <a href="#" className="py-2 px-3 mx-2 border rounded-md hover:text-black hover:font-medium hover:bg-white">
           Documentation
          </a>
        </div>
        <div className="flex justify-center my-4 mx-14">
            <img src={gif1} className='rounded-lg w-1/2 border border-purple-900 shadow-purple-400 mx-4 my-3' />
            <img src={HeroSecImage2} className='rounded-lg w-1/2 border border-purple-900 shadow-purple-400 mx-4 my-3' />
        </div> 
      </div>
    </div>
  );
};

export default HeroSection;
