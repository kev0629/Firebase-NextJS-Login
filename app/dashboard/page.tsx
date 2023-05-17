"use client";
import { getAuth } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from "next/navigation";
import { initFirebase } from '../firebaseApp'

export default function Home() {
    const app =  initFirebase()
    const auth = getAuth()
    const [user, loading] = useAuthState(auth)
    const router = useRouter()

    if (loading){
        return <div>Loading ...</div>
      }
      if (!user){
        router.push('/login')
        return<div>Please Login to continue</div>
      }
  return (
    <main className="">
        <button className="border m-2 p-2 rounded-xl" onClick={()=>auth.signOut}>
            Logout
        </button>
    </main>
  )
}