import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

var staffEmail;
export default function RollingList(props) {
  staffEmail = props.props;
  const [classObject, setClassObject] = React.useState([]);
  const [gradeArray, setGrade] = React.useState([]);
  const [age, setAge] = React.useState('');
  const staffRef = collection(firestore, "staff");

  const getData = async () => {//here
    console.log(staffEmail)
    var q = query(staffRef, limit(1),where("email", "==",  staffEmail));

    const snapshot = await getDocs(q);
    const  results = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
    // console.log(results)
    setClassObject(results[0]);
    console.log(classObject)
    // console.log(classObject[0])

    // (classObject.at(0).grade).forEach(doc => {
    //       setGrade(prev => [...prev, doc])
    //     });
    // console.log(classObject); //to here
    

    // console.log(results)
    // console.log(classObject)
  }      
  // const setGradeArray = async()=>{
    
  //   (classObject.at(0).grade).forEach(doc => {
  //     setGrade(prev => [...prev, doc])
  //   });
  //    }
     React.useEffect(()=>{getData()}, []);
    //  React.useEffect(()=>{setGradeArray()}, []);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">כיתה</InputLabel>
    {(gradeArray).map((s)=>{
      console.log(s)
        // let classIndex = 0;
        })}

        {/* {condclassObject[1])} */}

       {/* return( */}
        {/* <Select */}
    {/* //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={classIndex}
    //       label="class"
    //       onChange={handleChange}
    //     >
    //       <MenuItem value={classIndex = classIndex +1}>{`${s}`}</MenuItem>
    //       {/* <MenuItem value={20}>Twenty</MenuItem>
    //       <MenuItem value={30}>Thirty</MenuItem> */}
         {/* </Select>) */}
     {/* })} } */}
      </FormControl>
    </Box>
  );
}





// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// const BpIcon = styled('span')(({ theme }) => ({
//   borderRadius: '50%',
//   width: 16,
//   height: 16,
//   boxShadow:
//     theme.palette.mode === 'dark'
//       ? '0 0 0 1px rgb(16 22 26 / 40%)'
//       : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
//   backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
//   backgroundImage:
//     theme.palette.mode === 'dark'
//       ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
//       : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
//   '.Mui-focusVisible &': {
//     outline: '2px auto rgba(19,124,189,.6)',
//     outlineOffset: 2,
//   },
//   'input:hover ~ &': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
//   },
//   'input:disabled ~ &': {
//     boxShadow: 'none',
//     background:
//       theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
//   },
// }));

// const BpCheckedIcon = styled(BpIcon)({
//   backgroundColor: '#137cbd',
//   backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
//   '&:before': {
//     display: 'block',
//     width: 16,
//     height: 16,
//     backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
//     content: '""',
//   },
//   'input:hover ~ &': {
//     backgroundColor: '#106ba3',
//   },
// });

// // Inspired by blueprintjs
// function BpRadio(props) {
//   return (
//     <Radio
//       sx={{
//         '&:hover': {
//           bgcolor: 'transparent',
//         },
//       }}
//       disableRipple
//       color="default"
//       checkedIcon={<BpCheckedIcon />}
//       icon={<BpIcon />}
//       {...props}
//     />
//   );
// }

// export default function CustomizedRadios() {
//   return (
//     <FormControl>
//        <RadioGroup
//         defaultValue="female"
//         aria-labelledby="demo-customized-radios"
//         name="customized-radios"
//       >
//         <FormControlLabel value="ישיבת צוות" control={<BpRadio />} label="ישיבת צוות" />
//         <FormControlLabel value="שיעור" control={<BpRadio />} label="שיעור" />
//         <FormControlLabel value="טיול" control={<BpRadio />} label="טיול" />
//         <FormControlLabel value="אחר" control={<BpRadio />} label="אחר" />

      
//       </RadioGroup>
//     </FormControl>
//   );
// }
