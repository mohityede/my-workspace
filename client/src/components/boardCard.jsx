import { Button, Card, CardContent, Container, Grid, Paper, Box, Typography, TextField } from '@material-ui/core';
import { useState } from 'react';
import useStyles from './style';

export default function BoardCard() {
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
                < Card className={classes.boardPaper}>
                    <CardContent>
                        Board <br />
                        <Button onClick={toggleBoardUpdateFlag} style={{ marginTop: '50%' }} color='primary' >Update</Button>
                    </CardContent>
                </ Card>
                :
                < Card className={classes.boardPaper} >
                    <CardContent>

                        <form onSubmit={handleBoardUpdateSubmit}>
                            <TextField onChange={handleUpdateBoard} value={boardName} style={{ width: '100%' }} required /> <br />
                            <Button
                                type='submit'
                            >
                                Update
                                    </Button>
                        </form>
                    </CardContent>
                </ Card>
            }
        </>


    )
}