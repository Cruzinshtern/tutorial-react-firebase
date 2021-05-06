import {Snackbar} from "@material-ui/core";

function SnackbarMsg ({snackBarOpen, setSnackBarOpen}) {


    const handleSnackBarClose = () => {
        setSnackBarOpen(false)
    }
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={snackBarOpen}
                onClose={handleSnackBarClose}
                message="I love snacks"
            />
        </div>
    )
}

export default SnackbarMsg;