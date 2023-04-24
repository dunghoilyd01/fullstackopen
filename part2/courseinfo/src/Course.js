function Course ({courses}) {
    return (
      <div>
        <h1>Web development cirriculum</h1>
        {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
          <Content course={course} />
          <Total parts={course.parts} />
        </div>
      ))}
      </div>
    );
  }
  
  function Header ({name}) {
    return (<h2>{name}</h2>)
  }
  
  function Content ({course}){
    return (
      <div>
        {course.parts.map((part) => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    let total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <h3>Total of {total} exercises</h3>
  }
  
  function Part (props) {
    return (
      <div>
        {props.part.name} {props.part.exercises}
      </div>
    )
  }

  export default Course;