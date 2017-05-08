import {
  FETCH_SLIDE_DETAILS,
  DELETE_LINE,
  ADD_SUB_LINE,
  UPDATE_SLIDE,
  EDIT_LINE,
  DELETE_SLIDE
} from '../action/index';

const INITIAL_STATE = {
  slide: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SLIDE_DETAILS:
      return {
        ...state,
        slide: action.payload.data
      };
    case DELETE_LINE:
      return {
        ...state,
        slide: deleteLine(state, action.deleteId)
      };
    case ADD_SUB_LINE:
      return {
        ...state,
        slide: addSubline(state, action.parentId)
      };
    case UPDATE_SLIDE:
      return state;
    case EDIT_LINE:
      return {
        ...state,
        slide: updateLine(state, action.lineId, action.content)
      };
    case DELETE_SLIDE:
      return getDeleteSlideState(state, action.slideId, action.payload);
    default:
      return state;
  }
}

const deleteLine = function(state, delId) {
  function filterItems(items) {
    const returnItems = [];
    let children;
    items.forEach(function(item) {
      if (item.id !== delId) {
        returnItems.push(item);
      }
      if (item.children && item.children.length) {
        children = filterItems(item.children);
        item.children = children;
      }
    });
    return returnItems;
  }

  let slideContent = state.slide,
    data;
  if (slideContent && slideContent.body && slideContent.body.data) {
    data = slideContent.body.data;
    slideContent.body.data = filterItems(data);
  }
  return slideContent;
}

const addSubline = function(state, parentId) {
  function addToParentItems(items) {
    const returnItems = [];
    let children,
      count,
      newItemId;
    items.forEach(function(item) {

      returnItems.push(item);
      if (item.id === parentId) {
        if (!item.children) {
          item.children = [];
        }
        count = item.children.length + 1;
        newItemId = parentId + '.' + count;
        item.children.push({
          'id': newItemId,
          'value': {
            'type': 'text',
            content: ''
          }
        });
      }

      if (item.children && item.children.length) {
        children = addToParentItems(item.children);
        item.children = children;
      }
    });
    return returnItems;
  }

  let slideContent = state.slide,
    data;

  if (slideContent && slideContent.body && slideContent.body.data) {
    data = slideContent.body.data;
    slideContent.body.data = addToParentItems(data);
  }
  return slideContent;
}

const updateLine = function(state, lineId, content) {
  function updateLine(items) {
    const returnItems = [];
    let children,
      count,
      newItemId;
    items.forEach(function(item) {

      if (item.id === lineId) {
        item.value = {
          'type': 'text',
          'content': content
        };
      }
      returnItems.push(item);

      if (item.children && item.children.length) {
        children = updateLine(item.children);
        item.children = children;
      }
    });
    return returnItems;
  }

  let slideContent = state.slide,
    data;

  if (slideContent && slideContent.body && slideContent.body.data) {
    data = slideContent.body.data;
    slideContent.body.data = updateLine(data);
  }
  return slideContent;
}

const getDeleteSlideState = function(state, slideId, payload) {
  if (slideId === state.slide.slideId) {
    return INITIAL_STATE;
  }
}
