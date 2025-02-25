"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

// This button is used to log users in or send them to the dashboard
const ButtonLogin = ({ session, extraStyle }) => {
    const dashboardUrl = "/dashboard";

    console.log(extraStyle);

    if (session) {
        return (
            <Link 
                href={dashboardUrl} 
                className={`btn bg-[#4ade80] border-0 hover:bg-[#38d56d] ${extraStyle ? extraStyle : ""}`}
            >
                Welcome back {session.user.name || "friend"}
            </Link>
        );
    }

    return (
        <button 
            className={`btn bg-[#4ade80] border-0 hover:bg-[#38d56d] ${extraStyle ? extraStyle : ""}`}
            onClick={() => {
                signIn(undefined, { callbackUrl: dashboardUrl });
            }}
        >    
            Get Started
        </button>
    );
};

export default ButtonLogin;
