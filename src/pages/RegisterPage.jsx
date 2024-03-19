import { Link } from 'react-router-dom';
import SignUpForm from "../forms/RegisterForm";
import Mykcro from '../assets/Mykcro logo.png';

const Register = () => {

  return (
    <div className="min-h-screen mt-10">
      <div className="max-w-3xl mx-auto items-center gap-10">
        <div className="flex justify-center md:justify-start">
          <img
            src={Mykcro}
            alt="Logo"
            className="w-50 h-50 object-contain"
          />
        </div>
        <div className='flex flex-col'>
          <div className="md:flex-1">
            <p className='text-center md:text-left text-slate-800 font-bold mt-5 text-4xl md:text-5xl'>
              You can FINALLY manage every aspect of your business in one place!
            </p>

            <ul className="mt-5 text-center md:text-left text-lg text-slate-800">
              <li>•	Easy access to login to your existing services (like accounting, banking and social media accounts)</li>
              <li>•	Store important contact information </li>
              <li>•	Create an ongoing to-do list</li>
            </ul>
          </div>
          <div className="md:flex-1">
            <SignUpForm />
            <div className='flex gap-2 text-sm font-bold mt-5 justify-center md:justify-start'>
              <span>Have an account?</span>
              <Link to='/login' className='text-blue-500'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
