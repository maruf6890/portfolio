import React from 'react'
export default function SectionTitle({title,subtitle}) {
  return (
    <>  
    <div className="section-intro mb-10">
        <h2 className="text-2xl mb-2 text-center poppins-regular section-title text-white">{title}</h2>
        <p className='text-xs poppins-regular text-center text-sky-500'>{subtitle}</p>          
    </div>
       
    </>
  )
}
