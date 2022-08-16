import React from "react";
import SideBlock from "./SideBlock";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, List, Skeleton } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

const TagsBlock = ({ items, isLoading = true }) => {
  return (
    <SideBlock title="Tags">
      <List>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a href={`/tags/${name}`} key={i}>
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon width={50} />
                </ListItemIcon>
                {isLoading ? <Skeleton width={100} /> : <ListItemText primary={name} />}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </SideBlock>
  );
};

export default TagsBlock;
