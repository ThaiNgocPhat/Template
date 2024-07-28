import React from 'react'
import TaskList from './TaskList'
import {Link} from 'react-router-dom'
const tasks =[
  {
            id: 1,
            title: "Task 9",
            status: "Ẩn"
        },
        {
            id: 2,
            title: "Task X",
            status: "Kích hoạt"
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            status: "Ẩn"
        }
]

const TaskForm = () => {
  return (
    <>
        <div className='container mt-5'>
                <Link to='/add' className='btn btn-primary'>Thêm công việc</Link>
                <h2 className='text-center'>Danh sách công việc</h2>
                <TaskList tasks={tasks}/>
            </div>
    </>
  )
}

export default TaskForm