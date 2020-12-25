import React, { useState } from 'react';
import SidebarCommon from '../../SidebarCommon/SidebarCommon';

const AddService = () => {
  const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('title', info.title);
    formData.append('description', info.description);
    
      fetch('https://ancient-stream-18565.herokuapp.com/addNewService', {
        method: 'POST',
        body: formData
  })
.then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
};

    return (
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-sm-3">
                <SidebarCommon></SidebarCommon>
            </div>
            <div className="col-md-9" style={{backgroundColor: "#f2f2f2"}}>
            
            <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">             
              <input name="title" onBlur={handleBlur} className="form-control m-2" placeholder="Service Title" type="text" />
              <textarea name="description" onBlur={handleBlur} className="form-control m-2" placeholder="Your description" id="exampleFormControlTextarea1" style={{height: '200px'}} rows="3" ></textarea>
              <input className="form-control m-2" type="submit" value="Submit Your Review"/>           
              </div>
              <div className="col-md-6">
                <input type="file" onChange={handleFileChange} className="form-control m-2" name="file" id=""/>
              </div>
              </div>
              </form>           
            </div>
            </div>
        </section>
    );
};

export default AddService;