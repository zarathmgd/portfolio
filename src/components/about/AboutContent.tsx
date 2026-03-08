import { Box, Typography } from "@mui/material";
import { IAbout } from "../Context";

export default function AboutContent({ title, textOne, textTwo, textThree }: IAbout) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Typography variant="h3">{title}</Typography>
<<<<<<< HEAD
      <Typography variant="body2">{textOne}</Typography>
      <Typography variant="body2">{textTwo}</Typography>
      <Typography variant="body2">{textThree}</Typography>
=======
      <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>{textOne}</Typography>
      <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>{textTwo}</Typography>
>>>>>>> 73c7f8e79658ac2e4ee0ecab7c1f8a3ec8a12650
    </Box>
  );
}
