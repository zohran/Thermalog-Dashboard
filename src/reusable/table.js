import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
  
function createData(number, item, qty, price) {
 return { number, item, qty, price };
}
  
const rows = [
 createData(1, "Apple", 5, 3),
 createData(2, "Orange", 2, 2),
 createData(3, "Grapes", 3, 1),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
  
export default function BasicTable() {
 return (
   <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead bgColor="6D6D6D"  >
         <TableRow>
           <TableCell sx={{color:"white"}}>S.No</TableCell>
           <TableCell align="right" sx={{color:"white"}}>Item</TableCell>
           <TableCell align="right" sx={{color:"white"}}>Price&nbsp;($)</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow key={row.number}>
             <TableCell component="th" scope="row">
               {row.number}
             </TableCell>
             <TableCell align="right">{row.item}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 );
}