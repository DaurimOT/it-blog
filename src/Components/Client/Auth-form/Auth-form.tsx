'use client'

import { useSearchParams, useRouter } from "next/navigation";

import Signin from '@/Components/Signin';
import Signup from '@/Components/Signup';

import './Auth-form.css';

export default function AutnForm() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const mode = searchParams.get('mode') ?? 'signin'; 

    const switchMode  = () => {
        router.push(`/register?mode=${mode === 'signin' ? 'signup' : 'signin'}`);
    }

    return(
        <div className="form_container">
            {mode === 'signin' ? <Signin /> : <Signup />}
            {mode === 'signin' ? (
                <p>
                    Don’t have an account? <span onClick={switchMode}>Sign Up</span>
                </p>
            ) : (
                <p>
                     Already have an account? <span onClick={switchMode}>Sign In</span>
                </p>
            )}
        </div>
    )
}