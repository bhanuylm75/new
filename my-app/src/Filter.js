import React from 'react'
import "./App.css"
const Filter = ({logDat}) => {
  if(logDat.length===0){
    return <h1>no results with the filter found</h1>
  }
  console.log(logDat,"filter")
  return (
    <div className='filter'>
      <h1 className='head'>Filtered Log Details</h1>
      {logDat?.map((logData)=>(
        
        <ul>
          <li>
            <strong>Level:</strong> {logData.level || 'N/A'}
          </li>
          <li>
            <strong>Message:</strong> {logData.message || 'N/A'}
          </li>
          <li>
            <strong>Resource ID:</strong> {logData.resourceId || 'N/A'}
          </li>
          <li>
            <strong>Timestamp:</strong> {logData.timestamp || 'N/A'}
          </li>
          <li>
            <strong>Trace ID:</strong> {logData.traceId || 'N/A'}
          </li>
          <li>
            <strong>Span ID:</strong> {logData.spanId || 'N/A'}
          </li>
          <li>
            <strong>Commit:</strong> {logData.commit || 'N/A'}
          </li>
          <li>
            <strong>Parent Resource ID:</strong> {logData.metadata?.parentResourceId || 'N/A'}
          </li>
        </ul>
      ))}
      
    </div>
  )
}

export default Filter
