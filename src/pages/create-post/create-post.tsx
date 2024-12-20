/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { CreatedPostUI } from "@/features/create-post";
import Meta from "./meta";
const CreatePost = () => {
  return (
    <>
      <Meta />
      <CreatedPostUI />
    </>
  );
};

export default CreatePost;
