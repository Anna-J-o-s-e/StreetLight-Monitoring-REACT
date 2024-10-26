import React from 'react'
import NavBarOrg from './NavBarOrg'
import { Link } from 'react-router-dom'
import './DashboardOrg.css';

const DashboardOrg = () => {
  return (
    <div className="org-dashboard">
      <NavBarOrg/>
      <h1>HI THERE !!!!</h1>
      <h2>WELCOME TO THE STAFF DASHBOARD</h2>
      
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">



              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdaXj0kYbzp40960sBb0CzY-SI9X7vVZ6kA&s" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">View Queries ?</h5>
                    <Link to="/ViewQuery" className="btn btn-primary">
                      More
                    </Link>

                  </div>
                </div>

              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                  <img src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Add New Lights ?</h5>
                    <Link to="/AddStreetlight" className="btn btn-primary">
                      More
                    </Link>

                  </div>
                </div>

              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                  <img src="https://thumbs.dreamstime.com/b/feedback-concept-image-arrows-blue-chalkboard-background-40378284.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Feedbacks ?</h5>
                    <Link to="/ViewFeedback" className="btn btn-primary">
                      More
                    </Link>

                  </div>
                </div>

              </div>



            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DashboardOrg