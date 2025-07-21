import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Signin() {
    return(
        <form action="" className="signin register_form">
            <Input input={{
                placeholder: 'Enter your email',
                type: 'email'
            }} />
            <Input input={{
                placeholder: 'Enter your password',
                type: 'password'
            }} />
            <Button button={{
                name: 'Sign In'
            }}/>
        </form>
    )
}