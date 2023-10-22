import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useGetUserData = () => {
    const { user,loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    const { data: singleUserData = [], refetch, isLoading: singleUserDataLoading } = useQuery({
        queryKey: ['singleUserData'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axios.post(`http://localhost:5001/users/getSingleUser?email=${user?.email}`,
                {}, //data
                { // header
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            console.log(res?.data);
            return res?.data;
        }
    })
    return [singleUserData, refetch, singleUserDataLoading]
};

export default useGetUserData;