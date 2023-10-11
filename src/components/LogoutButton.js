import { useAuth0 } from "@auth0/auth0-react";
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid'

const LogoutButton = () => {
    const {logout, isAuthenticated } = useAuth0();
    return(
        isAuthenticated && (
            <button className = "flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100" onClick={() => logout()}>
                <ArrowLeftCircleIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/> Log out
            </button>
        )
        
    )
}

export default LogoutButton