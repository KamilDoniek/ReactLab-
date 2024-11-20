import { useContext, useState } from "react";
import AppContext from "../data/AppContext";

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const dispatch = useContext(AppContext).dispatch;

    const onSubmit = async e => {
        const err = [];
        e.preventDefault();
        const data = new FormData(e.target);
        const title = data.get("title");
        console.log(title)
        setErrors([]);
        if(title.slice(0,1) !== title.slice(0,1).toUpperCase()) {
            err.push("Tytul zadania musi byc z wielkiej litery!")
        }

        if(err.length != 0) {
            console.log("return");
            setErrors(err);
            return;
        }
        setErrors([]);
        
        setSending(true);
        await new Promise(res => setTimeout(res, 1000));

        dispatch({
            type: "add",
            data: {}
        });
        setSending(false);
        
        for(let key of data.keys()) {
            e.target[key].value ="";
        }
    }

    return (  
        <>
        <div className="text-danger">
            {errors.map(e => <span>{e}</span>)}
        </div>
        
        <form onSubmit={onSubmit}>
            <label htmlFor="title">tytul zadania</label>
            <input name="title" required minLength="3" maxLength="20"></input>

            <button disabled={isSending} type="submit">Zapisz</button>
        </form>
    </>
    );
}

export default CreateForm;