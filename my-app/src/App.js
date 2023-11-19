import React, { useState } from 'react';
import "./App.css"
import Form from './form';
import axios from 'axios';
import Alllogs from './alllogs';
import Filter from './Filter';

const App = () => {
  const [formData, setFormData] = useState({
  });
  const [alldata,setalldata]=useState([])
  const [filterdata,setfilterdata]=useState([])
  const handleInputChange=(e)=>{
    const { name, value } = e.target;
    const a={}
    a[name]=value
    if (name==="parenteresourceid"){
      a["metadata"]={"parenteresourceid":value}
    }
    else{
      a[name]=value
    }
    setFormData(Object.assign(formData,a))
    console.log(formData)
    

  }
  const applyFilters=async()=>{
    const a=JSON.stringify(formData)
    console.log(a)
    const {data} = await axios.get("http://localhost:3007/api/filter",{ params: formData })
    //console.log(res)
    setfilterdata(data)
    setFormData({})
    
  }
  const allogs=async ()=>{
    const {data}=await axios.get("http://localhost:3007/api/all")
    console.log(data)
    setalldata(data)


  }

  return (
    <div className='container'>
      <h1>Log Search</h1>
    <div className="search-container">
      <input type="text" id="searchInput" placeholder="Search..."/>
      <button onClick={allogs}>Get All Logs</button>
    </div>
    <div className="filters-container">
      <label for="levelFilter">Level:</label>
      <input id="levelFilter" type='text' name='level'  onChange={handleInputChange}/>
        
    
      <label for="timestampFilter">Timestamp:</label>
      <input type="datetime-local" id="timestampFilter"/>

      <label for="resourceIdFilter">Resource ID:</label>
      <input name='resourceid' type="text"   onChange={handleInputChange}/>
      <label for="traceIdFilter">Trace ID:</label>
      <input name='traceid' className='input' type="text"   onChange={handleInputChange}/>
      <label >Span ID:</label>
      <input name='spanid' className='input' type="text"   onChange={handleInputChange}/>
      <label >parenteResourceId</label>
      <input name='parentresourceid' className='input' type="text"   onChange={handleInputChange}/>
      <label >Message</label>
      <input name='message' className='input' type="text"   onChange={handleInputChange}/>
    </div>
    <button onClick={applyFilters}>Apply Filters</button>
      <div className='second'>
      <Form/>
      <div className='results'>
      <div>
      <Alllogs logData={alldata}/>
      </div>
      <div>
      <Filter logDat={filterdata}/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App
