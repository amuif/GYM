import React from 'react'
import styles from '@/app/globals.css'
import Image from 'next/image'
const Landing = () => {
  return (
   <>
   <div>
   <div className={styles.bgWrap}>
        <Image
          src="/Images/faqBG.jpg"
         fill={true}
          className=" -z-10 blur-sm brightness-50 h-44"
          quality={100}
          alt="Background Image"
        />
      </div>
      <div className=" flex flex-col items-center justify-center h-screen pb-11 gap-5 ">
        <div><h2 className='text-white text-center font-bold text-4xl'>Frequently Asked Questions</h2></div>
      </div>
   </div>

   </>
  )
}

export default Landing