import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getSinglePost } from "../features/posts/postsSlice";
import EditForm from "../components/editForm";
type RouteParams = {
  id: string;
};

const Edit = () => {
    
  const { id } = useParams<RouteParams>();
  const idAsNumber = parseInt(id || "0");
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector((state) => state.posts.selectedPost);
  console.log(selectedPost);

  useEffect(() => {
    dispatch(getSinglePost(idAsNumber));
  }, [dispatch, id]);

  return (
    <>
      <EditForm />
    </>
  );
};

export default Edit;
