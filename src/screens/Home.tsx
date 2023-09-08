 import {NavLink ,useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ShowDataCard from "../components/Cards";
export default function Home(){  
    const [listData, setListData ]  = useState<any>([]);
    const getData =()=>{
        axios.get("https://fakestoreapi.com/products/")
        .then((res)=>{setListData( [...res.data]);})
        .catch((error)=>{console.log(error);})
        }
        return<>
        <h1>This is  Home page</h1>
    <button className="btn btn-info text-white" onClick={getData}>Get Data</button>
    <ShowDataCard arr={listData}/>
    </>
    
}



