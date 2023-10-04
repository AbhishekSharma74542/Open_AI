import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../redux/Hook';

const QuestionAnswer = () => {
  const { data } = useAppSelector((state) => state.QuestionAnswer);
  
  return(
    <>
    <Card elevation={2} sx={{ minWidth: 275, mb:8 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          QnA Result
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
        <br />
          "{data}"
        </Typography>
      </CardContent>
    </Card>    
    </>
  )
}

export default QuestionAnswer
