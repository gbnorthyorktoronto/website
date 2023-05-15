import { Button as ButtonMui, styled } from "@mui/material";
import classNames from "classnames";
import { useRouter } from "next/navigation";

const Button = styled(ButtonMui)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  textTransform: 'none',
  borderRadius: 8,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },

  '&.sm': {
    fontSize: 18,
    width: 250,
    height: 40,
  },

  '&.xs': {
    fontSize: 28,
    width: 400,
    height: 85,
  }
}));

const TryButton = ({ size = 'sm' }: { size?: 'sm' | 'xs' }) => {
  const router = useRouter()

  const onClick = () => {
    router.push('/contact')
  }

  return (
    <Button onClick={onClick} className={classNames({ [size]: size })}>Try a Free Class today</Button>
  )
}

export default TryButton
