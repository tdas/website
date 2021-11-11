/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import Link from "src/components/Link";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Typography from "src/components/Typography";
import Info from "src/components/Info";
import styled from "styled-components";
import JsonCardDataList from "src/components/pages/shared/JsonCardDataList";

const Image = styled.img`
  max-width: 100%;
`;

const HighlightedCodeBlock = styled.pre`
  overflow: auto;

  > code {
    padding: ${(props) => props.theme.spacing.sm};
    border-radius: 0.25em;
    display: block;
    overflow-x: auto;
    white-space: pre;
  }

  /*!
  Theme: Material Darker
  Author: Nate Peterson
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/

  /*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.
  This theme file was auto-generated from the Base16 scheme material-darker
  by the Highlight.js Base16 template builder.
  - https://github.com/highlightjs/base16-highlightjs
*/

  /*
base00  #212121  Default Background
base01  #303030  Lighter Background (Used for status bars, line number and folding marks)
base02  #353535  Selection Background
base03  #9A9A9A  Comments, Invisibles, Line Highlighting
base04  #B2CCD6  Dark Foreground (Used for status bars)
base05  #EEFFFF  Default Foreground, Caret, Delimiters, Operators
base06  #EEFFFF  Light Foreground (Not often used)
base07  #FFFFFF  Light Background (Not often used)
base08  #F07178  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #F78C6C  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #FFCB6B  Classes, Markup Bold, Search Text Background
base0B  #C3E88D  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #89DDFF  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #82AAFF  Functions, Methods, Attribute IDs, Headings
base0E  #C792EA  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #FF5370  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
*/

  .hljs {
    color: #eeffff;
    background: #212121;
  }

  .hljs::selection,
  .hljs ::selection {
    background-color: #353535;
    color: #eeffff;
  }

  /* purposely do not highlight these things */
  .hljs-formula,
  .hljs-params,
  .hljs-property {
  }

  /* base03 - #9A9A9A -  Comments, Invisibles, Line Highlighting */
  .hljs-comment {
    color: #9a9a9a;
  }

  /* base04 - #B2CCD6 -  Dark Foreground (Used for status bars) */
  .hljs-tag {
    color: #b2ccd6;
  }

  /* base05 - #EEFFFF -  Default Foreground, Caret, Delimiters, Operators */
  .hljs-subst,
  .hljs-punctuation,
  .hljs-operator {
    color: #eeffff;
  }

  .hljs-operator {
    opacity: 0.7;
  }

  /* base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */
  .hljs-bullet,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-tag,
  .hljs-name,
  .hljs-deletion {
    color: #f07178;
  }

  /* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
  .hljs-symbol,
  .hljs-number,
  .hljs-link,
  .hljs-attr,
  .hljs-variable.constant_,
  .hljs-literal {
    color: #f78c6c;
  }

  /* base0A - Classes, Markup Bold, Search Text Background */
  .hljs-title,
  .hljs-class .hljs-title,
  .hljs-title.class_ {
    color: #ffcb6b;
  }

  .hljs-strong {
    font-weight: bold;
    color: #ffcb6b;
  }

  /* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
  .hljs-code,
  .hljs-addition,
  .hljs-title.class_.inherited__,
  .hljs-string {
    color: #c3e88d;
  }

  /* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
  .hljs-built_in,
  .hljs-doctag, /* guessing */
  .hljs-quote,
  .hljs-keyword.hljs-atrule,
  .hljs-regexp {
    color: #89ddff;
  }

  /* base0D - Functions, Methods, Attribute IDs, Headings */
  .hljs-function .hljs-title,
  .hljs-attribute,
  .ruby .hljs-property,
  .hljs-title.function_,
  .hljs-section {
    color: #82aaff;
  }

  /* base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed */
  .hljs-type,
  /* .hljs-selector-id, */
  /* .hljs-selector-class, */
  /* .hljs-selector-attr, */
  /* .hljs-selector-pseudo, */
  .hljs-template-tag,
  .diff .hljs-meta,
  .hljs-keyword {
    color: #c792ea;
  }
  .hljs-emphasis {
    color: #c792ea;
    font-style: italic;
  }

  /* base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> */
  .hljs-meta,
  /*
    prevent top level .keyword and .string scopes
    from leaking into meta by accident
  */
  .hljs-meta .hljs-keyword,
  .hljs-meta .hljs-string {
    color: #ff5370;
  }

  .hljs-meta .hljs-keyword,
  /* for v10 compatible themes */
  .hljs-meta-keyword {
    font-weight: bold;
  }
`;

const mdxComponents = {
  p: (props) => <Typography variant="p" {...props} />,
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
  h6: (props) => <Typography variant="h6" {...props} />,
  ol: (props) => <Typography variant="ol" {...props} />,
  ul: (props) => <Typography variant="ul" {...props} />,
  a: Link,
  li: (props) => <Typography variant="li" {...props} />,
  hr: (props) => <Typography variant="hr" {...props} />,
  thematicBreak: (props) => <Typography variant="hr" {...props} />,
  img: (props) => <Image {...props} />,
  pre: (props) => <HighlightedCodeBlock {...props} />,

  // Custom components
  JsonCardDataList,
  Info,
};

const MDX = (props) => {
  const { children } = props;

  return (
    <MDXProvider components={mdxComponents}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDX;