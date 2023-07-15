import React from 'react'

function SocialMedia({styles,data}) {
  return (
    <div className={styles}>
        {data.map(item=>{
          const {name, href, icon} = item;
          return <a  href={href} key={name}>{icon}</a>
        })}
    </div>
  )
}

export default SocialMedia