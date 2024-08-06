const Header = (props) => {
    return (
      <h2>{props.name}</h2>
    )
}
  
const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}
  
const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}
  
const Total = (props) => {
  const totalExercises = props.parts.reduce((total, currentNum) => {
    return total + currentNum.exercises;
  }, 0)
  
  return (
    <b>total of {totalExercises} exercises</b>
  )
}

const Course = (props) => {
    return (
      <div>
        {props.courses.map(course => 
          <div>
            <Header name={course.name} />
            <Content course={course} />
            <Total parts={course.parts} />
          </div>
        )}
      </div>
    )
}

export default Course