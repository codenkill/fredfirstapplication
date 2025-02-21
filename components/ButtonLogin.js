import Link from "next/link";

// This button is used to log users in or send them to the dashboard
const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {

    console.log(extraStyle);

    if (isLoggedIn) {
        return (
            <Link 
                href="/dashboard" 
                className={`btn bg-[#4ade80] border-0 hover:bg-[#38d56d] ${extraStyle ? extraStyle : ""}`}
            >
                Welcome back {name}
            </Link>
        );
    } else {
        return (
            <button 
                className="btn bg-[#4ade80] border-0 hover:bg-[#38d56d]"
            >
                Login
            </button>
        );
    }
};

export default ButtonLogin;
