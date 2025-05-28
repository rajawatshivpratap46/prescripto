import {createContext, useEffect,useState} from 'react';
//import { doctors } from '../assets/assets_frontend/assets';
import axios from 'axios';
import {toast} from 'react-toastify';


export const AppContext = createContext()


const AppContextProvider = (props) => {

const currencySymbol = '₹'
const backendUrl =  import.meta.env.VITE_BACKEND_URL 
const [doctors, setDoctors] = useState([])

const [token,setToken] = useState('')

    // const value = {
    //     doctors,
    //     currencySymbol,
    //     token, setToken,
    // }

    const getDoctorsData = async () => {
        try{

            const {data} = await axios.get(backendUrl + '/api/doctor/list')
            if(data.success) {
                
                setDoctors(data.doctors)

            } else{
                toast.error(data.message )
            }

        } catch (error) {

            console.log( error)
            toast.error(error.message)
            // Optionally, you can set an error state here to handle UI feedback
        }
    }

    const value = {
        doctors,
        currencySymbol,
        token, setToken,
        backendUrl
    }

    useEffect(() => {
        getDoctorsData()
    },[])

    return (
        <AppContext.Provider value={value}>
        {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider



