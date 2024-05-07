import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const BlogPage: React.FC = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const [blogPosts, setBlogPosts] = useState([
    { id: 1, name: 'نام بلاگ ۱', content: 'محتوای بلاگ ۱', archived: false },
    { id: 2, name: 'نام بلاگ ۲', content: 'محتوای بلاگ ۲', archived: false },
    { id: 3, name: 'نام بلاگ ۳', content: 'محتوای بلاگ ۳', archived: false },
  ]);

  const handleArchive = (postId: number) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, archived: true } : post
      )
    );
  };

  // Function to handle edit button click
  const handleEditClick = (postId: number) => {
    router.push(`/edit-post/${postId}`); // Navigate to the edit post page
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="absolute top-10 left-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg">
          پست جدید
        </button>
      </div>
      <main className="container mx-auto mt-8 relative">
        <div
          className="border-t-2 border-gray-300 mt-16 mx-auto"
          style={{ width: '80%' }}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="mx-auto px-4">
                <Image
                  src={`/images/img${post.id}.jpg`}
                  alt={`تصویر بلاگ ${post.id}`}
                  width={400}
                  height={200}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 text-right">
                  {post.name}
                </h2>
                <p className="text-gray-600 mt-2 text-right justify-center">
                  {post.content}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEditClick(post.id)} // Call handleEditClick function with post id
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    ویرایش
                  </button>
                  {!post.archived ? (
                    <button
                      onClick={() => handleArchive(post.id)} // Call handleArchive function with post id
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      آرشیو
                    </button>
                  ) : (
                    <span className="text-gray-500">آرشیو شده</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
