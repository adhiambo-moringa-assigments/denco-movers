import React from 'react'



  // create a function that will render the quotes
  const ViewQuotes = ({quotes}) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Quotes</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                  <th>Customer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote) => (
                  <tr key={quote.id}>
                    <td>{quote.service}</td>
                    <td>{quote.price}</td>
                    <td>{quote.customer}</td>
                    <td>
                      <button className="btn btn-danger">Approve</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }


  
  




export default ViewQuotes
