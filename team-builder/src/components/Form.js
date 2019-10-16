import React, { useState } from "react";

const Form = (props) =>{

    const [teamMember, setTeamMember] = useState({
        name: '',
        job: '',
        email: ''
    })

    const changeHandler = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({ name: '', job: '', email: ''})
    }

    return (
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="name"
            onChange={changeHandler}
            value={teamMember.name}
          />
          <label htmlFor="job">Job</label>
          <input
            name="job"
            id="job"
            placeholder="Type your job"
            onChange={changeHandler}
            value={teamMember.job}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            placeholder="Type your email"
            onChange={changeHandler}
            value={teamMember.email}
          />
          <button type="submit">Add member</button>
        </form>
      );
}

export default Form