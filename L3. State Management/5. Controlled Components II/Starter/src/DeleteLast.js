const DeleteLast = ({ onDeleteLastItem, buttonDisabled }) => {
    const handleDeleteLastItem = (event) => {
      onDeleteLastItem();
    };
  
    return (
      <button onClick={handleDeleteLastItem} disabled={buttonDisabled}>
        Delete Last Item
      </button>
    );
  };

export default DeleteLast;