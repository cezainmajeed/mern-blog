import React from "react";
import {Button,makeStyles,Table,TableRow,TableCell,TableHead,TableBody} from "@material-ui/core";
import {categories} from "../../constants/data";
import {Link} from "react-router-dom";

const useStyles=makeStyles({
  create:{
    margin:20,
    background:"#6495ED",
    color:"#fff",
    width:"86%"
  },
  links:{
    textDecoration:"none",
    color:"inherit"
  }
})

function Categories(){
  const classes=useStyles();
  return (
    <>
    <Link className={classes.links} to={"/create"}>
    <Button variant="contained" className={classes.create}>Create Blog</Button>
    </Link>

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
