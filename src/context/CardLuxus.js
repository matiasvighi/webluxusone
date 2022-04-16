import { Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'

export default function CardLuxus({title, children}) {
  return (
    <Card sx={{ m: 2 }}>
        <CardHeader title={title}/>
        <CardContent>{children}</CardContent>
    </Card>
  )
}
