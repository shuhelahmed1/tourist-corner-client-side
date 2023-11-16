import useAuth from '../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();

const Login = () => {
    const {handleGoogleLogIn, handleEmail, handlePassword, handleRegister, error} = useAuth();
    return (
        <>
        <section>
            <form onSubmit={handleRegister}>
            <input onBlur={handleEmail} placeholder='email'></input>
            <input onBlur={handlePassword} placeholder='password'></input>
            <button type="submit">Submit</button>
            </form>
            <h5>{error}</h5>
        </section>
        <section className='text-center my-4'>
            
            <button onClick={handleGoogleLogIn} className='bg-orange-400 p-2 hover:bg-orange-600 rounded'>Login using Google</button>
        </section>
        </>
    );
};

export default Login;