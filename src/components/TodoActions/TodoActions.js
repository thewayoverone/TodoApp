import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListIcon from '@mui/icons-material/List';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckIcon from '@mui/icons-material/Check';
import './TodoActions.css';

const TodoActions = ({ handleChangeTab, tab }) => {
  return (
      <div className="actions-wrapper">
          <Tabs
              value={tab}
              onChange={(e, tabValue) => handleChangeTab(tabValue)}
              indicatorColor="secondary"
              textColor="secondary"
          >
              <Tab label={<ListIcon color="secondary"/>} />
              <Tab label={<RadioButtonUncheckedIcon color="secondary"/>} />
              <Tab label={<CheckIcon color="secondary"/>} />
          </Tabs>
      </div>
  )
}

export default TodoActions;