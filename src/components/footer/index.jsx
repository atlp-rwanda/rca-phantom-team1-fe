import React from 'react'

function Footer() {
  return (
    <footer
      className='footer py-10 bg-neutral text-neutral-content fixed bottom-0 w-full mx-auto'
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <div>
        <span className='font-bold'>Useful Links</span>
        <a className='link link-hover'>Kigali - Rwanda</a>
        <a className='link link-hover'>Kimihurura</a>
        <a className='link link-hover'>Phone: 073773743</a>
        <a className='link link-hover'>Email: phantom@gmail.com</a>
      </div>

      <div>
        <span className='font-bold'>Useful Links</span>
        <a className='link link-hover'>Home</a>
        <a className='link link-hover'>About Us</a>
        <a className='link link-hover'>Our Services</a>
        <a className='link link-hover'>Contact Us</a>
      </div>
      <div>
        <span className='font-bold'>Partners</span>
        <a className='link link-hover'>Companies</a>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a className='link link-hover'>Organisational</a>
          <button className='btn' style={{ color: '#97D601' }}>
            START NOW
          </button>
        </div>
      </div>
      <div>
        <span className='font-bold'>Newsletter</span>
        <div className='form-control w-80'>
          <label className='label'>
            <span>
              Subscribe to Phantom to receive all news and other services
            </span>
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder='username@site.com'
              className='input input-bordered w-full pr-16'
            />
            <button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
