export const onBottomScroll = (cb) => {
  window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      cb();
    }
  };
};
