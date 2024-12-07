import React from 'react'

export default function Footer() {
    return (
        <div className='mt-20 bg-neutral text-neutral-content'> 
            <footer className="footer web-container items-center p-4">
                <aside className="grid-flow-col items-center">
                    
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.linkedin.com/in/maruf6890" target="_blank" rel="noopener noreferrer">
  Linkedin
</a>

<a href="https://github.com/maruf6890" target="_blank" rel="noopener noreferrer">
  Github
</a>

<a href="https://www.facebook.com/maruf6890" target="_blank" rel="noopener noreferrer">
  Facebook
</a>

                </nav>
            </footer>
        </div>

    )
}
