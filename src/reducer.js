
const updateDiscuss = (state=[],action) => {
      switch (action.type) {
        case 'SHOW_DIS':
              return [...state , ...action.data];
        case 'Fabulous':
              return state.filter((v,i,a) => {
                  if(v['id']==action.id){
                      v['num']=action.num+1
                  }
                  return v
              });

        default:
              return state;

      }
}
export default updateDiscuss
