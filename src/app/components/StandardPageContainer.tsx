import { Box, styled } from "@mui/material";
import { backgroundHeight } from "../constants";

const StandardPageContainer = styled(Box)(() => ({
  height: backgroundHeight,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
}))

export default StandardPageContainer
