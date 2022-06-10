import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from './Table'

export default function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" align="right">
            <Tab label="מתן תרופות" value="1" />
            <Tab label="מערכת" value="2" />
            <Tab label="צוות הכיתה" value="3" />
            <Tab label="תלמידים" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">
            <Table tableType = "Staff" p = "none" ></Table>
        </TabPanel>
        <TabPanel value="4">
            <Table tableType = "Student" p = "1"></Table>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
