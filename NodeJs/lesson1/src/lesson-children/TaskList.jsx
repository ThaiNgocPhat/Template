import React from 'react'
import TaskItem from './TaskItem'
import { Link } from 'react-router-dom'


const TaskList = ({tasks}) => {
  return (
    <>
         <table class="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">Số thứ tự</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) =>(
                        <TaskItem>
                            <th scope="row">{task.id}</th>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>
                        <Link to='/update'>
                            <button className='btn btn-warning'>Sửa</button>
                        </Link>
                        <button className='btn btn-danger ms-2'>Xoá</button>
                        </td>
                        </TaskItem>
                        ))
                    }
                </tbody>
            </table>

    </>
  )
}

export default TaskList