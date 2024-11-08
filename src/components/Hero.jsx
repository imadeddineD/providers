import React from 'react'

const Hero = ({label , login}) => {
  return (
    <section className=' pt-28 lg:pt-36'>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
            <div className="text-4xl lg:text-6xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-600 bg-clip-text text-transparent ">
                {label}
            </div>
            <div className="mt-4 space-x-4">
                <a href="/auth/login" className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-75 ease-linear">
                    {login}
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero