import { Children } from "react"
import CustomNavbar from "./CustomNavbar";

const Base = ({ title = " Children Welcome to our website "}) => {
    return (

        <div className="container-fluid">


            <CustomNavbar />

            {Children}

            <h1>This is heafooter </h1>

        </div>
    );

}

export default Base;