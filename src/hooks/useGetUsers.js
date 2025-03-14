import { useEffect, useState } from "react";
import axios from "axios";

const useGetUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                   "https://api.escuelajs.co/api/v1/users"
                )
                setUsers(response.data);
            } catch (error) {
                console.error("ERROR!")
            }
        }
        fetchData();
    }, []);

    return [users]
};

export default useGetUsers;