import { Box, Typography, styled } from '@mui/material'

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 12,
  marginBottom: 12,
}))

const EmptyMessage = styled(Box)(() => ({
  height: 30,
}))

const InputWarning = ({ message }: { message: string }) => (
  message ? <Text role="alert">{message}</Text> : <EmptyMessage />
)

export default InputWarning
