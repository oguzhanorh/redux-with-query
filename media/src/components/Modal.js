import React, { useState } from 'react';
import Button from './Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,TextField,DialogProps } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const Modal = ({ open, onClose, title, inputValue, handleInputChange, handleSave }) => {

    
    
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" >
            <DialogTitle>
                {title}
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    burası icerik bolümü
                </DialogContentText>
                <TextField
                    label="Değer"
                    value={inputValue}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} primary>
                    Kapat
                </Button>
                <Button variant="contained" secondary onClick={handleSave} endIcon={<SendIcon />}>
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default Modal;