const editlist = (state = [], action) => {
    switch (action.type) {
      case 'EDIT_TODO':
        return {
            id:action.id,
            text:action.text,
            flag:true
        }        
      case 'CHANG_STATE':
        return {
          flag:false
        }
      default:
        return state
    }
  }
  
  export default editlist
  