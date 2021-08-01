import React from 'react';
import { Card, CardContent, Container, Grid, Paper, Typography } from '@material-ui/core';
import useStyles from './style';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardContent>
                <Grid container>
                    <Grid item md={3} sm={12} >
                        <Container className={classes.workName}>
                            name
                </Container>

                        <Grid container className={classes.workActions}>
                            <Grid item md={6}>
                                <Paper className={classes.workPapper}>
                                    <PersonIcon /> <br />
                                Members
                            </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper className={classes.workPapper}>
                                    <DeleteIcon /> <br />
                                Delete
                            </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper className={classes.workPapper}>
                                    <DashboardIcon /> <br />
                                Boards
                            </Paper>
                            </Grid>
                            <Grid item md={6}>
                                <Paper className={classes.workPapper}>
                                    <SettingsIcon /> <br />
                                Settings
                            </Paper>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item md={9} sm={12} className={classes.boardContainer} >

                        <Card className={classes.boardPaper}>
                            <CardContent>
                                Add Board
                        </CardContent>
                        </Card>
                        <Card className={classes.boardPaper}>
                            <CardContent>
                                Board
                        </CardContent>
                        </Card>
                        <Card className={classes.boardPaper}>
                            <CardContent>
                                board
                        </CardContent>
                        </Card>
                        <Card className={classes.boardPaper}>
                            <CardContent>
                                board
                        </CardContent>
                        </Card>
                        <Card className={classes.boardPaper}>
                            <CardContent>
                                board
                        </CardContent>
                        </Card>
                        <Card className={classes.boardPaper}>
                            <CardContent>
                                board
                        </CardContent>
                        </Card>
                        <Card className={classes.boardPaper}>
                            <CardContent>
                                board
                        </CardContent>
                        </Card>


                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}