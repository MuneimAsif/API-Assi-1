import { NavLink, useParams, useLocation } from "react-router-dom";
export default function About() {
    const params = useParams<any> (); 
    return <>
        <NavLink to={"/"}>Home</NavLink>
        <h1>This is  About page</h1>
        <h1>{`Price ${params.id}`} </h1>
    </>
}