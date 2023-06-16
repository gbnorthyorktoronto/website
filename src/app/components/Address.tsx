import { Place, MailOutline } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material'
import { gbPublicInfo } from '../constants';

const Text = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.black,
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
  const fontSize = '!text-[16px] sm:!fontSize-[18px]'
  const hidden = '!hidden sm:!block'
  const margin = '!mr-0 sm:!mr-[40px]'

  return (
    <Box
      display="flex"
      className="flex-col sm:flex-row mt-[20px] sm:mt-0"
      alignItems="center"
    >
      <Text className={`${fontSize} ${margin}`}><Location className={hidden} />{gbPublicInfo.address}</Text>
      <Text className={`${fontSize} ${margin}`}><Mail className={hidden} />{gbPublicInfo.email}</Text>
    </Box>
  )
}

export default Address
