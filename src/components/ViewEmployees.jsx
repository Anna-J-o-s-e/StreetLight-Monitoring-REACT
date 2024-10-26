import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBarAdmin from './NavBarAdmin';
import './ViewEmployees.css'; // Import the CSS file

const ViewEmployees = () => {
    const [todos, changeTodos] = useState([]);

    // Fetch the data from the backend
    const fetchData = () => {
        axios.get("http://localhost:8080/vieworganization")
            .then((response) => {
                changeTodos(response.data);
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Delete organization
    const deleteEmployee = (oid) => {
        axios.delete(`http://localhost:8080/api/organizations/${oid}`)
            .then((response) => {
                alert(response.data.message);
                fetchData(); // Refresh the list after deletion
            })
            .catch((error) => {
                console.error("Error deleting employee:", error.response ? error.response.data : error.message);
                alert("Error deleting employee: " + (error.response ? error.response.data.message : error.message));
            });
    };

    return (
        <div className="view-employees">
            <center>
            <NavBarAdmin />
            <div>
                <h1>VIEW EMPLOYEES</h1>
                <br />
                
                    <div className="container">
                        <div className="row">
                            <div className="col col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">EMPLOYEE NAME</th>
                                            <th scope="col">DESIGNATION</th>
                                            <th scope="col">PHONE</th>
                                            <th scope="col">EMPLOYEE ID</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">ACTIONS</th> {/* New column for actions */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map((value, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{value.oname}</th>
                                                    <td>{value.oaddress}</td>
                                                    <td>{value.ophone}</td>
                                                    <td>{value.oid}</td>
                                                    <td>{value.omail}</td>
                                                    <td>
                                                        {/* Delete button for each row */}
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => deleteEmployee(value.oid)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                
            </div>
            <div className="col col-12 col-sm-6">
                                <p>
                                    <a href="/DashboardAdmin" className="link-white">Back to Admin Dashboard</a>
                                </p>
                                <p>
                                    <a href="/" className="link-white">Back to Login</a>
                                </p>
                            </div>
            </center>
        </div>
    );
};

export default ViewEmployees;
