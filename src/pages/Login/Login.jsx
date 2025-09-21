import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const { reset } = useForm();
    const [disable, setDisable] = useState(true);
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handelLoginFormSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await signInUser(email, password);
            Swal.fire({
                title: "Login Successfully.",
                showClass: {
                    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                },
                hideClass: {
                    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                }
            });
            navigate(from, { replace: true });
            reset();
        } catch (err) { console.log(err) }
    }

    const hadelValidCaptcha = event => {
        const typeCaptcha = event.target.value;
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
                            <input onBlur={hadelValidCaptcha} name="captcha" type="captcha" className="input bg-white text-black mb-3" placeholder="type the captcha above" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <input disabled={false} className="btn btn-neutral mt-4" type="submit" value='Login' />
                        </fieldset>
                    </form>
                    <p>New here? <Link className='text-green-400' to='/register'>Pleace Register</Link></p>
                    <div className="flex justify-center mt-4"><SocialLogin></SocialLogin></div>
                </div>
            </div>
        </div>
    );
};

export default Login;