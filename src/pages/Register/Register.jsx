
const Register = () => {
    const handelRegisterFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
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
                    <form onSubmit={handelRegisterFormSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input bg-white text-black" placeholder="Your Name" />
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input bg-white text-black" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input bg-white text-black" placeholder="Password" />

                            <div></div>
                            <input className="btn btn-neutral mt-4" type="submit" value='Register' />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;