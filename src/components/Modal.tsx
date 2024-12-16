const Modal = ({ handleDelete }: any) => {

    return (
        <section id="myModal" className="modal">
        <div className="modal-content">
   
                <p>Are you sure you want to delete this row?</p>
                <button id="1" style={{ marginRight: "5px" }} onClick={handleDelete}>Yes</button>
                <button id="2" onClick={handleDelete}>No</button>
        </div>

    </section>)
}
export default Modal;