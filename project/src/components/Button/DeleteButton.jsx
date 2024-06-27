import './Button.css';


const DeleteButton = ({catalogId, handleDelete}) => {

  return (
        <div className="DeleteButton" onClick={() => handleDelete(catalogId)}>
            <i className="fa fa-trash-can"></i>
        </div>
  );
}

export default DeleteButton;