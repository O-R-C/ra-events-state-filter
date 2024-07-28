import PropTypes from 'prop-types'
import styles from './Column.module.css'

const Column = ({ projects }) => {
  return (
    <div className={styles['column']}>
      {projects.map((project) => (
        <div
          className={styles['column-item']}
          key={project.id}
        >
          <img src={project.img} />
        </div>
      ))}
    </div>
  )
}

Column.propTypes = {
  projects: PropTypes.array,
}

export default Column
