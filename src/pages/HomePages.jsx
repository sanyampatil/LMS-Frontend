import HomeLayout from '../Layout/HomeLayout'
import { Link } from 'react-router-dom'
import homePageMainImage from '../assets/Images/homePageMainImage.png'
function HomePage () {
  return (
    <HomeLayout>
      <div className=' text-white flex items-center gap-10 mx-16   h-[90vh]'>
        <div className='w-1/2 space-y-6 font-semibold'>
          <h1 className='text-5xl font-semibold'>
            Find out best
            <span className='text-yellow-500 font-bold'>online courses</span>
            <p className=' text-xl text-gray-200'>
              We have library of courses taught by nightly skilled and qualified
              facilties at a very affortable cost
            </p>
            <div className='space-x-6'>
              <Link to='/courses'>
                <button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                  Explore courses
                </button>
              </Link>
              <Link to='/contact'>
                <button className='border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                  Contact Us
                </button>
              </Link>
              
            </div>
          </h1>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img alt='homepage image' src={homePageMainImage} />
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage
