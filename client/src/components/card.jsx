import React, { useState } from 'react';
import { Button, Card, CardContent, Container, Grid, Box, TextField } from '@material-ui/core';
import useStyles from './style';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import BoardCard from './boardCard';
import CreateBoard from './createBoard';
import axios from 'axios';

export default function SimpleCard({ work, handleWorkDelete }) {
    const classes = useStyles();
    const [workUpdateFlag, setWorkUpdateFlag] = useState(true);
    const [workName, setWorkName] = useState(work.workName);

    function toggleWorkUpdateFlag() {
        setWorkUpdateFlag(!workUpdateFlag);
    }

    function handleWorkUpdateSubmit(event) {
        event.preventDefault();
        toggleWorkUpdateFlag();
        const workN = { workName: workName };
        try {
            const updateWorkspace = async () => {
                await axios.put(`http://localhost:7700/api/workspace/update/${work._id}`, workN);
            }
            updateWorkspace();
        } catch (error) {
            console.log("Something wrong with connection!!")
        }
    }

    function handleUpdateWork(event) {
        setWorkName(event.target.value)
    }


    return (
        <Card className={classes.cardRoot}>
            <CardContent>
                <Grid container>
                    <Grid className={classes.workGrid} item md={3} sm={12} >
                        <Container className={classes.workName}>
                            {workUpdateFlag ?
                                <Container style={{ fontSize: '80%', }}>
                                    {workName} < EditIcon onClick={toggleWorkUpdateFlag} />
                                </Container>
                                :
                                <form onSubmit={handleWorkUpdateSubmit}>
                                    <TextField className={classes.workUpdateInput} onChange={handleUpdateWork} value={workName} size='small' required label="Workspace Name" />
                                    <Button
                                        type='submit'
                                    >
                                        Update
                                    </Button>
                                </form>
                            }
                        </Container>

                        <Box className={classes.workActions}>
                            <Grid item md={6}>
                                <Button size='small' className={classes.workPapper}>
                                    <PersonIcon /> <br />
                                Members(10)
                            </Button>
                            </Grid>
                            <Grid item md={6}>
                                <Button onClick={() => handleWorkDelete(work._id)} size='small' className={classes.workPapper}>
                                    <DeleteIcon /> <br />
                                Delete
                            </Button>
                            </Grid>
                            <Grid item md={6}>
                                <Button size='small' className={classes.workPapper}>
                                    <DashboardIcon /> <br />
                                Boards
                            </Button>
                            </Grid>
                            <Grid item md={6}>
                                <Button disabled size='large' className={classes.workPapper}>
                                    <SettingsIcon /> <br />
                                Settings
                            </Button>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item md={9} sm={12} className={classes.boardContainer} >
                        <CreateBoard workId={work._id} />
                        {work.boards.map(b => (
                            <BoardCard currBoard={b} workId={work._id} />
                        ))}
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}