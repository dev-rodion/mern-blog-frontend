import React from "react";
import SideBlock from "./SideBlock";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

const TagsBlock = ({ items, isLoading = true }) => {
  return (
    <SideBlock title="Tags">
      <List>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a href={`/tags/${name}`} key={name}>
            <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon width={50} />
                </ListItemIcon>
                {isLoading ? (
                  <div>Loadin...</div>
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </SideBlock>
  );
};

export default TagsBlock;
