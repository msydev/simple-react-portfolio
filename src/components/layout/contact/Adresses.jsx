import React from 'react'
function Adresses({data}) {
  return (
    <div className='my-8 lg:w-1/4 lg:grow lg:m-0'>
        {data.map(adress=>{
            const {id, title, value, icon} = adress;
            return <section className='flex-center-start gap-4 mb-4 lg:mb-8' key={id}>
                <div>{icon}</div>
                <div className='overflow-auto'>
                    <h3>{title}</h3>
                    <p>{value}</p>
                </div>
            </section>
        })}
    </div>
  )
}

export default Adresses