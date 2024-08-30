
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function DialogBase(dialogType, onClose, open) {

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{dialogType}</DialogTitle>
    </Dialog>
  );
}

