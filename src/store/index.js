import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: ['red','yellow', 'green'],
    nextColor: null,
    reverse: false
  },
  mutations: {
    setNextColor(state, currentColor){
      const currentColorIndex = state.colors.findIndex(color => color === currentColor);
      state.reverse = ((currentColorIndex === state.colors.length - 1 && !state.reverse) || (currentColorIndex === 0 && state.reverse)) ? !state.reverse : state.reverse;
      state.nextColor = state.reverse ? state.colors[currentColorIndex - 1] : state.colors[currentColorIndex + 1];
    }
  }
})
