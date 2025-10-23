import { useState } from "react";
import SegmentForm from "./Components/SegmentForm";
import { Modal } from "./Components/Modal";


const App = ()=>{
  const [isOpened,setIsOpened] = useState(false);

  return (
     <>
       <button className="save-segment" onClick={()=>setIsOpened(true)}>
               Save Segment
       </button>
  
       <Modal isOpened={isOpened}>
          <SegmentForm isOpened={isOpened} setIsOpened={setIsOpened}/>
       </Modal>
     </>
  );
}

export default App;