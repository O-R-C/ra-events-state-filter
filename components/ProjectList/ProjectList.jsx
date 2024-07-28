import PropTypes from 'prop-types'
import splitProjects from './splitProjects'
import Column from '../Column/Column'
import styles from './ProjectList.module.css'

const ProjectList = ({ projects }) => {
  const { firstColumn, secondColumn, thirdColumn } = splitProjects(projects)

  return (
    <div className={styles['project-list']}>
      <Column
        key={1}
        projects={firstColumn}
      />
      <Column
        key={2}
        projects={secondColumn}
      />
      <Column
        key={3}
        projects={thirdColumn}
      />
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array,
}

export default ProjectList
