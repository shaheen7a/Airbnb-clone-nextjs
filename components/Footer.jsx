import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14
    bg-gray-100 text-gray-600'>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Airbnb</h5>
        <p>Now Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Hosting</h5>
        <p>Shaheen Clones</p>
        <p>Presents</p>
        <p>React Projects</p>
        <p>Next Projects</p>
        <p>fullStack Projects</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Support</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Cancellation options</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighbourhood concern</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Community</h5>
        <p>Airbnb.org: disaster relief housingr</p>
        <p>
          Combating discrimination</p>
      </div>

    </div>
  )
}

export default Footer