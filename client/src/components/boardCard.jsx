import { Button, Card, CardContent, TextField } from '@material-ui/core';
import { useState } from 'react';
import useStyles from './style';
import axios from 'axios';

export default function BoardCard({ workId, currBoard }) {
    const classes = useStyles();
    const [boardUpdateFlag, setBoardUpdateFlag] = useState(true);
    const [boardName, setBoardName] = useState(currBoard.boardName);

    function toggleBoardUpdateFlag() {
        setBoardUpdateFlag(!boardUpdateFlag);
    }

    function handleBoardUpdateSubmit(event) {
        event.preventDefault();
        toggleBoardUpdateFlag();
    }

    function handleBoardDelete() {
        try {
            const deleteBoard = async () => {
                await axios.delete(`http://localhost:7700/api/boards/${workId}/delete/${currBoard._id}`);
                window.location.reload();
            }
            deleteBoard();
        } catch (error) {
            console.log("Something wrong with connection!!")
        }
    }

    function updateBoardSubmit(event) {
        event.preventDefault();
        try {
            const updateBoard = async () => {
                const bName = boardName;
                await axios.put(`http://localhost:7700/api/boards/${workId}/update/${currBoard._id}`, { boardName: boardName });
                setBoardName(bName);
            }
            updateBoard();
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
                < Card className={classes.boardPaper}>
                    <CardContent>
                        {boardName} <br />
                        <Button onClick={toggleBoardUpdateFlag} style={{ marginTop: '25%' }} color='primary' >Update</Button>
                        <Button onClick={handleBoardDelete} style={{ marginTop: '25%' }}>Delete</Button>
                    </CardContent>
                </ Card>
                :
                < Card className={classes.boardPaper} >
                    <CardContent>

                        <form onSubmit={handleBoardUpdateSubmit}>
                            <TextField onChange={handleUpdateBoard} onSubmit={updateBoardSubmit} value={boardName} style={{ width: '100%' }} required /> <br />
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