import React from 'react'


const TaskItem = ({children}) => {
  return (
   <>
    <tr>
            {children}
    </tr> 
   </>
  )
}

export default TaskItem