import React from 'react'
import { Dialog,Box ,Typography,List,ListItem} from '@mui/material'

const dialogStyle = {
  height:'96%',
  marginTop:'12%',
  width:'60%',
  maxWidth:'100%',
  maxHeight:'100%',
  boxShadow:'none',
  overflow:'none'

}

const LoginDialog = () => {
  return (
    <div>
      <Dialog open={true} PaperProps={{sx:dialogStyle}}>
        <Box>
          <Box>
            <Typography>To use WhatsApp on your computer:</Typography>
            <List>
              <ListItem>Open WhatsApp on your phone.</ListItem>
            </List>
          </Box>
          <Box>2</Box>
        </Box>
      </Dialog>
    </div>
  );
}

export default LoginDialog