import { useState } from "react"
import "./uploaditem.css"
function Upload_Item() {
  const[values,setValues]=useState({
    item:"",
    category:"",
    location:"",
    date:"",
    about:""
  })
  const handler=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  const handleDetails=(e)=>{
    e.preventDefault();
    console.log(values);
    setValues({item:"",category:"",location:"",date:"",about:""})
  }

  return (
    <>
      <h1 className="content">Upload Found Item</h1>
      <p className="content">Fill in the details below to help the owner find their item.</p>
      <form onSubmit={handleDetails}>
      <div style={{display:"flex"}}>
        <div style={{width:"300px",height:"200px",backgroundColor:"powderblue",borderRadius:"5px",border:"2px dashed #163B70",alignItems:"center",justifyContent:"center",padding:"70px",marginRight:"80px",marginLeft:"20px"}}>
        <input type="file" name="uploaditem" accept="image/jpeg,image/png,image/jpg"  onChange={handler} required>
        </input>
      </div>
      <div className="container" style={{gap:"20px"}}>
        <div style={{width:"500px"}}>
          
          <label htmlFor="item" style={{color:"#163B70",fontWeight:"bold"}} required>ItemName</label><br></br>
          <input type="text" name="item" placeholder="e.g.Black Wallet" style={{borderRadius:"5px",width:"210px"}} onChange={(e)=>handler(e)} value={values.item} required></input><br></br>
          <label htmlFor="category" style={{color:"#163B70",fontWeight:"bold"}}>Category</label><br></br>
          <select name="category" id="category" style={{borderRadius:"5px",width:"210px"}} value={values.category} onChange={(e)=>handler(e)} required><br></br>
            <option value="" disabled>Select Category</option>  
            <option value="Personal Belongings">Personal Belongings</option>
            <option value="Electronics">Electronics</option>
            <option value="Bags & Bottles">Bags & Bottles</option>
            <option value="Books & Stationery">Books and Stationery</option>
          </select><br></br>

          <div style={{display:"flex",gap:"30px"}}>
            <div>
            <label htmlFor="location" style={{color:"#163B70",fontWeight:"bold"}}>Location Found</label><br></br>
          <input type="text" name="location" placeholder="e.g.Library" style={{borderRadius:"5px",width:"210px"}} value={values.location} onChange={(e)=>handler(e)} required></input><br></br>
          </div>
          <div>
            <label htmlFor="date" style={{color:"#163B70",fontWeight:"bold"}}>Date Found</label><br></br>
          <input type="date" name="date" placeholder="dd-mm-yyyy" style={{borderRadius:"5px",width:"210px"}} value={values.date} onChange={(e)=>handler(e)} required></input><br></br>
          </div>
          </div>
          <label htmlFor="about" style={{color:"#163B70",fontWeight:"bold"}}>Description</label><br></br>
          <textarea type="text" name="about" placeholder="Add any additional details about the item..." cols="70" rows="4" style={{borderRadius:"5px"}} value={values.about} onChange={(e)=>handler(e)} required></textarea><br></br>

          <button type="submit" className="btn btn-primary">Post Found item</button>
          
        </div>
        
      </div>
      
      </div>
      </form>
    </>
  )
}

export default Upload_Item
