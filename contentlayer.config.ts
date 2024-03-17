
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `./projects/**/*.mdx`,
  fields: {
    published: {
      type: "boolean",
    },
    title: {
      type: "string",
      required: true,
    },
    label: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
    },
    url: {
      type: "string",
    },
    ref: {
      type: "string",
      required: true,
    },
    repository: {
      type: "string",
    },

  },
  computedFields: {
    slug: { type: 'string', resolve: (post) => `${post._raw.flattenedPath.split("/").slice(1).join("/")}` },
  },
}))

export default makeSource({ contentDirPath: 'contents', documentTypes: [Project] })

