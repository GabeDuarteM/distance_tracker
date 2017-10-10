import React from "react"
import axios from "axios"

import FormCreateTracker from "./FormCreateTracker.js"
import TrackerTable from "./TrackerTable.js"

class ListTrackers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trackers: null,
      loadingTrackers: true
    }
  }

  getListTrackers = async () => {
    this.setState({ loadingTrackers: true })
    const resp = await axios.get("http://localhost:4000/api/v1/trackers")
    this.setState({ trackers: resp.data.data, loadingTrackers: false })
  }

  componentDidMount = async () => {
    await this.getListTrackers()
  }

  render() {
    return [
      <FormCreateTracker
        key="FormCreateTracker"
        getListTrackers={this.getListTrackers}
      />,
      !this.state.loadingTrackers &&
        this.state.trackers &&
        this.state.trackers.length > 0 && (
          <TrackerTable
            key="TrackerTable"
            getListTrackers={this.getListTrackers}
            trackers={this.state.trackers}
          />
        )
    ]
  }
}

export default ListTrackers
