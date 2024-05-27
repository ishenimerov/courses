import { Box, Card, CardContent, Typography } from '@mui/material';

import type { Course } from '../../../types/courses';

export function CourseItem(props: { tag: Course }) {
  return (
    <Card sx={{ width: '100%', height: '230px', borderRadius: '18px' }}>
      <Box
        alt={props.tag.name}
        component="img"
        src={props.tag.image}
        sx={{
          height: 144,
          width: '100%',
          bgcolor: props.tag.bgColor,
          objectFit: 'contain',
        }}
      />

      <CardContent>
        <Typography
          sx={{
            font: 'Nunito',
            fontSize: '18px',
            fontWeight: 800,
            color: '#39414B',
          }}
        >
          {props.tag.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
