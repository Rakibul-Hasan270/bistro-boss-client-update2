import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handelLoginFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const captchaValu = form.captcha.value;
        console.log(email, password);
    }

    const hadelValidCaptcha = () => {
        const typeCaptcha = captchaRef.current.value;
        if (validateCaptcha(typeCaptcha)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelLoginFormSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input bg-white text-black" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input bg-white text-black" placeholder="Password" />

                            <label className="label">Captcha</label>
                            <LoadCanvasTemplate />
                            <input ref={captchaRef} name="captcha" type="captcha" className="input bg-white text-black mb-3" placeholder="type the captcha above" />
                            <button onClick={hadelValidCaptcha} className='btn btn-xs'>valid captcha</button>

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <input disabled={disable} className="btn btn-neutral mt-4" type="submit" value='Login' />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;