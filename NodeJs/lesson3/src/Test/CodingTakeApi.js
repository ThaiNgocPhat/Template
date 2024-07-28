import React, { useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const CodingTakeApi = () => {
    const [persons, setPersons] = useState([])

    const fetchApi = async () => {
        const res = await axios.get('https://randomuser.me/api/?results=1')
        console.log(res.data.results)
        // return res.data.results;
        return transformData(res.data.results);
    }
    const transformData = (results) => {
        return results.map(user => {
           const {title, first, last} = user.name;
           return{...user,title,first,last};
    })
}


        useEffect(() => {
            fetchApi()
            .then(personApi => {
                setPersons(personApi)
                console.log(persons)
            })
        },[])
        
  return (
  <>
    {persons.map((person) => (
      <div key={person.id}>
        <div>Title: {person.title}</div>
        <div>First: {person.first}</div>
        <div>Last: {person.last}</div>
      </div>
    ))}
  </>
);

}
export default CodingTakeApi      