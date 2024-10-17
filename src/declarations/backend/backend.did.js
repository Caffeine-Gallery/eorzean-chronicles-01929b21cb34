export const idlFactory = ({ IDL }) => {
  const BlogPost = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'timestamp' : IDL.Int,
  });
  return IDL.Service({
    'createPost' : IDL.Func([IDL.Text, IDL.Text], [IDL.Nat], []),
    'getJobs' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getPosts' : IDL.Func([], [IDL.Vec(BlogPost)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
