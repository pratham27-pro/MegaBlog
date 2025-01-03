import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authslice.js";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
                    .then(() => {
                        dispatch(logout());
                    })
                    .catch((err) => {
                        console.log("Logout failed in  LogoutBtn", );                        
                    })
    }

    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Logout
        </button>
    )
};

export default LogoutBtn;