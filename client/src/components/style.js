import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    },
    addCard: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#ebf5fc',
        maxWidth: '200px',
        cursor: 'pointer',
        // height: '300px'
    },
    Container: {
        // width: '80%',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        // margin: '0 100px 0 100px'
    },
    HomeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: '10px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    // headContainer: {
    //     display: 'flex',
    //     // justifyContent: 'flex-start',
    //     // alignItems: 'flex-start',
    //     margin: 0
    // },
    heading: {
        // textAlign: 'center',
        // textAlign: 'start',
        fontSize: '20px',
        marginTop: '20px',
        fontWeight: 'bold',
        color: 'gray'
    },
    cardRoot: {
        width: "100%",
        height: "200px",
        margin: '10px',
        background: '#ebf5fc',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            maxHeight: '100vh'
        }
    },
    workGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    workName: {
        width: '200px',
        fontSize: '25px',
        margin: '5px',
        padding: '5px',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    workActions: {
        width: '200px',
        // margin: '5px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-around',
        flexShrink: 'initial',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            // justifyContant: 'center'
        }
    },
    workPapper: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '10px',
        fontWeight: 'bold',
        margin: '5px',
        padding: '10px',
        background: 'white',
        width: '100%'
    },
    boardContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // overflowX: 'scroll',

        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            overflowX: 'visible',
            flexWrap: 'wrap',
            // overflowY: 'scroll'
        }
    },
    boardPaper: {
        minWidth: '130px',
        minHeight: '100%',
        height: '130px',
        margin: '10px',
    },
    workUpdateInput: {
        marginBottom: '25px',
    },
    createBoard: {
        minWidth: '130px',
        minHeight: '100%',
        height: '130px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
}));