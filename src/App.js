import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

// Actions
import { loadPosts, filterPosts } from './actions/postActions';
import PostItem from "./components/posts/PostItem";

function App({posts: { posts, is_loading, filteredPosts }, loadPosts, filterPosts}) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Init
  useEffect(() => {
    if(posts.length <= 0){
      loadPosts()
    }

  }, [posts])


  // Functions
  const handleSearch = async (e) => {
    filterPosts(e.target.value);
    setSearch(e.target.value);
  }

  // Quick handle loading.
  if(is_loading){
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <input type="text" name="search" id="search" className="searchInput" value={search} onChange={(e) => handleSearch(e)} placeholder="Search..." />
        {filteredPosts.length <= 0 && search === "" ? posts.map((post) => (
            <PostItem key={post.id} data={post} />
        )) : filteredPosts.length > 0 && search !== "" ? filteredPosts.map((post) => (
            <PostItem key={post.id} data={post} />
        )) : <div className="postItem">No data to display!</div> }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps, { loadPosts, filterPosts })(App);
