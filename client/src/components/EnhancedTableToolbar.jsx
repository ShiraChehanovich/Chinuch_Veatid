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
import { useNavigate } from 'react-router-dom';

var tableType;

export default function EnhancedTableToolbar(props) {
  tableType = props.tt;
  const navigate = useNavigate()
  // const [searchedVal, setSearchedVal] = React.useState("");
  //  function search1(rows){
  //     return rows.filter(row => row.name.toLowerCase().indexOf(searchedVal) > -1)
  //   };

        const { numSelected } = props;
      
        const handleClick2= (event)=> {
          navigate("/student-page");
        }
        const handleSearch= (event)=> {
          
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
            {numSelected > 1 ? (
              <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
               {numSelected} מחק
              </Typography>
            ) : ( <></>
              
            )}
      
          {/* {numSelected == 1 ? (
              <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
                <div>
                <ModalPage tableType={tableType}></ModalPage>
                
                </div>
              </Typography>
            ) : (<></>   
             )} */}
      
            {numSelected > 1 ? (
        
            <div>  <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
      
              </Tooltip></div>
      
            ) : (
              <></>
            )}
      
      
      
          {numSelected == 1 ? (
            <div style={{display: 'flex' , flexWrap : 'nowrap'}}>
      
            <div>  <Tooltip title="Delete">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
      
              </Tooltip></div>
      
      
            <div ><Tooltip title="Edit" onClick={(event) => handleClick2(event)}>
              <IconButton>
                <EditIcon/>
              </IconButton>
      
              </Tooltip></div>
              </div>
            ) : (
              // <Tooltip title="Filter list">
              //   <IconButton>
              //     <SearchOutlinedIcon />
              //   </IconButton> 
      
              // </Tooltip>
              <></>
            )}
            {numSelected == 0 ?(
      
              
               <Typography
               sx={{ flex: '1 1 100%' }}
               variant="h6"
               id="tableTitle"
               component="div"
             >
               <div style={{display: 'flex' , flexWrap : 'nowrap'}}>
               <div><ModalPage tableType={tableType}></ModalPage></div>
      
               <div><Tooltip title="Filter list">
                 <IconButton onClick={handleSearch}>
                   <SearchOutlinedIcon />
                 </IconButton> 
      
               </Tooltip></div>
               {/* <input type = " text" value={searchedVal} onChange={(e) => setSearchedVal(e.target.value)}/> */}
               
               </div>
             </Typography> 
      
            ):(<></>)}
      
      
          </Toolbar>
        );
      };
