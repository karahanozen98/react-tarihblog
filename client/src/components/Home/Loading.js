import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Loading.css"

function Loading() {
  return (
    <div>
      <CircularProgress className="Loading-logo"
      size={100}
      />
    </div>
  );
}

export default Loading;
