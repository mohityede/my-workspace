import React, { useState } from 'react';
import { Button, Card, CardContent, Container, Grid, Paper, Box, Typography, TextField } from '@material-ui/core';
import useStyles from './style';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import CreateWork from './createWork';
import BoardCard from './boardCard';
import AddIcon from '@material-ui/icons/Add';
import CreateBoard from './createBoard';


export default function SimpleCard() {
    const classes = useStyles();
    const [workUpdateFlag, setWorkUpdateFlag] = useState(true);
    const [workName, setWorkName] = useState('workName');

    function toggleWorkUpdateFlag(event) {
        setWorkUpdateFlag(!workUpdateFlag);
    }

    function handleWorkUpdateSubmit(event) {
        event.preventDefault();
        toggleWorkUpdateFlag();
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
                                <Container>
                                    name < EditIcon onClick={toggleWorkUpdateFlag} />
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
                                <Button size='small' className={classes.workPapper}>
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

                        {/* <CreateWork /> */}
                        <CreateBoard />
                        <BoardCard />
                        <BoardCard />
                        <BoardCard />
                        <BoardCard />
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}