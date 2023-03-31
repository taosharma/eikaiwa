import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function AvatarChips({ size, colour, text }) {
  return (
    <div>
      {/* <Chip avatar={<Avatar>M</Avatar>} label="Avatar" /> */}
      <Chip
        color={colour}
        avatar={<Avatar src="/static/images/avatar/1.jpg" />}
        label={text}
        // onClick={handleClick}
      />
    </div>
  );
}
