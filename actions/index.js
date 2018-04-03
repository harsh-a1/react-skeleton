let nextTodoId = 0
export const moveLeft = text => ({
  type: 'LEFT',
  id: nextTodoId++,
  text
})

export const uploadImage = text => ({
  type: 'UPLOAD_IMAGE',
  id: nextTodoId++,
  text
})
