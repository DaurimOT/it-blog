import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Signup() {
    return(
        <form action="" className="signup register_form">
            <Input input={{
                placeholder: 'Enter your email',
                type: 'email'
            }} />
            <Input input={{
                placeholder: 'Enter your fullname',
                type: 'text'
            }} />
            <Input input={{
                placeholder: 'Enter your password',
                type: 'password'
            }} />
            <Input input={{
                placeholder: 'Repeat your password',
                type: 'password'
            }} />
            <Button button={{
                name: 'Sign Up'
            }}/>
        </form>
    )
}