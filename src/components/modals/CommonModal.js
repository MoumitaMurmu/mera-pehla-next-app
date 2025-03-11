import Login from '../signup-signin/Login';
import './style.css';

const CommonModal = ({closeModal}) => {
  return (
    // The Modal
    <div className="modal">
        {/* Modal Content */}
       <div className="modal-content">
        <span className='close' onClick={closeModal}>&times;</span>
        <Login/>
       </div>
    </div>
  )
}

export default CommonModal;
