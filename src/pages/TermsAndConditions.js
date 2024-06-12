import React from 'react'
import { Helmet } from 'react-helmet'

const TermsAndConditions = () => {
  return (
      <>
          <Helmet>
              <meta charSet='utf-8' />
              <title>Terms & Conditions</title>
          </Helmet>
          <div className="policy-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="policy-card card-shadow">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default TermsAndConditions