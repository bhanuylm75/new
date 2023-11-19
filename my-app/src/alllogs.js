import React from 'react'

const Alllogs = ({logData}) => {
  //console.log(logData)
  return (
    <div>
      <h1>Log Details</h1>
      {logData.map((logData)=>(
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

export default Alllogs
