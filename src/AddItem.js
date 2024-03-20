import { useRef } from 'react';
import { FaPlus } from "react-icons/fa"

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
    const inputRef = useRef('');
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            ref={inputRef}
            type="text"
            id="addItem"
            placeholder="Add New Item"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label="Add Item"
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
