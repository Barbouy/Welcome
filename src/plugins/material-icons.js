/* eslint-disable*/
import Heart from "vue-material-design-icons/Heart"
import Star from "vue-material-design-icons/Star"
import Twitch from "vue-material-design-icons/Twitch"

export default {
  install: (app, options) => {
    /* declare global component */
    app.component("heart", Heart)
    app.component("star", Star)
    app.component("twitch", Twitch)
  },
};