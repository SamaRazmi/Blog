import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface EditPostPageProps {
  postId: string | string[];
}

const EditPostPage: React.FC<EditPostPageProps> = ({ postId }) => {
  const router = useRouter();

  // Sample post data
  const post = {
    id: postId,
    name: 'نام بلاگ',
    content: 'محتوای بلاگ',
    archived: false,
  };

  // State to hold the edited content
  const [editorData, setEditorData] = useState(post.content);

  // Function to handle editor content change
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
  };

  // Function to handle save button click
  const handleSaveClick = () => {
    // Simulate saving changes to post data
    console.log('Saving changes:', editorData);
    // Redirect back to the blog page
    router.push('/blog');
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <h2>{post.name}</h2>
      {/* Render the image */}
      <Image
        src={`/images/img${post.id}.jpg`}
        alt={`تصویر بلاگ ${post.id}`}
        width={400}
        height={200}
      />
      {/* Render CKEditor for editing content */}
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
      />
      <button onClick={handleSaveClick}>Save Changes</button>
    </div>
  );
};

export default EditPostPage;
