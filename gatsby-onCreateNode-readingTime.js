const {
  documentToPlainTextString,
} = require("@contentful/rich-text-plain-text-renderer")
const readingTime = require("reading-time")
const { GatsbyNode } = require("gatsby")

module.exports.onCreateNode = async ({ node, loadNodeContent, actions }) => {
  const { internal } = node
  const { owner, mediaType } = internal
  if (mediaType !== "text/richtext" || owner !== "gatsby-source-contentful") {
    return
  }
  const doc = JSON.parse(await loadNodeContent(node))
  const text = documentToPlainTextString(doc)
  const result = readingTime(text)
  actions.createNodeField({ node, name: "readingTime", value: result })
}
