import { defineUntypedSchema } from 'untyped'

export default defineUntypedSchema({
  /**
   * Add a message to the CLI banner by adding a string to this array.
   * @type {string[]}
   * @version 2
   */
  badgeMessages: [],

  /**
   * Change the color of the 'Nuxt.js' title in the CLI banner.
   * @version 2
   */
  bannerColor: 'green'
})
