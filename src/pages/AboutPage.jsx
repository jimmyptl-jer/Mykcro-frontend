// AboutMe component
import MelissaImage from '../assets/Melissa Hopper.jpg';

const AboutMe = () => {


  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 md:py-20 text-black m-5 md:m-0 lg:m-0 ">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={MelissaImage} alt="Jimmy's Image" className="w-full h-auto md:max-w-lg md:mx-auto shadow-md" />
      </div>
      <div className="md:w-1/2">
        <p className="text-lg md:text-xl mb-6 animate-fadeIn">
          Mykcro was founded by Melissa Hopper, a business consultant, former office manager, and daughter of a small business owner.
        </p>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn">
          Melissa desperately wanted somewhere to go that would allow her to manage every aspect of a business from one location. When she couldn't find an existing solution, she decided to create it herself.
        </p>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn">
          Mykcro was built on the foundation of making life easier for small business owners and office managers by providing an easy way to manage their business. It serves as a command center to oversee all aspects of managing a business from one central location and offers a convenient way to store and access important contacts and those neverending to-do lists.
        </p>


      </div>
    </div>
  );
};

export default AboutMe;
