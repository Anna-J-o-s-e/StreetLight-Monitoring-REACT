import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBarAdmin from './NavBarAdmin';
import './ViewUsers.css'; // Import external CSS file

const ViewUsers = () => {
    const [todos, changeTodos] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8080/viewusers").then(
            (response) => {
                changeTodos(response.data);
            }
        ).catch(error => console.error("Error fetching data:", error));
    };

    const deleteUser = async (uadmsno) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/users/${uadmsno}`);
            alert(response.data.message); // Show a success message
            // Filter out the deleted user from the todos state
            changeTodos(todos.filter(user => user.uadmsno !== uadmsno));
        } catch (error) {
            console.error("Error deleting user:", error);
            alert('Error deleting user.'); // Show an error message
        }
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div className="view-users">
            <NavBarAdmin />
            <div>
                <center><h1>VIEW USERS</h1></center>
                <br />
                <center>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">USER NAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">PHONE</th>
                                            <th scope="col">CATEGORY</th>
                                            <th scope="col">ADMISSION NO. / EMPLOYEE ID</th>
                                            <th scope="col">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            todos.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{value.uname}</th>
                                                        <td>{value.umail}</td>
                                                        <td>{value.uaddress}</td>
                                                        <td>{value.uphone}</td>
                                                        <td>{value.utype}</td>
                                                        <td>{value.uadmsno}</td>
                                                        <td>
                                                            <button 
                                                                className="btn"
                                                                onClick={() => deleteUser(value.uadmsno)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                           
                        </div>
                       
                    </div>
                    <div className="col col-12 col-sm-6 col-lg-6">
                                <p><a href="/DashboardAdmin" className="link-white">Back to Admin Dashboard</a></p>
                                <p><a href="/" className="link-white">Back to Login</a></p>
                            </div>
                </center>
            </div>
        </div>
    );
};

export default ViewUsers;
