const posts = [
  {title: 'Post 1', date: new Date(), views: 22, comments: [1,2], _id: '1'},
  {title: 'Post 2', date: new Date(), views: 53, comments: [1,2], _id: '2'}
]

export const actions = {
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(()=>{
        resolve(posts)
      })
    }) 
  },
  async remove({}, id) {

  },
  async update({}, {id, text}) {

  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(()=>{
        resolve(posts.find(p => p._id === id));
      }, 500)
    }) 
  },
  async create({commit}, {title, text, image}){
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await new Promise(resolve => {
        setTimeout(()=>{
          resolve();
        }, 500)
      })
    } catch (e) {
      commit('setError', e, {root: true})
      throw e;
    }
    
  }

}