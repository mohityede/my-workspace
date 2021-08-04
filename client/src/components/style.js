import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    addCard: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#ebf5fc',
        maxWidth: '200px',
        cursor: 'pointer',
    },
    Container: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    HomeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column-reverse',
        padding: '10px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    heading: {
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
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-around',
        flexShrink: 'initial',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
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
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            overflowX: 'visible',
            flexWrap: 'wrap',
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