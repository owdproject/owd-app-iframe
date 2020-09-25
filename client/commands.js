export default ({ store }) => {
  return {
    'iframe': function () {
      store.dispatch('core/windows/windowOpen', 'WindowSnake3D');
    },
  }
}
