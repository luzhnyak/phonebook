import { Box, Typography } from "@mui/material";

const Empty = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "24px", color: "green" }}>
      <Typography variant="h6">The contact list is empty! </Typography>
    </Box>
  );
};

export default Empty;
