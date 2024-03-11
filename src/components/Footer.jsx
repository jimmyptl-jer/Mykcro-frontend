import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { IoCodeSlash } from "react-icons/io5";

import GrayWolf from '../assets/Mykcro logo.png';

export default function FooterCom() {
  return (
    <Footer container className='bg-transparent text-black'>
      <div className='w-full container mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl  dark:text-black'
            >
              <img
                src={GrayWolf}
                alt="Logo"
                className="md:w-60 md:h-60 object-contain justify-center w-20 h-20"
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Contact' className=' text-black' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='mailto:jimmyptl46@gmail.com'
                  className=' text-black'
                >
                  jimmyptl46@gmail.com
                </Footer.Link>
                <Footer.Link
                  href='tel:+16478658471'
                  className=' text-black'
                >
                  (+1) 647-865-8471
                </Footer.Link>
                <Footer.Link
                  href='tel:+4915904734016'
                  className=' text-black'
                >
                  (+49) 159-0473-4016
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow Me' className=' text-black' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/jimmyptl-jer'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' text-black'
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href='https://www.linkedin.com/in/jimmy-patel-b09311160'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' text-black'
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href='https://medium.com/@jimmyptl46'
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' text-black'
                >
                  Medium
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Melissa Hopper"
            year={new Date().getFullYear()}
            className=' text-black'
          />
          {/* <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.LinkGroup col>
              <Footer.Link
                href="/login"
                className=' text-black cursor-pointer'
              >
                <IoCodeSlash />
              </Footer.Link>
            </Footer.LinkGroup>
          </div> */}
        </div>
      </div>
    </Footer>
  );
}
