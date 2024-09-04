import SignInBtns from "@/components/SignInBtns";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SignIn() {
    const session = await getServerSession(authOptions)
    return ( 
        <SignInBtns />
    )
    
}