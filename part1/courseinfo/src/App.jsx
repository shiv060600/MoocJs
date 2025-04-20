import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const Header = (props) => {
  return(
    <h1>Course Name : {props.course}</h1>
  )
};

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part}: {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
    </div>
  )
};

const Total = (props) => {
  return(
    <div>
      <p>
        number of exercises: {props.numberofexercises}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application Development';
  const part1 = 'fundementals of react';
  const exercises1 = 10;
  const part2 = 'using props to pass data';
  const exercises2 = 14;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const numberofexercises = exercises1 + exercises2 + exercises3;

  return(
    <div>
      <Header course = {course}/>
      <Content 
        part1 = {part1} exercises1 = {exercises1} part2 = {part2}
        exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3} />
      <Total numberofexercises = {numberofexercises} />
    </div>
  )
};

export default App;
