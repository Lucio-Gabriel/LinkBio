import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <div className='flex items-center justify-center mt-32'>
        <article className='bg-[#242424] max-w-2xl w-full rounded-2xl m-3'>
          <section>
            <div className='flex items-center justify-center m-10'>
              <img 
                src="src/assets/images/foto-bio.jpg" 
                alt="foto de perfil" 
                className='rounded-full w-28 h-28'
              />
            </div>

            <div className='flex flex-col justify-center items-center m-10'>
              <h1 className='font-medium text-white text-2xl'>
                Lucio Azevedo
              </h1>

              <p className='mt-3 text-xl font-medium text-[#cfef65]'>
                Pará, Brasil
              </p>

              <p className='mt-8 text-md font-medium text-slate-200'>
                "Desenvolvedor Full Stack"
              </p>
            </div>
            
          </section>
        </article>
      </div>
    </div>
  );
}

// https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ

export default App
