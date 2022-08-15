import React from "react";
import clsx from "clsx";
import styles from "./Post.module.scss";
import { IconButton } from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  RemoveRedEyeOutlined as EyeIcon,
  ChatBubbleOutlineOutlined as CommentIcon,
} from "@mui/icons-material";
import { UserInfo } from "../index";
import PostSkeleton from "./Skeleton";
import { Link } from "react-router-dom";

const Post = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  if (isLoading) {
    return <PostSkeleton />;
  }

  const date = new Date(createdAt);
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateString = date.getDay() + " " + monthArr[date.getMonth()] + " " + date.getFullYear();

  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}

      {imageUrl && (
        <Link to={`/posts/${id}`}>
          <img className={clsx(styles.image, { [styles.imageFull]: isFullPost })} src={imageUrl} alt={title} />
        </Link>
      )}

      <div className={styles.wrapper}>
        <UserInfo {...user} additionalText={dateString} />

        <div className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
          </h2>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
