import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa';
function List({item,removeItem,editItem}) {
  return (
    <div className="grocery-list">
        {item.map((item) => {
        const { id, title } = item;
            return(
                <article className="grocery-item" key={id}>
                    <p className="title">{title}</p>
                    <div className="btn-container">
                        <button type='button' className="edit-btn" onClick={()=>editItem(id)}><FaEdit/></button>
                        <button className="delete-btn" type='button' onClick={()=>removeItem(id)}><FaTrash/></button>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default List