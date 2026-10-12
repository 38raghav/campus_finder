import { useForm } from "react-hook-form";

export const Form=({Data,button})=>{

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    }=useForm()

    const onSubmit=(data)=>{
        console.log(data)
        reset()
        }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                Data?.map((fields)=>{

                    return(
                        <div key={fields.id}>
                        <label>{fields.lable}</label>
                    <input type={fields.type} placeholder={fields.placeholder} {...register(fields.name,fields.validation)} />
                    {errors[fields.name] && errors[fields.name].message}
                    </div>
                    )

                })
            }
            <button type="submit">{button}</button>


        </form>
    )

}
