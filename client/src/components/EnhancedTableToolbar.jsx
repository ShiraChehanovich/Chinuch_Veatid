import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { getDocuments } from '../firebase/firebase';
import Search from './Search';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { Prev } from 'react-bootstrap/esm/PageItem';
import ModalPage from './ModalPage';
import StudentCell from './TableCells/StudentCell';
import StaffCell from './TableCells/StaffCell';
import { ro } from 'date-fns/locale';
import { Link, useNavigate } from 'react-router-dom';
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';

var tableType;
var selectedId;

export default function EnhancedTableToolbar(props) {
  selectedId = props.sel;
  tableType = props.tt;
  const navigate = useNavigate()
  let p ={
  id:"1234345",
  type:"general",
  }
    
        
  const { numSelected } = props; 
  const handleDelete = async () =>{
    // const snapshot = await firestore
    // .collection("student")
    // .where("id", "==", selectedId)
    // .get();
     
    // const doc =snapshot.docs[0];
    // doc.ref.delete();



  //  await collection(firestore, "student").deleteDoc(selectedId);
    // await deleteDoc(doc(collection(firestore, "student")),"students",selectedId);

    // selectedId.forEach(async item =>{
    //  deleteDoc(doc(collection(firestore, "student")).Where("id","==",item)); 
    // })


    
    // collection('student').doc(selectedId).delete()
    //     .then(()=>{console.log("successfully deleted! ")})
    //     .catch((error)=>{ console.log("Error removing document:", error)})
    // window.location.reload(false);
  }       
        
      
        return (
          <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
              bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
          }}
        >
          {numSelected > 0 ? (
            <div> <Typography
              sx={{ flex: '1 1 100%' }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
             {numSelected} מחק
              <Tooltip title="Delete">
                <IconButton onClick = {handleDelete}>
                  <DeleteIcon />
                </IconButton>
      
              </Tooltip>
            </Typography></div>
          ) : ( 
            <div>
            <ModalPage tableType={tableType}></ModalPage>
            </div>
            
          )}
          </Toolbar>
        );
      };
