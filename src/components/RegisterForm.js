import {FormControl, FormHelperText, Input, InputLabel, Button, makeStyles} from "@material-ui/core";
import {useAuth} from "../hooks/useAuth.hook";

function RegisterForm() {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
        form: {
            width: 500,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        buttons: {
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem"
        }
    }));
    const classes = useStyles();

    const {register} = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        register(user);
    }

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <h2>Register</h2>
                <FormControl>
                    <InputLabel htmlFor="my-input">First name</InputLabel>
                    <Input id="firstName" aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Last name</InputLabel>
                    <Input id="lastName" aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="password" aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">Type your password here.</FormHelperText>
                </FormControl>
                <div className={classes.buttons}>
                    <Button type="submit" color='primary' variant='outlined'>Register</Button>
                    <Button type="reset" color='default' variant='outlined'>Reset</Button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;