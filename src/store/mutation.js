
export default{
      setLoading(state, loading) {
        state.loading = loading;
      },
      setUser(state, user) {
        state.user = user;
      },
     setConnecting(state, connecting){
        state.connecting = connecting
      },
      setIsLogin(state, isLogin){
        state.isLogin = isLogin
      },
      setDatabase(state, database){
        state.database = database
      },
      setInquiry(state, inquiry){
        state.inquiry = inquiry
      },
      setLogin(state, alreadyLogin){
          state.alreadyLogin = alreadyLogin
      },
      setTable(state, table){
          state.table = table
      },
      clearAll(state){
        state.alreadyLogin = false
        state.user = null
        state.database = ''
      }
}