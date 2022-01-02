import React from "react";
import "./ProfilePage.css";
import { useSelector ,useDispatch } from "react-redux" ;

function ProfilePage() {

    const id = useSelector(state => state.user_id)
    return (
        <div className="pp-bg">
            <div class="section about-section bg" id="about">
                <div class="container">
                    <div class="row align-items-center flex-row">
                        <div class="col-lg-6">
                            <div class="about-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="profilePhoto" />
                            </div>
                            <button type="button" class="btn btn-outline-light btn-lg pp-btn"><span class="fas fa-user-edit"></span>
                                Edit</button>
                            <button type="button" class="btn btn-outline-light btn-lg pp-btn"><i class="fas fa-power-off"></i>
                                Logout</button>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-text go-to">
                                <h3 class="dark-color">Naam Jo bhi ho</h3>
                                <div class="row about-list">
                                    <div class="media">
                                        <label>E-mail : </label>
                                        <p>{id}info@domain.com</p>
                                    </div>
                                    <div class="media">
                                        <label>Phone : </label>
                                        <p>820-885-3321</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;