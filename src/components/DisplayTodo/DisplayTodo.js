import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import './DisplayTodo.css';

const styles = {
    dialogContent: {
        paddingTop: '10px',
        paddingBottom: '10px'
    }
}


const DisplayTodo = ({isOpen, formData, handleCloseButton, handleEditTodo, handleRemoveTodo}) => {
  return (
      <Dialog open={isOpen} onClose={handleCloseButton}>
        <DialogTitle>
            <div className="display-todo-title">Your Todo</div>
        </DialogTitle>

        <DialogContent style={styles.dialogContent}>
            <div>
                <h2>{formData.todoName}</h2>
                <div>{formData.todoNote}</div>
            </div>
        </DialogContent>

          <DialogActions>
              <div className="display-buttons-wrapper">
                  <Button color="error" variant="outlined" onClick={handleRemoveTodo}>Remove</Button>
                  <div>
                      <Button color="primary" onClick={handleCloseButton}>Close</Button>
                      <Button color="primary" onClick={handleEditTodo}>Edit</Button>
                  </div>
              </div>

          </DialogActions>
      </Dialog>
  )
}

export default DisplayTodo;