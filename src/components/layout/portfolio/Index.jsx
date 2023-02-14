import React, { useState } from 'react' 
import Tabs from './Tabs'
import Menu from './Menu'
function Index({data}) {
  
  let projectsCategories = ['all', ...new Set(data.map(project=>project.category))];

  const [displayedProjects, setDisplayedProjects] = useState(data);

  const filterProjects = (category)=>{
    if(category === 'all'){
      setDisplayedProjects(data);
      return;
    }
    else{
      const newProjects = data.filter((project) => project.category === category)
      setDisplayedProjects(newProjects);
    }
  }

  

  return (
    <div id='portfolio' className='section padding'>
        <h1 className='mb-8'>Portfolio</h1>
        <Tabs categories={projectsCategories} filterProjects={filterProjects}/>
        <Menu projects={displayedProjects} />
    </div>
  )
}

export default Index