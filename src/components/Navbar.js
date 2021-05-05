import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.hook";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar({onOpen}) {
    const classes = useStyles();
    const {logout} = useAuth();

    const handleOpen = () => {
        onOpen(true);
    }
    const handleLogout = () => {
        logout();
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/todos">myTodo</Link>
                </Typography>
                <Link to="/todo-form">
                    <Button color="inherit">New todo</Button>
                </Link>
                <Link to="/register">
                    <Button color="inherit">Register</Button>
                </Link>

                <Button color="inherit" onClick={handleOpen}>Login</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;