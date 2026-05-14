import React from 'react'
import './NewsItem.css'
const NewsItem = (props )=> {  
    let {source, title,ImgUrl,description,descriptionBlur,NewsUrl,time}=props;
    return ( 
    <> 
      <div className='my-3'>
        <div className="card" >
            <div className="flex-container"><div className='source'>{source}</div> <div className="tickin"></div></div>
            <img className="card-img-top" height="270px" src={ImgUrl} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}
                    <span style={{opacity: ".75"}} >{descriptionBlur}
                    </span>
                </p>
                <p className="card-text"><small className="text-muted">Published on {new Date(time).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
                <a href={NewsUrl} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill mx-auto " >read more</a>
            </div>
        </div>
      </div>
    </>
    )
  }

export default NewsItem
