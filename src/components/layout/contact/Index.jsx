import React from 'react'
import Form from './Form'
import Adresses from './Adresses'
function Index({data}) {
  return (
    <section id='contact' className='section padding'>
        <h1>Contact</h1>
        <p className='text-center mb-4'>send me a message</p>

        <div className='md:flex md:flex-row-reverse md:items-start md:justify-between md:gap-10'>
        <Form />
        <Adresses data={data} />
        </div>
    </section>
  )
}

export default Index