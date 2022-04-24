import React,{useState} from 'react'
import './bugForm.css'
import BugModel from '../../../../Models/bugModel'

export default (props)=>{
    const [bugObject, setBugObject] = useState(new BugModel(props.bug))

    function inputChanged(e){
        setBugObject({
            ...bugObject,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className='bug-create'>
            {props.title == "Edit Bug" && <button className='close-btn' onClick={props.close}>Close</button>}
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input name='name'placeholder='Bug Name' required onChanged={inputChanged} value={bugObject.name}></input>
                
                <label>Details:</label>
                <textarea name='details'placeholder='Detailed description on the bug' required onChanged={inputChanged} value={bugObject.details}></textarea>
            
                <label>Steps:</label>
                <textarea name='steps'placeholder='Steps to recreate the bug' required onChanged={inputChanged} value={bugObject.steps}></textarea>
                
                <label name='priority' required>Priority:</label>
                <select name='priority' required onChanged={inputChanged} value={bugObject.priority}>
                    <option value='1'>High</option>
                    <option value='2'>Mid</option>
                    <option value='3'>Low</option>
                </select>
                
                <label>Assigned:</label>
                <select name='assigned' onChanged={inputChanged} value={bugObject.assigned}>
                    <option>Niha</option>
                </select>

                <label>Application Version:</label>
                <input name='version' placeholder='Application Version' onChanged={inputChanged} value={bugObject.version}></input>

                <button type='submit'>{props.title}</button>
            </form>
        
        </div>
    )
}