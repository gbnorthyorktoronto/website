import { Theme, Typography, TypographyProps, styled, useTheme } from "@mui/material"
import { ReactNode } from "react"

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  wordWrap: 'break-word',
}))

interface ComponentProps extends TypographyProps {
  children: ReactNode
  fontSize?: number
  color?: string
  lineHeight?: number
}

const BodyText = ({ children, fontSize = 18, lineHeight = 2.5, color, ...props }: ComponentProps) => {
  const theme: Theme = useTheme()
  const newColor = color || theme.palette.common.black
  const newLineHeight = lineHeight || 2.5

  return (
    <Text {...props} lineHeight={newLineHeight} color={newColor} fontSize={fontSize}>{children}</Text>
  )
}

export default BodyText
