import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function AdminPanel() {
    const { currentUser } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) navigate('/');
    }, [currentUser, navigate]);

    return (
      <div>AdminPanel</div>
    )
}
