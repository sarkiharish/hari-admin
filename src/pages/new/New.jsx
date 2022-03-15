import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs, title}) => {
  const [file, setFile] = useState("")
  console.log(file)
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="NoImage" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" >Image <DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:'none'}} />
                
              </div>
              {/* <div className="formInput">
                <label >Username</label>
                <input type="text" placeholder='user_name' />
              </div>
              <div className="formInput">
                <label >Full Name</label>
                <input type="text" placeholder='Arya Stark' />
              </div>
              <div className="formInput">
                <label >Email</label>
                <input type="email" placeholder='arya_start@gmail.com' />
              </div>
              <div className="formInput">
                <label >Phone</label>
                <input type="text" placeholder='+1 23 456 789' />
              </div>
              <div className="formInput">
                <label >Password</label>
                <input type="password" placeholder='password' />
              </div>
              <div className="formInput">
                <label >Address</label>
                <input type="text" placeholder='address' />
              </div>
              <div className="formInput">
                <label >Country</label>
                <input type="text" placeholder='USA' />
              </div> */}

              {
                inputs.map((input)=>(
                  <div className="formInput" key={input.id}>
                    <label >{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))
              }
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New