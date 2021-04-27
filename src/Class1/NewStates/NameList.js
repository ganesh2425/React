import React from 'react'
function NameList() {
    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Antony",
            age: 27,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Jessica",
            age: 25,
            skill: "React-Native"
        },
        {
            id: 4,
            name: "Shakes",
            age: 26,
            skill: "Javascript"
        }
    ]
    const personList = persons.map(person=> <person key= "unique" person={person} />)
    return (
        <div>
        <div>personList</div>

        </div>
    )
}

export default NameList
