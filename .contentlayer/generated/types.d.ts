// NOTE This file is auto-generated by the Contentlayer CLI

import type { Markdown, MDX } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

// export type Image = string
export type { Markdown, MDX }

/** Document types */
export type Blog = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Blog'
  title: string
  publishedAt: string
  summary: string
  /** Markdown file body */
  body: Markdown
  readingTime: json
  wordCount: number
  slug: string
}

export type OtherPage = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'OtherPage'
  title: string
  /** Markdown file body */
  body: Markdown
  readingTime: json
  wordCount: number
  slug: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Blog | OtherPage
export type DocumentTypeNames = 'Blog' | 'OtherPage'

export type NestedTypes = never
export type NestedTypeNames = never


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Blog: Blog
  OtherPage: OtherPage
}

export type NestedTypeMap = {

}

 