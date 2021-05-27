import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Link } from "react-router-dom";

export default function AlertDialog({openDialog, handleAccepet, handleDecline}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [room,setRoom] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(true);
  };

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Invite game"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            User invite you to game, do you want to play with him?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => (handleDecline(e))} color="primary">
            No, i want to stay here.
          </Button>
          <Link
          onClick={(e) => (handleAccepet(e))}
         color="primary" autoFocus>
            Yes,lets play!
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
