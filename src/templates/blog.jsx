import React from "react"
import Layout from "../containers/Layout/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { readingTime } from "reading-time-estimator"
import "./blog.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      authorsName

      authorsPhoto {
        file {
          url
        }
      }
      coverImage {
        file {
          url
        }
      }
      published(formatString: "Do, MMM YY")
      body {
        fields {
          readingTime {
            text
            minutes
            time
            words
          }
        }
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const src = !!node.data.target.fields
          ? node.data.target.fields.file["en-US"].url
          : ""
        return <img src={src} alt={""} />
      },
    },
  }

  return (
    <Layout invert={true}>
      <div className="blog">
        <div className="blog__title">
          <h1>{data.contentfulBlogPost.title}</h1>
          <div className="blog__author">
            <img
              className="blog__author-image"
              src={
                !!data.contentfulBlogPost.authorsPhoto
                  ? data.contentfulBlogPost.authorsPhoto.file.url
                  : ""
              }
              alt=""
            />
            <span>{data.contentfulBlogPost.authorsName}</span>
            <span> | </span>
            <span>{data.contentfulBlogPost.published}</span>
            <span> | </span>
            <span>
              {Math.ceil(
                data.contentfulBlogPost.body.fields.readingTime.minutes
              )}{" "}
              mins
            </span>
          </div>
        </div>
        <img
          className="blog__cover animated fadeIn"
          src={data.contentfulBlogPost.coverImage.file.url}
          alt={data.contentfulBlogPost.coverImage.file.fileName}
        />
        <div className="blog__paragraph">
          {documentToReactComponents(
            data.contentfulBlogPost.body.json,
            options
          )}
        </div>
        <div className="blog__footer">
          <img
            className="blog__footer-image"
            src={
              !!data.contentfulBlogPost.authorsPhoto
                ? data.contentfulBlogPost.authorsPhoto.file.url
                : ""
            }
            alt=""
          />
          <div className="blog__footer-name">
            <div>
              <span className="written-by">Written By</span>
            </div>
            <div>
              <span>{data.contentfulBlogPost.authorsName}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
