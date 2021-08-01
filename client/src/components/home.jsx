
import { Container, Typography } from '@material-ui/core';
// import { useState, useEffect } from 'react';
import SimpleCard from './card';
import useStyles from './style';

function Home() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.Container} >
                <Container>
                    <Container className={classes.addCard}>
                        <Typography variant='h3' >+</Typography>
                        <Typography>Create Workspaces</Typography>
                    </Container>
                </Container>
                <Container>
                    <Typography className={classes.heading} >Existing Workspaces</Typography>
                </Container>
                <Container className={classes.HomeContainer}>
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                </Container>
            </Container>
        </>
    );
}

export default Home;