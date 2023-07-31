import React from 'react'

const Loader = () => {
  return (
    <div className="container-fluid">
        <div className="row">
         <div className="loading d-flex mt-5 justify-content-center mb-4 col-12">
            <div class="lds-roller"><div></div><div></div><div></div><div></div></div>
         </div>

        </div>
    </div>
    
  )
}

export default Loader