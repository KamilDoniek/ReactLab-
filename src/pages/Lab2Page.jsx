import { useParams } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import FlexContainer from "../components/FlexContainerPersonal";

function Lab2Page({names}){
    const {id} = useParams();
    if(!id){
        return <h2>Brak identyfikatora osoby.</h2>
    }

    const person = names.find(name => name.id === parseInt(id));
    if(!person) return <h2>Nie znaleziono osoby</h2>

    return(
        <>
            <h1>Laboratorium 2</h1>
            <ul>
                <PersonalInfo  {...person}/>
            </ul>
        </>
    )
}

export default Lab2Page;