import PropTypes from 'prop-types'
import styles from './Toolbar.module.css'

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className={styles.toolbar}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          className={filter === selected ? styles['selected'] : ''}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

Toolbar.defaultProps = {
  filters: ['All'],
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
}

export default Toolbar
