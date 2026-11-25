import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='flex sm:flex-row flex-col-reverse min-h-screen justify-center items-center sm:gap-24 gap-6'>

            {/* left contents  */}
            <div className='max-w-2xl flex flex-col gap-8'>
                {/* headings and paragraphs  */}
                <div className='flex flex-col gap-4 justify-center text-center'>
                    <h1 className='text-blue-500 text-3xl font-bold'>Dermis Nepal</h1>
                    <h2 className='text-xl text-green-400 font-semibold'>Frontend Web Developer and Trainer</h2>
                    <p className='text-justify leading-10 sm:leading-8 text-[16px] px-4'>I am a passionate frontend web developer and trainer with experience in creating responsive and user-friendly web applications.I design and develop websites that are visually appealing and easy to navigate, using the latest web technologies and best practices. I am committed to delivering high-quality work and providing excellent customer service.
                    </p>
                </div>


                {/* buttons  */}
                <div className='flex gap-4 text-center justify-center'>

                    <a href="cv.pdf" download>
                        <button className='bg-blue-500 text-white font-semibold px-4 py-3'>Download CV</button>
                    </a>


                    <Link to="/projects">
                        <button className='border border-gray-300 px-4 py-3'>View Projects</button>
                    </Link>

                </div>

                {/* social icons  */}
                <div className='flex gap-7 justify-center text-2xl text-gray-700'>
                    <a href="https://www.facebook.com/" target='_blank'><FaFacebook /></a>
                    <a href="https://www.github.com/" target='_blank'><FaGithub /></a>
                    <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin /></a>
                    <a href="https://www.twitter.com/" target='_blank'><FaTwitter /></a>
                </div>
            </div>

            {/* right image  */}
            <div>
                <img src="/profile.jpeg" alt="Dermis nepal" className='sm:h-100 sm:w-100 rounded-full h-50 w-50 mt-18' />
            </div>
        </div >
    )
}

export default Hero