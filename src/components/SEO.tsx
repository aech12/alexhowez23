import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  title?: string | null;
  description?: string | null;
};

const SEO = ({ title, description }: Props) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      {/* <Helmet title={seo.title} titleTemplate={titleTemplate}> */}
      <meta name="description" content={seo.description} />
      <meta name="image" />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {/* {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )} */}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;
