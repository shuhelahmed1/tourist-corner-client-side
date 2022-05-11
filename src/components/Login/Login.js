import useAuth from '../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();

const Login = () => {
    const {handleGoogleLogIn} = useAuth();
    return (
        <section className='text-center my-4'>
            <button onClick={handleGoogleLogIn} className='bg-orange-400 p-2 hover:bg-orange-600 rounded'>Login using Google</button>
        </section>
    );
};

export default Login;