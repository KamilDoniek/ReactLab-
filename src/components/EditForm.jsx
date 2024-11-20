import { useForm } from "react-hook-form";
import { useContext,useState } from "react";
import AppContext from "../data/AppContext";

// eslint-disable-next-line react/prop-types
function EditForm({initialData}) {
    const [isSending, setSending] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialData || {}, 
      });
    
      const dispatch = useContext(AppContext).dispatch;
    
      const onSubmit = async (data) => {
        console.log(data)
        const { title } = data; 
    
        if (!title.startsWith(title.toUpperCase())) {
          errors.title = 'Tytul zadania musi byc z wielkiej litery!'; 
          return;
        }
    
        setSending(true);
        await new Promise(res => setTimeout(res, 1000)); 
    
        dispatch({
          type: "edit",
          data, 
        });
        setSending(false);
        };
    return (  
        <>
        <h1>Edit Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">tytul zadania</label>
        <input
          {...register('title', {
            required: 'Tytuł jest wymagany.',
            minLength: {
              value: 3,
              message: 'Tytuł musi mieć co najmniej 3 znaki.',
            },
            maxLength: {
              value: 20,
              message: 'Tytuł może mieć maksymalnie 20 znaków.',
            },
          })}
          name="title"
        />
                {errors.title && <p className="text-danger">{errors.title.message}</p>}
            
            <button type="submit" disabled={isSending}>

            </button>
        </form>

        </>
    );
}

export default EditForm;