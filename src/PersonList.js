import React,{Component} from "react";
import axios from "axios";
import './List.css';

export default class PersonList extends Component 
{
    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
        })
    }

    render() {
        return (
            <div>
                <ul className="user-list">
                    {this.state.persons.map((person, index) =>( 
                        <li key={index} className="user-item">
                            <img
                                src={person.picture.large}
                                alt={`${person.name.first} ${person.name.last}`}
                                className="user-image"
                            />
                            <div className="user-info">
                                <h3>{`${person.name.title}${person.name.first} ${person.name.last}`} - {person.login.uuid}</h3>
                                <p>User Name: {person.login.username}</p>
                                <p>Gender: {person.gender}</p>
                                <p>Time Zone Description: {person.location.timezone.description}</p>
                                <p>Address:{`${person.location.street.number} ${person.location.street.name} 
                                    ${person.location.city}
                                    ${person.location.state}
                                    ${person.location.country} - 
                                    ${person.location.postcode}`}</p>
                                <p>Email: {person.email}</p>
                                <p>Birth Date and Age: {person.dob.date} ({person.dob.age})</p>
                                <p>Register Date: {person.registered.date}</p>
                                <p>Phone#: {person.phone}</p>
                                <p>Cell#: {person.cell}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}