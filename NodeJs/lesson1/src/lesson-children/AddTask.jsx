import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AddTask = () => {
    const [newTask, setNewTask] = useState(
        {
            id: '',
            name: '',
            status: ''
        }
    )
    const handleChange = (event) => {
        const {name,value} = event.target;
        setNewTask({
            ...newTask,[name]: value})
        }
        //Post
        const handleAdd = async () => {
        try{
        await axios.post('https://65f592c641d90c1c5e09b9b9.mockapi.io/Newsrc/task',newTask)
        console.log('Add success');
        setNewTask({id:'',name:'',status:''})
        }catch(error){
        console.error(error);
}
}

return (
    <>
        <div className='container mt-5'>
            <form>
            <div className="mb-3">
                <label htmlFor="taskId" className="form-label">Task ID</label>
                <input
                type="text"
                className="form-control"
                id="taskId"
                name='id'
                value={newTask.id}
                onChange={handleChange}
                />
            </div>
        <div className="mb-3">
            <label htmlFor="taskName" className="form-label">Task ID</label>
            <input
            type="text"
            className="form-control"
            id="taskName"
            name='name'
            value={newTask.name}
            onChange={handleChange}

            />
        </div>
        <div className="mb-3">
            <label htmlFor="taskStatus" className="form-label">Task Status</label>
            <input
            type="text"
            className="form-control"
            id="taskStatus"
            name='status'
            value={newTask.status}
            onChange={handleChange}
            />
        </div>
        <button onClick={handleAdd}
        type="submit"
        className="btn btn-primary">Add Task</button>
        <Link to='/'>
            <button className='btn btn-secondary ms-2'>
                Trở lại
            </button>
        </Link>
        </form>
        </div>
    </>
)
}

export default AddTask