import React from 'react';
import './styles/Blog.css';

const Blog = () => {  
  return (
    <main className="main">
        <h1>Blog</h1>
        <div className="cards">
            <div className="blog-card">
                <img src="/images/blog/1.jpg" alt="" />
                <h3>Blog title</h3>
                <p>Date</p>
                <div className="button">Duration</div>
            </div>
            <div className="blog-card">
                <img src="/images/blog/2.jpg" alt="" />
                <h3>Blog title</h3>
                <p>Date</p>
                <div className="button">Duration</div>
            </div>
            <div className="blog-card">
                <img src="/images/blog/3.jpg" alt="" />
                <h3>Blog title</h3>
                <p>Date</p>
                <div className="button">Duration</div>
            </div>
            <div className="blog-card">
                <img src="/images/blog/4.jpg" alt="" />
                <h3>Blog title</h3>
                <p>Date</p>
                <div className="button">Duration</div>
            </div>
            <div className="blog-card">
                <img src="/images/blog/5.jpg" alt="" />
                <h3>Blog title</h3>
                <p>Date</p>
                <div className="button">Duration</div>
            </div>
            <div className="blog-card">
                <img src="/images/blog/6.jpg" alt="" />
                <h3>Blog title</h3>
                <p>Date</p>
                <div className="button">Duration</div>
            </div>
        </div>
    </main>
  );
}

export default Blog;
