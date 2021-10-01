import {
  reactive,
  watch,
  effect,
  computed
} from 'vue'

let beforeEditCache


const state = reactive({
  isEdit: false
})

const filters = {}


// export function onTodosMounted() {
//   watch(
//     effect(() => {
//         todoStorage.save(state.todos)
//     }),
//     {
//       deep:true
//     }
//   )
// }

export function useState() {
  return {
    isEdit: computed(() => state.isEdit)
  }
}

export function toggleEdit() {
  state.isEdit = !state.isEdit
}

// export function addTodo() {
//   const value = state.newTodo.trim()
//   if (!value) {
//       return
//   }
//   state.todos.push({
//       id: state.todos.length + 1,
//       title: value,
//       completed: false
//   })
//   state.newTodo = ''
// }


// export function removeTodo(todo) {
//   let index = state.todos.indexOf(todo);
//   state.todos.splice(index, 1);
// }

// export function handleEditTodo(todo) {
//   beforeEditCache = todo.title;
//   state.editedTodo = todo;
// }

// export function doneEdit(todo) {
//   if (!state.editedTodo) {
//       return;
//   }
//   state.editedTodo = null;
//   todo.title = todo.title.trim();
//   if (!todo.title) {
//       removeTodo(todo);
//   }
// }

// export function cancelEdit(todo) {
//   state.editedTodo = null;
//   todo.title = beforeEditCache;
// }

// export function removeCompleted() {
//   state.todos = filters.active(state.todos);
// }

// export function switchVisiBility(visibility){
//   state.visibility=visibility
// }



// function pluralize(word, count) {
//   return word + (count === 1 ? '' : 's');
// }


// export function useCompouteds() {
//   const filteredTodos = computed(() => {
//       return filters[state.visibility](state.todos);
//   });
//   const remaining = computed(() => {
//       return filters.active(state.todos).length;
//   });
//   const allDone = computed({
//       get: function () {
//           return remaining.length === 0;
//       },
//       set: function (value) {
//           state.todos.forEach(function (todo) {
//               todo.completed = value;
//           });
//       }
//   });
//   const remainingText = computed(() => {
//       return ` ${pluralize(remaining.value)} left`
//   })

//   return {
//       filteredTodos,
//       remaining,
//       allDone,
//       remainingText
//   }
// }