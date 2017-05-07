// export default function(){
//   return {
//     'heading': 'Sample slide for designing',
//     'body': {
//       'data': [
//         {
//           'id': '1',
//           'value': {
//             'type': 'text',
//             content: 'This is the 1st text'
//           }
//         }, {
//           'id': '2',
//           'value': {
//             'type': 'text',
//             content: 'This looks awesome'
//           }
//         }, {
//           'id': '3',
//           'value': {
//             'type': 'text',
//             content: 'This has SubContent- beware'
//           },
//           'children': [
//             {
//               'id': '3.1',
//               'value': {
//                 'type': 'text',
//                 content: 'SubContent Text'
//               }
//             }, {
//               'id': '3.2',
//               'value': {
//                 'type': 'text',
//                 content: 'SubContent Text2'
//               }
//             }
//           ]
//         }, {
//           'id': '4',
//           'value': {
//             'type': 'text',
//             content: 'This looks awesome'
//           }
//         }, {
//           'id': '5',
//           'value': {
//             'type': 'text',
//             content: 'Another subcontent'
//           },
//           'children': [
//             {
//               'id': '5.1',
//               'value': {
//                 'type': 'text',
//                 content: 'SubContent Text 1'
//               }
//             }, {
//               'id': '5.2',
//               'value': {
//                 'type': 'text',
//                 content: 'SubContent Text 2'
//               }
//             }, {
//               'id': '5.3',
//               'value': {
//                 'type': 'text',
//                 content: 'SubContent Text 3'
//               }
//             }, {
//               'id': '5.4',
//               'value': {
//                 'type': 'text',
//                 content: 'SubContent Text 4'
//               }
//             }
//           ]
//         }, {
//           'id': '6x',
//           'value': {
//             'type': 'text',
//             content: 'This is sample last content'
//           }
//         }
//       ]
//     }
//   };
// }

import {FETCH_SLIDE_DETAILS} from '../action/index';

const INITIAL_STATE = {slides: {}};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_SLIDE_DETAILS:
            return {...state, slides: action.payload.data};
        default:
            return state;
    }
}
