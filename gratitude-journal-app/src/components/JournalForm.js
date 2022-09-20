import React, { useState } from 'react'

function JournalForm(props) {
    const [input, setInput] = useState ('')
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })
        setInput('')
        
    }
  return (
    <form className='journal-form' onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='Add Gratitude' 
            value={input} 
            name='text'
            className='journal-input'
            onChange={handleChange}
            />
        <button className='add-gratitude-button'>Add Gratitude</button>
    </form>
  )
}

export default JournalForm