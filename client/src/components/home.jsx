import { Container, Typography, TextField, Button, Fab } from '@material-ui/core';
import SimpleCard from './card';
import CreateWork from './createWork';
import useStyles from './style';

function Home() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.Container} >
                <CreateWork />
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