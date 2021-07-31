import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../../layout/Theme";

const Tabla = (props) => {
  const { columnas, filas } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 440,
    },
  });
  const classes = useStyles();
  return (
    <Theme>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columnas.map((column) => (
                  <TableCell>
                    <strong>{column.name}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filas
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>{row.Producto}</TableCell>
                      <TableCell>{row.Lunes}</TableCell>
                      <TableCell>{row.Martes}</TableCell>
                      <TableCell>{row.Miercoles}</TableCell>
                      <TableCell>{row.Jueves}</TableCell>
                      <TableCell>{row.Viernes}</TableCell>
                      <TableCell>{row.Sabado}</TableCell>
                      <TableCell>{row.Domingo}</TableCell>
                      <TableCell>
                        {
                          (row.totalSemanal =
                            row.Lunes +
                            row.Martes +
                            row.Miercoles +
                            row.Jueves +
                            row.Viernes +
                            row.Sabado +
                            row.Domingo)
                        }
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={filas.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Theme>
  );
};
export default Tabla;
