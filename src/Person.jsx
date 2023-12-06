import { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ name: 'John', age: 100 });
    const [fValue, setFValue] = useState('')
    const [lValue, setLValue] = useState('')

    const onFChange = (e) => {
        setFValue(e.target.value)
        setPerson({...person, name: `${e.target.value} ${lValue}`})
    }

    const onLChange = (e) => {
        setLValue(e.target.value)
        setPerson({...person, name: `${fValue} ${e.target.value}`})
    }
  
    // GOOD - Do this!
    const handleIncreaseAge = () =>{
      // copy the existing person object into a new object
      // while updating the age property
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
    };
  
    return (
      <>
        <input 
            type="text" 
            placeholder="first name"
            value = {fValue}
            onChange={(e) => onFChange(e)}
        />
        <input 
            type="text" 
            placeholder="last name"
            value = {lValue}
            onChange={(e) => onLChange(e)}
        />
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }

  export default Person;