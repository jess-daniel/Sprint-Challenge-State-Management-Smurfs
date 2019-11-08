1. What problem does the context API help solve?

The context api allows you to access state in children compoents without prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The redux store is where all the application state data is held. Actions are the functions that send/recieve information to/from the redux store. The reducers are the logic for how that data should change/update the redux store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state needed throughout the application. Component state is specific to a component and maybe a child component. Form input state should be handled within the component and not by the application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk lets us do async opertaions like api calls within our action functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux because there is a clear pattern to it's setup and it doesn't require much thought to how to get the state data you need. It's all in the store and you pull out what you need.
