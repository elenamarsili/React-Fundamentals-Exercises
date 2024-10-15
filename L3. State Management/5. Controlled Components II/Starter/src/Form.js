import { useState } from "react";

const Form = ({ onAddItem }) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
    const addItem = (event) => {
    event.preventDefault();
    onAddItem(value);
    setValue("");
    };

    const inputIsEmpty = () => value === "";

    return (
        <div>
            <form onSubmit={addItem}>
                <input
                type="text"
                placeholder="Enter New Item"
                value={value}
                onChange={handleChange}
                />
                <button disabled={inputIsEmpty()}>Add</button>
            </form>
        </div>
    )
};

export default Form;