import React, { useState, useEffect, useRef} from 'react'

function JournalForm(props) {
    const [input, setInput] = useState ('')

    const inputFocus = useRef(null)

    useEffect (() => {
        inputFocus.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
        
    }
  return (
    <form className='journal-form' onSubmit={handleSubmit}>
        <input 
            type='text' 
            placeholder='I am grateful for...' 
            value={input} 
            name='text'
            className='journal-input'
            onChange={handleChange}
            ref={inputFocus}

            />
        <button className='gratitude-button'>Add Gratitude</button>
    </form>
  )
}

export default JournalForm