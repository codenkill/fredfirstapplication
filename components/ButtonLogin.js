import Link from "next/link";

// This button is used to log users in or send them to the dashboard
const ButtonLogin = ({ isLoggedIn, name, children }) => {
    if (isLoggedIn) {
    return <Link href="/dashboard" className="btn btn-primary">Welcome back {name}</Link>;
    } else {
        return <button>Login</button>
    }
};

export default ButtonLogin;