import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from './Table'
import MedicineList from './MedicineList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from './context/AuthContext';
import { firestore } from '../firebase/firebase';
import StudentPage from './StudentPage';

export default function Tabs() {
  const [value, setValue] = React.useState('1');
  const staffRef = collection(firestore, "staff");
    const [classObject, setClassObject] = React.useState([]);
    const { currentUser, logout  } = useAuth();
    const mail = currentUser.email

    // const getData = async () => {
        
    //     var q = query(staffRef, where("email", "==",  {mail}));
    //     const snapshot = await getDocs(q);
    //     const  result = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
    //     // console.log(result[0].grade);
    //     return result[0]; 
    //      }      
    //   React.useEffect(()=>{getData()});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let props1 = {
    t:"Staff",
    p:"none"
    }
    let props2= {
        t:"Student",
        p:"1"
        }
        let props3= {
            id: "1234345",
            p:"Student"
            }

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
        <TabPanel value="1">
        <MedicineList/>
        </TabPanel>
        <TabPanel value="2">
            {/* {console.log(props3.id)} */}
            <StudentPage {...props3}></StudentPage>
        </TabPanel>
        <TabPanel value="3">
            <Table {...props1}></Table>
        </TabPanel>
        <TabPanel value="4">
            <Table {...props2}></Table>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
