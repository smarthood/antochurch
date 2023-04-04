import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

export default function Gallery() {
  const itemData = [1, 2, 3, 4, 5, 6, 7]
  return (
    <Box sx={{ paddingInline: 5, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`img/${item}.jpg?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
