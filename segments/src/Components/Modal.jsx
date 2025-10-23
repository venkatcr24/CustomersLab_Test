import './Modal.css';
export const Modal = ({isOpened,children})=>{
    if(!isOpened) return null;

    return (
       <>
         <div className='overlay'>
            <div className='modal-container'>
               {children}
            </div>
         </div>
       </>    
    );
}