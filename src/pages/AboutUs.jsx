import { Filler } from 'chart.js'
import HomeLayout from '../Layout/HomeLayout'
import aboutMainImage from '../assets/Images/aboutMainImage.png'

function AboutUs () {
  return (
    <HomeLayout>
      <div className='pl-20 pt-20 flex flex-col text-white'>
        <div className='flex items-center gap-5 mx-10'>
          <section className='w1/2 space-y-10'>
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
               filter:"drop-shadow(0px 10px 10px rgb(0,0,0));"
              }
              
              }
              className='drop-shadow-2xl'
              src={aboutMainImage}
              alt='about main image'
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
export default AboutUs
