import {Button, FormControl, Input, InputLabel, makeStyles, TextField} from "@material-ui/core";

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

function TodoForm() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <h2>Todo From</h2>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input id="name" aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl>
                    <TextField id="description" multiline rows={3} rowsMax={5} placeholder="Description"/>
                </FormControl>
                <div className={classes.buttons}>
                    <Button type="submit" color='primary' variant='outlined'>Create</Button>
                    <Button type="reset" color='default' variant='outlined'>Cancel</Button>
                </div>
            </form>
        </div>

    )

}

export default TodoForm;