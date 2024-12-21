import React from "react";
import { connect, Global, css } from "frontity";

const GlobalCss = ({ state }) => (
  <Global
    styles={css`
      p,
      body,
      article,
      html {
        font-family: "Hoefler Text", "Baskerville Old Face", Garamond,
          "Times New Roman", serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 
      {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      html 
      {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
      }
     
      body 
      {
        margin: 0;
      }

      h1 
      {
        font-size: 2em;
        margin: 0.67em 0;
      }

      a 
      {
        background-color: transparent;
      }

      pre
      {
        font-family: monospace, monospace;
        font-size: 1em;
      }

      abbr[title]
      {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
      }

      b,
      strong
      {
        font-weight: bolder;
      }

      code,
      kbd,
      samp 
      {
        font-family: monospace, monospace;
        font-size: 1em;
      }

      small 
      {
        font-size: 80%;
      }

      sub,
      sup 
      {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub 
      {
        bottom: -0.25em;
      }

      sup
      {
        top: -0.5em;
      }

      img
      {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea 
      {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input 
      {
        overflow: visible;
      }

      button,
      select 
      {
        text-transform: none;
      }

      button,
      [type="button"],
      [type="reset"],
      [type="submit"] 
      {
        -webkit-appearance: button;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner 
      {
        border-style: none;
        padding: 0;
      }

      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring 
      {
        outline: 1px dotted ButtonText;
      }

      fieldset 
      {
        padding: 0.35em 0.75em 0.625em;
      }

      legend
      {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }
      
      progress
      {
        vertical-align: baseline;
      }

      textarea
      {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"]
      {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button 
      {
        height: auto;
      }

      [type="search"]
      {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      
      [type="search"]::-webkit-search-decoration 
      {
        -webkit-appearance: none;
      }

      ::-webkit-file-upload-button 
      {
        -webkit-appearance: button;
        font: inherit;
      }

      details 
      {
        display: block;
      }

      summary {
        display: list-item;
      }

      /* Misc
        ========================================================================== */
      /**
       * Add the correct display in IE 10+.
       */
      template {
        display: none;
      }

      /**
       * Add the correct display in IE 10.
       */
      [hidden] {
        display: none;
      }

      /* Typography */
      html {
        font-size: 22px;
        box-sizing: border-box;
      }

      ::-moz-selection {
        background-color: #999999;
      }

      ::selection {
        background-color: #999999;
      }

      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #111;
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
          "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: 400;
        font-size: 1em;
        line-height: 1.8;
        margin: 0;
        text-rendering: optimizeLegibility;
        background-color: #fff;
      }

      button,
      input,
      select,
      optgroup,
      textarea {
        color: #111;
        font-family: "NonBreakingSpaceOverride", "Hoefler Text",
          "Baskerville Old Face", Garamond, "Times New Roman", serif;
        font-weight: 400;
        line-height: 1.8;
        text-rendering: optimizeLegibility;
      }

      h1 {
        font-size: 2.25em;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      h1:not(.site-title):before,
      h2:before {
        background: #767676;
        display: block;
        height: 2px;
        margin: 1rem 0;
        width: 1em;
      }

      a {
        text-decoration: none;
        transition: color 110ms ease-in-out;
        color: ${state.theme.color};
      }

      a:hover {
        text-decoration: none;
      }

      a:focus {
        text-decoration: underline;
        outline: thin dotted;
      }

      a:hover,
      a:active {
        color: ${state.theme.color};
        outline: 0;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        clear: both;
        margin: 1rem 0;
      }

      p {
        -webit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      dfn,
      cite,
      em,
      i {
        font-style: italic;
      }

      blockquote cite {
        font-size: 0.71111em;
        font-style: normal;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      code,
      kbd,
      tt,
      var {
        font-size: -0.88889em;
        font-family: Menlo, monaco, Consolas, Lucida Console, monospace;
      }

      abbr,
      acronym {
        border-bottom: 1px dotted #666;
        cursor: help;
      }

      mark,
      ins {
        background: #fff9c0;
        text-decoration: none;
      }

      ul,
      ol {
        padding-left: 1rem;
      }

      ul {
        list-styles: disc;
      }

      ul ul {
        list-style-type: circle;
      }

      ol {
        line-height: decimal;
      }

      li {
        line-height: 1.8;
      }

      li > ul,
      li > ol {
        padding-left: 2rem;
      }

      dt {
        font-weight: bold;
      }

      dd {
        margin: 1 1rem 1rem;
      }

      img {
        height: auto;
        max-width: 100%;
        position: relative;
      }

      figure {
        margin: 0;
      }

      table {
        margin: 0 0 1rem;
        border-collapse: collapse;
        width: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }

      table td,
      table th {
        padding: 0.5rem;
        border: 1px solid #767676;
        word-break: break-all;
      }

      textarea {
        box-sizing: border-box;
        display: block;
        width: 100%;
        max-width: 100%;
        resize: vertical;
      }

      input[type="search"]::-webkit-search-decoration {
        display: none;
      }

      form p {
        margin: 1rem 0;
      }

      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 2.8125em;
        }
      }

      @media (prefers-color-scheme: dark) {
        body {
          background-color: black !important;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        table,
        code {
          color: white !important;
        }

        blockquote {
          background-color: #181818 !important;
          color: white !important;
        }

        pre {
          background-color: #181818 !important;
        }

        figcaption {
          color: #767676 !important;
        }

        ::-webkit-scrollbar {
          width: 12px;
          background: #111;
        }

        ::-webkit-scrollbar-thumb {
          background: ${state.theme.color};
          -webkit-border-radius: 2px;
          -webkit-box-shadow: 0px 1px 2px rgba(100, 100, 100, 0.75);
        }

        ::-webkit-scrollbar-corner {
          background: #000;
        }
      }
    `}
  />
);

export default connect(GlobalCss);
