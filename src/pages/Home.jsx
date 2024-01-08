import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='mt-5 mb-5'>
      <div className='mt-3 mb-3 d-flex align-items-center justify-content-center  w-100'>
          <Add/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>WatchHistory</Link>
      <div className='container-fluid d-flex justify-content-between'>
        <div className="all-video col-lg-9">
            <h4 className='mb-5'>All Video</h4>
            <View/>
        </div>
        <div className="category col-lg-3">
            <Category/>
        </div>
      </div>
    </div>
  )
}

export default Home