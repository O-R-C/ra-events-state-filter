export const splitProjects = (projects) => {
  const result = {
    firstColumn: [...projects],
  }

  result.thirdColumn = getColumn(result.firstColumn, 3)
  result.firstColumn = updateProjects(result.firstColumn, 3)

  result.secondColumn = getColumn(result.firstColumn, 2)
  result.firstColumn = updateProjects(result.firstColumn, 2)

  return result
}

const getColumn = (projects, num) => {
  return projects.reduce((acc, project, index) => {
    if ((index + 1) % num === 0) {
      acc.push(project)
    }
    return acc
  }, [])
}

const updateProjects = (projects, num) => {
  return projects.filter((project, index) => (index + 1) % num !== 0)
}

export default splitProjects
