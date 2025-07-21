
import Link from "next/link"
import Button from "../UI/Button"
import Input from "../UI/Input"

import './Header.css'


export default function Header() {

    return(
        <header>
            <div className="header_container base_width">
                <div className="header_logo">
                    <Link href='/'>HeaderLogo</Link>
                </div>
                <div className="header_search">
                    <Input input={{
                        type: 'text',
                        placeholder: 'Search...'
                    }}/>
                    <Button button={{
                        name: 'Search'
                    }}/>
                </div>
                <div className="header_user_actions">
                    <Link href='/register?mode=signup'>
                        <Button button={{
                            name: 'Sign Up'
                        }}/>
                    </Link>
                    <Link href='/register?mode=signin'>                    
                        <Button button={{
                            name: 'Sign In'
                        }}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}