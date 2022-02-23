import React from 'react'
import './Tree.css'

 const Tree = (props) => {
  return (
    <div className='tree_container'>

        <div className='left_section col-xl-6 col-lg-6 col-md-6 col-sm-12'>

            <img className='img-fluid' src={process.env.PUBLIC_URL+`${props.treeImage}`} alt="" />

            <img className='small-img w-25 mt-2' src={process.env.PUBLIC_URL+`${props.treeImage}`} alt="" />

        </div> 

        <div className=' right_section text-end col-xl-6 col-lg-6 col-md-6 col-sm-12'>

            <div className="">
                <d className="tree-info">
                    <h2>{props.treeName}</h2>
                    <h3 className='text-success'>﷼ {props.treePrice} </h3>
                </d>

                <div className="line m-auto mt-3"></div>

                <h3 className='mt-3'>:معلومات عامة</h3>

                <div className="desc bg-light rounded mt-5 p-2">
                    <h4>تنويه</h4>
                    <p>تم إختيار الأشجار لتناسب المواقع التي قمنا بتحديدها، والصور المعروضة توضح بشكل تقريبي شكل الشجرة حينما تكبر ولا تعبر عن شكلها وقت الزراعة. نباتك غير مسؤلة عن موت الأشجار وتلفها</p>
                </div>
            </div>

        </div> 

    </div>
  )
}
export default Tree;





