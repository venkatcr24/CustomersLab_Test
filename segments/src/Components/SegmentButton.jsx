const SegmentButton = ({handleSubmit,onClose})=>{

    return (
        <>
            <button onClick={handleSubmit} style={{backgroundColor:'#5fd8da',color:'#fff'}}>Save the segment</button>
            <button onClick={onClose} style={{backgroundColor:'#fff',color:'red',marginLeft:'10px'}}>Cancel</button>
        </>
    );
}

export default SegmentButton;