import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    // const handelRegisterFormSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password);
    // }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">

                            <label className="label">Name</label>
                            <input {...register('name', { required: true })} name="name" type="text" className="input block bg-white text-black" placeholder="Your Name" />
                            {errors.name && <span className="text-red-500">Name is required</span>}

                            <label className="label">Email</label>
                            <input {...register('email', { required: true })} name="email" type="email" className="input block bg-white text-black" placeholder="Email" />
                            {errors.email && <span className="text-red-500">Email is required</span>}

                            <label className="label">Password</label>
                            <input {...register('password', { required: true, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[@$!#%*?&])(?=.*[0-9])(?=.*[a-z])/, minLength: 6 })} name="password" type="password" className="input bg-white text-black" placeholder="Password" />

                            <div>{errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}</div>
                            <div>{errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}</div>
                            <div>{errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 characters</p>}</div>
                            <div>{errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one upperCase one lowercase, one number and one special characters</p>}</div>

                            <input className="btn btn-neutral mt-4" type="submit" value='Register' />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;