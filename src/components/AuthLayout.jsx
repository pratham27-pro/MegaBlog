import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Protected({
    children,
    authentication=true
}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState();
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/login");
        }

        setLoader(false);

    }, [authStatus, navigate, authentication])

  return (
    <div>Protected</div>
  )
}

export default Protected;