import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getSinglePost } from "../features/posts/postsSlice";
import PostEditForm from "../components/PostEditForm";
type RouteParams = {
  id: string;
};

const PostEdit = () => {
  const { id } = useParams<RouteParams>();
  const idAsNumber = parseInt(id || "0");
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector((state) => state.posts.selectedPost);
  const title = selectedPost?.title ?? null;
  const content = selectedPost?.content ?? null;

  useEffect(() => {
    dispatch(getSinglePost(idAsNumber));
  }, [dispatch, idAsNumber]);

  return (
    <>
      <PostEditForm title={title} content={content} id={idAsNumber} />
    </>
  );
};

export default PostEdit;
