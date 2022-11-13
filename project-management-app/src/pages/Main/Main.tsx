import './Main.scss';
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import ConfirmDialog from '../../components/popup/ConfirmDialog'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchAllBoards, fetchDeleteBoard } from '../../store/boardSlice';
import { useEffect, useState } from 'react';

export const Main = () => {
  const allBoards = useAppSelector((state) => state.board.allBoards);
  const dispatch = useAppDispatch();
  const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: '', onConfirm: () => {''}});
  const getToken = localStorage.getItem('token')
  if(getToken){
    const token = JSON.parse(getToken);
    useEffect(() => {
      dispatch(fetchAllBoards(token))
    }, []);
  }

  return (
    <Container className='main' component='main' maxWidth='xl'>
      <Typography className='main-title' variant='h2'>
        Your Boards
      </Typography>
      <Grid container columns={{ xs: 1, sm: 2, md: 4 }}>
        {allBoards.length ? (
          allBoards.map((el, index) => (
            <Grid item xs={1} key={index}>
              <Card className='board'>
                <CardContent className='board__title'>
                  <Typography variant='h5'>{el.title}</Typography>
                </CardContent>
                <CardContent className='board__description'>
                  <Typography variant='body2'>{el.owner}</Typography>
                </CardContent>
                <CardActions sx={{ ml: 'auto' }}>
                  <IconButton color="error" onClick={ async () => {
                      setConfirmDialog({
                        isOpen: true,
                        title: 'Are you sure what you want delete this board',
                        subTitle: 'Click button yes',
                        onConfirm: async () => {                    
                        const getToken = localStorage.getItem('token');
                        if(getToken){
                          const id = el._id;
                          const token = JSON.parse(getToken);
                          await dispatch(fetchDeleteBoard({id, token}))
                          await dispatch(fetchAllBoards(token))
                          setConfirmDialog({...confirmDialog, isOpen: false})  
                        }}
                    })
                    }}>
                    <DeleteForeverIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant='h6' color='white'>
            No available boards
          </Typography>
        )}
      </Grid>
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog}  />
    </Container>
  );
};
