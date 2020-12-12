import profileReducer from './profileReducer';
import { addPostActionCreator, deletePost } from './profileReducer';

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Gucci flip flap", likesCount: 11 },
    { id: 4, message: "I can study react!", likesCount: 11 },
  ],
};

test('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("I'm will be the best frontend developer");
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("I'm will be the best frontend developer");
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("I'm will be the best frontend developer");
});

test('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});