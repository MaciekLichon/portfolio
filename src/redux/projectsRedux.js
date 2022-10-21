
// selectors
export const getAllProjects = state => state.projects;

// actions
const createActionName = actionName => `app/projects/${actionName}`;

// action creators


const projectsReducer = (statePart = [], action) => {
  switch(action.type) {
    default:
      return statePart;
  }
};

export default projectsReducer;
