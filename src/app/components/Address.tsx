import { Place, MailOutline } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material'
import { gbInfo } from '../constants';

const Text = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.black,
  fontSize: 18,
  fontWeight: 600,
}));

const Mail = styled(MailOutline)(() => ({
  height: 25,
  width: 25,
  marginRight: 10,
}));

const Location = styled(Place)(() => ({
  height: 25,
  width: 25,
  marginRight: 10,
}));

const Address = () => {
  return (
    <Box display="flex">
      <Text mr={5}><Location />{gbInfo.address}</Text>
      <Text><Mail />{gbInfo.email}</Text>
    </Box>
  )
}

export default Address
