const initState = {
  posts: [
    {
      id: "1",
      title: "tony",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam asperiores enim assumenda, expedita, eveniet deleniti, quod ut veniam eos illum! Doloremque error minus impedit aliquam corporis totam corrupti perspiciatis!"
    },
    {
      id: "2",
      title: "bruce",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam asperiores enim assumenda, expedita, eveniet deleniti, quod ut veniam eos illum! Doloremque error minus impedit aliquam corporis totam corrupti perspiciatis!"
    },
    {
      id: "3",
      title: "thor",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam asperiores enim assumenda, expedita, eveniet deleniti, quod ut veniam eos illum! Doloremque error minus impedit aliquam corporis totam corrupti perspiciatis!"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action, "action");
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    console.log(newPosts, "filter");
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
