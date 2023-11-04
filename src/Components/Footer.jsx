import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'
function Footer(){
 return(
  <>
   <footer className='relative  left-0 bottom-0  h-[10vh] flex flex-col sm:flex-row items-center  py-5 bg-gray-800 sm:x-20'>

<section>
  Copyright 2023
</section>
<section className='flex item-center justify-center gap-5 text-2xl text-white'>
<a  className="hover:text-yellow-500 transition-all ease-in-out duration-300" >
 <BsFacebook/>
</a>

<a  className="hover:text-yellow-500 transition-all ease-in-out duration-300" >
 <BsLinkedin />
</a>

<a  className="hover:text-yellow-500 transition-all ease-in-out duration-300" >
 <BsTwitter/>
</a>

<a  className="hover:text-yellow-500 transition-all ease-in-out duration-300" >
 <BsInstagram/>
</a>

</section>

   </footer>

  </>
 )
}
export default Footer;
