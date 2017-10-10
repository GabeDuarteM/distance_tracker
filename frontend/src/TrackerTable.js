import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"

const TrackerTable = ({ trackers }) => (
  <Paper style={{ margin: 32 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell numeric>#</TableCell>
          <TableCell>Activity</TableCell>
          <TableCell numeric>Distance</TableCell>
          <TableCell>Completed at</TableCell>
          <TableCell>uuid</TableCell>
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
              <TableCell>{n.uuid}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

export default TrackerTable
