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

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id:1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App
