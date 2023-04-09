import * as React from "react";
import Chip from "@mui/material/Chip";

import SvgIcon from "@mui/material/SvgIcon";
import classnames from "classnames";
import styles from "./index.module.css";
import { Avatar } from "@mui/material";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import ReduceCapacityRoundedIcon from "@mui/icons-material/ReduceCapacityRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import LuggageRoundedIcon from "@mui/icons-material/LuggageRounded";

export default function AvatarChips({ size, colour, text, sx, chipIcon }) {
  console.log(chipIcon);

  return (
    <div>
      {/* <Chip avatar={<Avatar>M</Avatar>} label="Avatar" /> */}
      <Chip
        color={colour}
        size={size}
        label={text}
        icon={<SvgIcon component={chipIcon} />}
        clickable
        sx={sx}
      />
    </div>
  );
}
AvatarChips.defaultProps = {
  size: "small",
  colour: "primary",
  text: "tag",
  sx: { padding: "17px" },
};
