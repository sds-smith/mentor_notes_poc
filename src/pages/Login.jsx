import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();

    useEffect(() => {
        if (currentUser) navigate('/')
    })

    return (
      <div>Login</div>
    )
}
