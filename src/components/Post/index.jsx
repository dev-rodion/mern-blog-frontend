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

  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <a href={`/posts/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </a>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}

      {imageUrl && (
        <a href={`/posts/${id}`}>
          <img
            className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
            src={imageUrl}
            alt={title}
          />
        </a>
      )}

      <div className={styles.wrapper}>
        <UserInfo {...user} additional={createdAt} />
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <a href={`/posts/${id}`}>{title}</a>}
          </h2>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
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
