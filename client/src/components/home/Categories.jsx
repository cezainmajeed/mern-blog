import React from "react";
import {Button,makeStyles,Table,TableRow,TableCell,TableHead,TableBody} from "@material-ui/core";
import {categories} from "../../constants/data";

const useStyles=makeStyles({
  create:{
    margin:20,
    background:"#6495ED",
    color:"#fff",
    width:"86%"
  }
})

function Categories(){
  const classes=useStyles();
  return (
    <>
    <Button variant="contained" className={classes.create}>Create Blog</Button>

    <Table>
    <TableHead>
    <TableRow>
    <TableCell>All Categories</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {categories.map(category=>(
      <TableRow>
      <TableCell>{category}</TableCell>
      </TableRow>
    ))}
    </TableBody>
    </Table>
    </>
  );
}

export default Categories;
