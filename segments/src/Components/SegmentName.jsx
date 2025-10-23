const SegmentName= ({segmentName,setSegmentName})=>{

  return (
     <>
        <label>Enter the Name of the segment</label>
        <input type="text" className="w-100" value={segmentName} onChange={(e)=>setSegmentName(e.target.value)}  placeholder="Name of the segment"/>
     </>
  );
}

export default SegmentName;