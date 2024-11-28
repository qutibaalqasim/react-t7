import React from 'react'

export default function Product({title, description, thumbnail, price}) {
  return (
    <div className="product card h-100">
                                <div className="card-header h-50">
                                <h2 className='card-title'>{title}</h2>
                                <p className='card-text text-muted'>
                                    {description.substring(0,60)} ....
                                </p>
                                </div>
                                <div className="card-body">
                                <img className='card-img-top' src={thumbnail} />
                                </div>
                                <div className="card-footer">
                                    <span className='fw-bold text-primary'>${price}</span>
                                </div>
                                   
                                   
                            </div>
  )
}
