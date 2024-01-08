import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <div className='container mt-5 mb-5'>
      <div className='d-flex justify-content-between'>
        <h2>Watch Hsitory</h2>
        <div className='d-flex align-items-center justify-content-center'><Link style={{textDecoration:'none',color:'white',fontSize:'20px'}} to={'/home'}><i class="fa-solid fa-arrow-right fa-rotate-180" style={{color:'white'}}></i> Back to home</Link></div>
      </div>
      <div className='table-container p-4'>
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
            </tr>  
          </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Kanban</td>
              <td> <a href="">https://react-bootstrap.github.io/docs/components/cards</a> </td>
              <td>4/10/2023</td>
            </tr>
            </tbody>
            
        </Table>
      </div>
    </div>
  )
}

export default WatchHistory
