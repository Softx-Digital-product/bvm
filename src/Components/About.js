import React from 'react'

export default function About(){

    return(
        <>
      <div className="container-fluid mt-4">
        <div className="card">
            <div className="card-header">
                <h3 className="font-weight-bolder">BVM-TECH SOLUTION</h3>
            </div>
            <div className="card-Body">
                <div className="row">
                    <div className="col-sm-12 col-lg-3 col-md-3">
                    <img className="img-thumbnail w-100 h-50" src="https://picsum.photos/200/300" alt="bvm logo" />
                    </div>
                    <div className="col-sm-12 col-lg-9 col-md-9 mt-2">
                    <p className="h6">
               Bvm -Tech Solution provide a wide range of services based on Information Technoloy (IT).
                </p>
                    </div>
                </div>
               
            </div>
        </div>
      </div>
        </>
    )
}

