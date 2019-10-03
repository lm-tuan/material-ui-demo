import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'age', label: 'Age', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'username',
    label: 'Username',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

function createData(name, age, email,username) {
  return { name, age, email,username };
}

const rows = [
  createData('India', '20', 'letuan@gmail.com', 3287263),
  createData('China', '21', 1403500365, 9596961),
  createData('Italy', '23', 60483973, 301340),
  createData('United States', '24', 327167434, 9833520),
  createData('Canada', '25', 37602103, 9984670),
  createData('Australia', '26', 25475400, 7692024),
  createData('Germany', '27', 'letuan@gmail.com', 357578),
  createData('Ireland', '28', 4857000, 70273),
  createData('Mexico', '29', 126577691, 1972550),
  createData('Japan', '30', 126317000, 377973),
  createData('France', '31', 'letuan@gmail.com', 640679),
  createData('United Kingdom', '31', 67545757, 242495),
  createData('Russia', '22', 146793744, 17098246),
  createData('Nigeria', '24', 200962417, 923768),
  createData('Brazil', '25', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}