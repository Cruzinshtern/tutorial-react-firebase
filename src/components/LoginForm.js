import {useState} from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    FormControl,
    FormHelperText,
    Input,
    InputLabel, makeStyles,
    Typography
} from "@material-ui/core";
import RegisterForm from "./RegisterForm";
import {useAuth} from "../hooks/useAuth.hook";

function LoginForm ({open, onClose}) {
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

    const {login} = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        login(user);
        onClose(true)
    }

    const handleClose = () => {
        onClose(false);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <div className={classes.root}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="password" aria-describedby="my-helper-text"/>
                    </FormControl>
                    <div className={classes.buttons}>
                        <Button type="submit" color='primary' variant='outlined'>Login</Button>
                        <Button type="reset" color='default' variant='outlined'>Reset</Button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default LoginForm;