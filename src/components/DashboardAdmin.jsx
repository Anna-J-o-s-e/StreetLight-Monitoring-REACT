import React from 'react'
import NavBarAdmin from './NavBarAdmin'
import { Link } from 'react-router-dom'
import './DashboardAdmin.css';

const DashboardAdmin = () => {
  return (
    <div className="admin-dashboard">
      <NavBarAdmin />
      <h1>WELCOME , ADMIN !!!!</h1>
      
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">



              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                  <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Manage Users</h5>
                    <Link to="/ViewUsers" className="btn btn-primary">
                      More
                    </Link>

                  </div>
                </div>

              </div>

              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4x1oOXkrC7ZUhd6HuNj3Mh7lQTe42yEocfg&s" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Live night light status</h5>
                    <Link to="/ViewStreetlightAdmin" className="btn btn-primary">
                      More
                    </Link>

                  </div>
                </div>

              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                  <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Manage Staff</h5>
                    <Link to="/ViewEmployees" className="btn btn-primary">
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

export default DashboardAdmin