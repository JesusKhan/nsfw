import React from 'react'
const Person = ({ name, age }) => {
    return (
        <div>
            <h2>Entered Details:</h2>
            <h3>Name :{name}</h3>
            <h3>Age :{age}</h3>
            {age >= 18 ? <h1>Eligible to vote</h1> : <h1>Not Eligible for voting</h1>}
        </div>
    )
}
export default Person