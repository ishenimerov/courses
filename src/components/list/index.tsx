import { Box, CircularProgress, Grid } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';

import useGetMany from '../../api/getMany';
import { CourseItem } from '../common/course-item';
import { Sort } from '../common/sort';

export function List() {
  const { data, loading, error } = useGetMany();
  const [selected, setSelected] = useState<undefined | string>(undefined);

  const handleSelect = useCallback((value?: string) => {
    setSelected(value);
  }, []);

  const tags = useMemo(() => {
    const taglist = data?.map(i => i.tags);
    const flattenedTaglist = taglist?.flat();
    const uniqueTags = Array.from(new Set(flattenedTaglist));

    return uniqueTags;
  }, [data]);

  const list = useMemo(() => {
    if (!selected) return data;

    return data?.filter(course => course.tags.includes(selected));
  }, [data, selected]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Error: {error.message}
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', gap: '24px', p: '24px' }}>
      <Sort selected={selected} tags={tags} onSelect={handleSelect} />
      <Grid spacing={2} container>
        {list?.map(tag => (
          <Grid key={tag.id} md={4} sm={4} xs={4} item>
            <CourseItem tag={tag} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
