import { useState } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import ProjectList from '../ProjectList/ProjectList'
import data from '../../src/js/data'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const [selected, setSelected] = useState('All')
  const [projects, setProjects] = useState(data)

  const filters = ['All', 'Business Cards', 'Websites', 'Flayers']

  const onSelectFilter = (filter) => {
    setSelected(filter)

    setProjects(filter === 'All' ? data : data.filter((project) => project.category === filter))
  }

  return (
    <div className={styles.portfolio}>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={projects} />
    </div>
  )
}

export default Portfolio
