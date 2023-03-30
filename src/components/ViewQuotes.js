import React from 'react'

const ViewQuotes = ({quotes}) => {
  return (
    <>
  {quotes.map((quote) => (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
            {quote.name}
            </div>
            </div>
  ))
}
            
            
    </>
  )
}

export default ViewQuotes
