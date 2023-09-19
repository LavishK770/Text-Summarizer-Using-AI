import React from 'react'
import{logo} from '../assets';

const Navbar = () => {
  const contactEmail = 'lavishk5012@gmail.com'; 
  
  return (
   <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full m-10 pt-3">
      <img src={logo} alt="sumz_logo" className="w-28 bject-contain" />
      <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => window.open('https://github.com/LavishK770')}
            className="black_btn"
          >
            Github
          </button>
          <a
            href={`mailto:${contactEmail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="black_btn">
              Contact Me
            </button>
          </a>
        </div>
     
    </nav>

    <h1 className='head_text'>
    Text Summarization with <br className='max-md:hidden'/>
      <span className='orange_gradient'>OpenAI</span>
    </h1>
    <h2 className='desc'>
    Harness the power of artificial intelligence to condense lengthy texts into concise summaries effortlessly. Save time and get to the core of the content in just a few clicks.
    </h2>
   </header>
  )
}

export default Navbar