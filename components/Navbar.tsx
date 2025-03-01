"use client";

import Link from "next/link";
import { useSession,signOut } from "next-auth/react";

export default function Navbar() {

    const {status} =useSession();
    return (
        <div className="flex justify-between pb-4 border-b mb-4">
        <div>
            <Link href={'/'}>
                <h1 className="text-dark text-4xl font-bold tracking-tighter">TECH NEWS</h1>
            </Link>
            <p className="text-sm">Exploring Tomorrow's Innovations, <br />One Byte at a time.</p>
        </div>
        {
            status==='authenticated'? (<div> <button onClick={()=>signOut()} className="btn">Sign Out</button></div>):(  <div className="flex items-center ">
            <Link className="btn" href={"/sign-in"}>Sign In</Link>
         </div>)
        }

      
    </div>
    )
  
}