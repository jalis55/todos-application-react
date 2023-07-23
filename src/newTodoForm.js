import {useState} from 'react';
function NewTodoForm({onSubmit}) {
    const [newItem,setNewItem]=useState("")
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem==="") return
        
        onSubmit(newItem)
        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Add Item</label>
                <input type="text"
                    value={newItem} onChange={(e) => setNewItem(e.target.value)}
                    className='form-control w-25' id="item" />
            </div>


            <button className='btn btn-primary'>Add</button>
        </form>
    )
}

export default NewTodoForm;