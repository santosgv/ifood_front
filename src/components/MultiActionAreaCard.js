import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from '@mui/system';

export default function MultiActionAreaCard() {

const [cardapio, setCardapio] = React.useState([]);

React.useEffect(() =>{
  fetch('http://127.0.0.1:8000/v1/produtos/')
  .then((response) => response.json())
  .then((dados) => {
    setCardapio(dados)
  });
},[])

  return (
    <>
  
  {cardapio.map(
              (produto , ...preco) => (
               <Container  maxWidth="sm" sx={{paddingTop:'3vh'}} key={produto.nome}>
                <Card sx={{ maxWidth: 800 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    src={"http://127.0.0.1:8000/"+produto.src}
                    alt={produto.nome}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {produto.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    R$ {produto.preco}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:'center'}}>
                  <Button size="small" color="primary" href={"http://127.0.0.1:8000/v1/produtos/produto/"+produto.id}>
                    Visualizar {produto.id}
                  </Button>
                </CardActions>
              </Card>
              </Container>
              ))}

   
    </>
  );
}