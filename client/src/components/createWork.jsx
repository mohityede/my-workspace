import { Container, Typography, TextField, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import SimpleCard from './card';
import useStyles from './style';

function CreateWork() {
    const classes = useStyles();
    const [flag, setFlag] = useState(true);
    const [workName, setWorkName] = useState('');

    function toggleAddWork() {
        setFlag(!flag);
    }

    function handleCreateWork(event) {
        setWorkName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        toggleAddWork();
    }

    return (
        <>
            <Container>
                {flag ?
                    <Container onClick={toggleAddWork} className={classes.addCard}>
                        <Typography variant='h3' >+</Typography>
                        <Typography>Create Workspaces</Typography>
                    </Container>
                    :
                    <Container className={classes.addCard}>
                        <form onSubmit={handleSubmit}>
                            <TextField onChange={handleCreateWork} value={workName} required fullWidth label="Workspace Name" />
                            <Button
                                type='submit'
                            >
                                <Fab color="primary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Button>
                        </form>
                    </Container>
                }
            </Container>

        </>
    );
}

export default CreateWork;