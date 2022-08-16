import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { AddComment, Post } from "../components";
import { CommentsBlock } from "../components/";

const FullPost = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.msg);
        alert("Error: ", err.msg);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Post isLoading={true} />;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl}
        // imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={data.user}
        createdAt={data.postDate}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        {data.text}
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              username: "Liam Williams",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "This is a test comment",
          },
          {
            user: {
              username: "Oliver Smith",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      />
      <AddComment />
    </>
  );
};

export default FullPost;
