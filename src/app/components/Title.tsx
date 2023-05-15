import { Typography, TypographyProps, styled, useTheme, Theme } from "@mui/material"
import { ReactNode } from "react"

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 28,
}))

interface ComponentProps extends TypographyProps {
  children: ReactNode
}

const Title = ({ children, ...props }: ComponentProps) => {
  const theme: Theme = useTheme()
  const newColor = props.color || theme.palette.secondary.main

  return (
    <Text color={newColor} {...props}>{children}</Text>
  )
}

export default Title
