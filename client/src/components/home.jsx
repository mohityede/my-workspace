import axios from 'axios';
import { Container, Typography, TextField, Button, Fab } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SimpleCard from './card';
import useStyles from './style';

function Home() {
    const classes = useStyles();
    const [workspaces, setWorkspaces] = useState([]);
    const [flag, setFlag] = useState(true);
    const [workName, setWorkName] = useState('');

    const fetchWorkspaces = async () => {
        try {
            const result = await axios.get("http://localhost:7700/api/workspace/all");
            setWorkspaces(result.data);
        } catch (err) {
            console.log("Something wrong with connection!!")
        }
    }

    useEffect(() => {
        fetchWorkspaces();
    }, [])

    function toggleAddWork() {
        setFlag(!flag);
    }

    function handleCreateWork(event) {
        setWorkName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        toggleAddWork();
        const work = { workName: workName };
        try {
            const createWorkspace = async () => {
                await axios.post('http://localhost:7700/api/workspace/create', work);
                fetchWorkspaces();
            }
            createWorkspace();
        } catch (error) {
            console.log("Something wrong with connection!!")
        }
    }

    function handleWorkDelete(workId) {
        try {
            const deleteWorkspace = async () => {
                await axios.delete(`http://localhost:7700/api/workspace/delete/${workId}`);
                fetchWorkspaces();
            }
            deleteWorkspace();
            window.location.reload();
        } catch (error) {
            console.log("Something wrong with connection!!")
        }
    }

    return (
        <>
            <Container className={classes.Container} >
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
                <Container>
                    <Typography className={classes.heading} >Existing Workspaces</Typography>
                </Container>

                {
                    (workspaces.length !== 0) ?
                        <Container className={classes.HomeContainer}>
                            {workspaces.map(workspace => (
                                < SimpleCard handleWorkDelete={handleWorkDelete} work={workspace} />

                            ))}
                        </Container>
                        :
                        <Container>
                            <Typography variant='h5'>No WorkSpace</Typography>
                        </Container>
                }
            </Container>
        </>
    );
}

export default Home;