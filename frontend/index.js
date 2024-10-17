import { backend } from 'declarations/backend';

async function fetchJobs() {
  try {
    const jobs = await backend.getJobs();
    const jobList = document.getElementById('jobList');
    jobs.forEach(job => {
      const li = document.createElement('li');
      li.textContent = job;
      jobList.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
}

async function fetchPosts() {
  try {
    const posts = await backend.getPosts();
    const blogPosts = document.getElementById('blogPosts');
    blogPosts.innerHTML = '';
    posts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <small>Posted on: ${new Date(Number(post.timestamp) / 1000000).toLocaleString()}</small>
      `;
      blogPosts.appendChild(article);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

async function createPost(event) {
  event.preventDefault();
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;
  try {
    await backend.createPost(title, content);
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    fetchPosts();
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchJobs();
  fetchPosts();
  document.getElementById('newPostForm').addEventListener('submit', createPost);
});
