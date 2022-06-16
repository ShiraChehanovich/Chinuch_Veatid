import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import File from './File';


var fileType;
var selectedId;
export default function FileCard(props) {
    fileType = props.props
    selectedId = props.propsId
      return (
    <Card sx={{width: "19%" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/5e/8e/1a/5e8e1a19-b1ea-16cf-b9f9-1050c6f29a1f/AppIcon_fm-1x_U007emarketing-85-220-3.png/1200x630wa.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fileType==="1"?"הצהרת בריאות":fileType==="2"?"ויתור סודיות":fileType==="3"?"הוראת קבע":fileType==="4"?"טיפול תרופתי":"קבלת תלמיד"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">בחר קובץ */}
        <File propsId = {selectedId} propsType = {fileType}/>
        {/* </Button> */}
        {/* <Button size="small">העלאה</Button> */}
      </CardActions>
    </Card>
  );
}

