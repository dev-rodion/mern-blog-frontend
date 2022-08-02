import React from "react";
import SideBlock from "./SideBlock";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";

const CommentsBlock = ({ items, children, isLoading = true }) => {
  const current = new Date();
  const day =
    current.getDay() >= 10 ? current.getDay() : "0" + current.getDay();
  const month =
    current.getMonth() >= 9
      ? current.getMonth() + 1
      : "0" + (current.getMonth() + 1);
  const date = day + "." + month + "." + current.getFullYear();

  return (
    <SideBlock title={"Comments"}>
      <List>
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar alt={obj.user.username} src={obj.user.avatarUrl} />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                  <Skeleton variant="text" height={18} width={80} />
                </div>
              ) : (
                <div>
                  <ListItemText
                    primary={obj.user.username}
                    secondary={obj.text}
                    style={{ marginBottom: 0 }}
                  />
                  <Typography variant="caption">{date}</Typography>
                </div>
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </SideBlock>
  );
};

export default CommentsBlock;
