import { Button, Card, CardContent, Container, Grid, Paper, Box, Fab, Typography, TextField } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';

export default function CreateBoard() {
    const classes = useStyles();
    const [boardUpdateFlag, setBoardUpdateFlag] = useState(true);
    const [boardName, setBoardName] = useState('board Name');

    function toggleBoardUpdateFlag() {
        setBoardUpdateFlag(!boardUpdateFlag);
    }

    function handleBoardUpdateSubmit(event) {
        event.preventDefault();
        toggleBoardUpdateFlag();
    }

    function handleUpdateBoard(event) {
        setBoardName(event.target.value)
    }

    return (
        <>
            {boardUpdateFlag ?
                < Card className={classes.createBoard}>
                    <Fab onClick={toggleBoardUpdateFlag} color="primary" size='small' aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Typography>create board</Typography>
                </ Card>
                :
                < Card className={classes.boardPaper} >
                    <CardContent>
                        <form onSubmit={handleBoardUpdateSubmit}>
                            <TextField onChange={handleUpdateBoard} value={boardName} style={{ width: '100%' }} required /> <br />
                            <Button
                                type='submit'
                            >
                                Create
                                    </Button>
                        </form>
                    </CardContent>
                </ Card>
            }
        </>
    )
}