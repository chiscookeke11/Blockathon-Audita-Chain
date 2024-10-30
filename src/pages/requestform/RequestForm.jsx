import React from 'react'
import './requestForm.css'

const RequestForm = () => {
  return (
    <div className='requestform'>
        <h1>Request an Audit</h1>

        <form action="">


          <span>
            <label for="category">Select Category</label>
            <select name="category" id="category">
              <option value="">Public</option>
              <option value="">Private</option>
              <option value="">Hybrid</option>
            </select>
          </span>

          
        <span>
                <label for="">Audit Type</label>
                <select name="Audit-type" id="auditType" required >
                  <option value="">Financial Audit</option>
                  <option value="">Performance Audit</option>
                  <option value="">Compliance Audit</option>
                  <option value="">IT Audit</option>
                  <option value="">Fraud Investigation</option>
                  <option value="">Risk Assessment</option>
                  <option value="">Regulatory Compliance Services</option>
                </select>
            </span>



            <span>
                <label for="organization-name">Organization's name</label>
                <input type="text" placeholder="Enter your Organization's name" id='organization-name' required />
            </span>

            <span>
                <label for="">Contact Name</label>
                <input type="text" placeholder='Enter your full name' required/>
            </span>

            <span>
                <label for="">Email</label>
                <input type="text" placeholder='Enter your Email Address' required/>
            </span>


            <span>
              <label for="startDate">Preferred Start Date</label>
              <input type="date" name="Start Date" id="startDate" required/>
            </span>

            <span>
                <label for="address">Blockchain Wallet Address</label>
                <input type="text" placeholder="Enter your blockchain wallet address" id='address' required/>
            </span>

            <span>
                <label for="info">Additional Information</label>
                <textarea name="info" id="info" cols="30" rows="5" placeholder='Please provide any additional information that may be relevant in your audit request' required></textarea>
            </span>

            <button>Submit Audit Request</button>



        </form>
    </div>
  )
}

export default RequestForm