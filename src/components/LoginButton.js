import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated, user } = useAuth0();
    
    return(
        !isAuthenticated && (
            <button className="relative text-sm font-semibold leading-6 text-gray-300 pb-[22px]" onClick={() => loginWithRedirect()}>
                Log In  <span aria-hidden="true">&rarr;</span>
            </button>
        )
        
    )
}

export default LoginButton