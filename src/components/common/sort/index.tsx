import { Box, ListItem, Typography } from '@mui/material';

import './style.scss';

export function Sort(props: {
  tags: string[];
  selected?: string;
  onSelect: (value: string | undefined) => void;
}) {
  return (
    <Box className="sort-container">
      <ListItem
        className={`sort-list-item ${
          props.selected === undefined ? 'selected' : 'default'
        }`}
        onClick={() => props.onSelect(undefined)}
      >
        <Typography className="sort-typography">Все Темы</Typography>
      </ListItem>
      {props.tags.map(tag => (
        <ListItem
          key={tag}
          className={`sort-list-item ${
            props.selected === tag ? 'selected' : 'default'
          }`}
          onClick={() => props.onSelect(tag)}
        >
          <Typography className="sort-typography">{tag}</Typography>
        </ListItem>
      ))}
    </Box>
  );
}
