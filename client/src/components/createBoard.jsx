import { Button, Card, CardContent, Fab, Typography, TextField } from '@material-ui/core';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import axios from 'axios';

export default function CreateBoard({ workId }) {
    const classes = useStyles();
    const [boardUpdateFlag, setBoardUpdateFlag] = useState(true);
    const [boardName, setBoardName] = useState('');

    function toggleBoardUpdateFlag() {
        setBoardUpdateFlag(!boardUpdateFlag);
    }

    function handleBoardCreateSubmit(event) {
        event.preventDefault();
        toggleBoardUpdateFlag();
        try {
            const createBoard = async () => {
                await axios.put(`http://localhost:7700/api/boards/${workId}/create`, { boardName: boardName });
                window.location.reload()
            }
            createBoard();
        } catch (error) {
            console.log("Something wrong with connection!!")
        }
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
                        <form onSubmit={handleBoardCreateSubmit}>
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