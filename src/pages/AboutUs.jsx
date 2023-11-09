import { Filler } from 'chart.js'
import HomeLayout from '../Layout/HomeLayout'
import aboutMainImage from '../assets/Images/aboutMainImage.png'
import apj from "../assets/Images/apj.png"
import billGates from "../assets/Images/billGates.png"
import einstein from "../assets/Images/einstein.png"
import nelsonMandela from "../assets/Images/nelsonMandela.png"



function AboutUs () {
  return (
    <HomeLayout>
      <div className='pl-20 pt-20 flex flex-col text-white'>
        <div className='flex items-center gap-5 mx-10'>
          <section className='w-1/2 space-y-10'>
            <h1 className='text-5xl text-yellow-500 font-semibold'>
              Affortable and quality aducation
            </h1>
            <p className='text-xl text-gray-200'>
              Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dolores nesciunt quidem eos molestiae sint! Minus cupiditate
              aliquid quod voluptatum voluptate? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Exercitationem quod odit ex quam, id
              suscipit quos ipsam fugiat. Voluptatem, praesentium! dolor Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
              ratione! sit amet consectetur adipisicing elit. Quo est harum
              possimus delectus sequi nesciunt sit repudiandae error cumque
              aliquam.
            </p>
          </section>

          <div className='w-1/2'>
            <img
              id='test-1'
              style={{
                filter: 'drop-shadow(0px 10px 10px rgb(0,0,0));'
              }}
              alt='about main image'
              className='drop-shadow-2xl'
              src={aboutMainImage}
            />
          </div>
     1   </div>


      {/* <div className='carousel border-white w-1/2 my-50 m-auto'> */}
        {/* <div className='carousel-item relative w-full'> */}
        <div className='carousel w-1/2 my-50 m-auto'>
            <div id='slide1' className='carousel-item relative w-full'>
              <img
                src={apj}
                className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide4' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide2' className='btn btn-circle'>
                </a>
                  ❯
              </div>
            </div>
            <div id='slide2' className='carousel-item relative w-full'>
              <img
                src={einstein}               className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide1' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide3' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='slide3' className='carousel-item relative w-full'>
              <img
                src={nelsonMandela}
                className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide2' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide4' className='btn btn-circle'>
                  ❯
                </a>
              </div> 
            </div>
            <div id='slide4' className='carousel-item relative w-full'>
              <img
                src={billGates}
                className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide3' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide1' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
      {/*  */}
      {/* // */}


      </div>

     
    </HomeLayout>
  )
}
export default AboutUs
