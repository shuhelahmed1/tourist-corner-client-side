import useAuth from '../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();

const Login = () => {
    const {handleGoogleLogIn} = useAuth();
    return (
        <section>
            <button onClick={handleGoogleLogIn} className='btn btn-primary d-block mx-auto mt-5'>Google Log In</button>
        </section>
    );
};

export default Login;