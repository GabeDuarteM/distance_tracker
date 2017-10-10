import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"
import { IconButton } from "material-ui"
import DeleteIcon from "material-ui-icons/Delete"
import axios from "axios"

const TrackerTable = ({ trackers, getListTrackers }) => (
  <Paper style={{ margin: 32 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell numeric>#</TableCell>
          <TableCell>Activity</TableCell>
          <TableCell numeric>Distance</TableCell>
          <TableCell>Completed at</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {trackers.map(n => {
          return (
            <TableRow key={n.id}>
              <TableCell numeric>{n.id}</TableCell>
              <TableCell>{n.activity}</TableCell>
              <TableCell numeric>{n.distance}</TableCell>
              <TableCell>{n.completed_at}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleClickDelete(n.id, getListTrackers)}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

const handleClickDelete = async (id, getListTrackers) => {
  await axios.delete(`http://localhost:4000/api/v1/trackers/${id}`)
  getListTrackers()
}

export default TrackerTable
