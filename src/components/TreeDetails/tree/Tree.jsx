import React from 'react'
import './Tree.css'

 const Tree = (props) => {
  return (
    <div className='tree_container'>

        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>

            <img className='img-fluid' src={process.env.PUBLIC_URL+`${props.treeImage}`} alt="" />

            <img className='small-img w-25 mt-2' src={process.env.PUBLIC_URL+`${props.treeImage}`} alt="" />

        </div> 

        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>

            <div className="w-75">
                <d className="tree-info">
                    <h2>{props.treeName}</h2>
                    <h3 className='text-success'>﷼ {props.treePrice} </h3>
                </d>

                <div className="line m-auto mt-3"></div>

                <h3 className='mt-3'>Description:</h3>

                <div className="desc bg-light rounded mt-5 p-2">
                    <h4>Disclaimer</h4>
                    <p>The Trees That We Deliever & Plant Will not look like the Photo. It is only meant to show how it would look like when fully grown.</p>
                </div>
            </div>

        </div> 

    </div>
  )
}
export default Tree;





