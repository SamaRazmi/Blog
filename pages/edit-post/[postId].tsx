import { useRouter } from 'next/router';
import EditPostPage from '../../components/EditPostPage';

const EditPost: React.FC = () => {
  const router = useRouter();
  const { postId } = router.query;

  return <div>{postId && <EditPostPage postId={postId} />}</div>;
};

export default EditPost;
