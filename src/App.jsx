import './App.css'
import Button from './Button';

function App() {

  return (
    <div>
      <div className='flex items-center justify-center mt-32'>
        <article className='bg-[#1F1F1F] max-w-md w-full rounded-2xl m-3'>
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

            <div className='flex flex-col items-center justify-center mb-10'>
              <Button link="https://github.com/Lucio-Gabriel">
                Github
              </Button>

              <Button link="https://www.linkedin.com/in/lucio-azevedo/">
                Linkedin
              </Button>

              <Button link="https://www.instagram.com/eogab__dev/">
                Instagram
              </Button>
            </div>
            
          </section>
        </article>
      </div>
    </div>
  );
}

export default App
