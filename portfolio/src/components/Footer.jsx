import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black/90 text-white">
        <div className="mx-auto text-center py-15">
          <p>&copy; {new Date().getFullYear()} Rajani Ranjan Jha.</p>
          {/* <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/rajani-ranjan-jha/" className="text-gray-400 hover:text-gray-200">LinkedIn</a>
            <a href="https://github.com/Rajani-Ranjan-Jha" className="text-gray-400 hover:text-gray-200">GitHub</a>
          </div> */}
        </div>
      </footer>
    </div>
  )
}

export default Footer
