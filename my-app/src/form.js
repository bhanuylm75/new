import React, { useState } from 'react'
import "./from.css"
import axios from "axios"


const Form = () => {
  let [log,setlog]=useState({})
  
  const onfieldchange=(e)=>{
    const {name,value}=e.target
    const a={}
    if (name==="parentresourceid"){
      a["metadata"]={"parentresourceid":value}
    }
    else{
      a[name]=value
    }

    
    setlog(Object.assign(log,a))
    console.log(log)


  }
  const onsubmit=async()=>{
    
    if(Object.keys(log).length===0){
      return

    }
    const {data}=await axios.post("http://localhost:3007/api/post",log)
    console.log(data)
    setlog({})


  }
  return (
    <div class="containe">
    <h1>Ingest Log</h1>
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <label>
        Level:
        <input value={log.level} onChange={onfieldchange} type="text" name="level" placeholder="Enter log level" required/>
      </label>

      <label>
        Trace ID:
        <input value={log.traceId} onChange={onfieldchange} type="text" name="traceId" placeholder="Enter trace ID" required/>
      </label>

      <label>
        Resource ID:
        <input value={log.resourceId} onChange={onfieldchange} type="text" name="resourceId" placeholder="Enter resource ID" required/>
      </label>
      <label>
        ParentResource ID:
        <input  onChange={onfieldchange} type="text" name="parentresourceid" placeholder="Enter resource ID" required/>
      </label>

      <label>
        Timestamp:
        <input value={log.timestamp} onChange={onfieldchange} type="datetime-local" name="timestamp" required/>
      </label>

      <label>
        Span ID:
        <input value={log.spanId} onChange={onfieldchange} type="text" name="spanId" placeholder="Enter span ID" required/>
      </label>
      <label>
        Commit:
        <input value={log.commit} onChange={onfieldchange} type="text" name="commit" placeholder="Enter commit" required/>
      </label>

      <label>
        Message:
        <textarea value={log.message} onChange={onfieldchange} name="message" placeholder="Enter log message" required></textarea>
      </label>

      <button onClick={onsubmit} type="submit">Ingest Log</button>
    </form>
  </div>

  )
}

export default Form
