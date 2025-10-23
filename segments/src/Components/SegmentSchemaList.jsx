const SegmentSchemaList = ({index,selected,availableOptions,handleSelectChange,handleDeleteDropdown})=>{
   
   return (
       <>
          <select className="modal-my-2" value={selected} onChange={(e)=>handleSelectChange(index,e.target.value)}>
             <option>--Add New Schema--</option>
             {availableOptions.map((option)=>(
               <option key={option.value} value={option.value}>
                 {option.label}
               </option>
             ))}
          </select>
          <button onClick={()=>handleDeleteDropdown(index)}>-</button>
       </>
   );
}

export default SegmentSchemaList;