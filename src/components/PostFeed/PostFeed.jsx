import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';
import './PostFeed.css';

export function PostFeed({ posts, view }) {
  if (posts.length === 0) {
    return (
      <section className={`post-feed ${view}`} aria-label={`${view} gallery`}>
        <p className="empty-posts">Нічого немає</p>
      </section>
    );
  }

  return (
    <section className={`post-feed ${view}`} aria-label={`${view} gallery`}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
}

function PostCard({ post }) {
  return (
    <article className='post-card'>
      <div className='post-media'>
        <img src={post.photo} alt='' />
      </div>
      <div className='post-meta'>
        <div className='post-column post-column-start'>
          <span className='post-title'>Today</span>
          <div className='metric-line'>
            <span>
              <Heart fill='currentColor' />
              {post.likes}
            </span>
            <span>
              <MessageSquare fill='currentColor' />
              {post.comments}
            </span>
          </div>
        </div>

        <div className='post-column post-column-middle'>
          <time className='post-title'>{post.publishDate}</time>
          <div className='metric-line'>
            <span>
              <Heart fill='currentColor' />
              {post.views}
            </span>
            <span>
              <MessageSquare fill='currentColor' />
              {post.secondaryComments}
            </span>
          </div>
        </div>

        <div className='post-column post-column-end'>
          <span className='post-title'>{post.uploads}</span>
          <time>{post.uploadDate}</time>
        </div>
      </div>
    </article>
  );
}
