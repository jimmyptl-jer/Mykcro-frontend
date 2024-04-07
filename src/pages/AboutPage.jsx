import MelissaImage from '../assets/Melissa Hopper.jpg';

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1  gap-8 px-8 md:px-16 py-16 md:py-20 text-black m-5 md:m-0 lg:m-0">
      <div className="col-span-1 md:col-span-2 mb-8 md:mb-0">
        <p className="text-3xl md:text-6xl mb-6 animate-fadeIn font-bold text-center">
          You can FINALLY manage your entire business in one place!
        </p>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn">
          <strong>ABOUT MYKCRO:</strong><br />
          Mykcro was built on the foundation of making life easier for small business owners and office managers by providing an easy way to manage their business. It serves as a command center to oversee all aspects of managing a business from one central location and offers a convenient way to store and access important contacts and those neverending to-do lists.
        </p>
      </div>

      <div className="flex flex-col-1 items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={MelissaImage} alt="Melissa's Image" className="w-full h-auto md:max-w-lg md:mx-auto shadow-md" />
        </div>
        <div className="md:w-1/2 flex-1">
          <p className="text-lg md:text-xl mb-6 animate-fadeIn">
            <strong>ABOUT THE FOUNDER:</strong><br />
            Mykcro was founded by Melissa Hopper, a business consultant, former office manager, and daughter of a small business owner. Melissa desperately wanted somewhere to go that would allow her to manage every aspect of a business from one location. When she couldn't find an existing solution, she decided to create it herself.
          </p>
          <p className="text-lg md:text-xl mb-6 animate-fadeIn">
            Connect with Melissa on <a href="https://www.linkedin.com/in/melissa-hopper" className="text-blue-500 hover:underline">LinkedIn</a> or visit <a href="https://melissa-hopper.com" className="text-blue-500 hover:underline">melissa-hopper.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
