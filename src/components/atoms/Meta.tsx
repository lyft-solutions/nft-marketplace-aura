import { MetaData } from "@/types/meta";
import { Helmet } from "react-helmet-async";

interface MetaProps {
  meta: MetaData;
}

const Meta: React.FC<MetaProps> = ({ meta }) => {
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      {meta.ogTitle && <meta property="og:title" content={meta.ogTitle} />}
      {meta.ogDescription && (
        <meta property="og:description" content={meta.ogDescription} />
      )}
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      {meta.twitterCard && (
        <meta name="twitter:card" content={meta.twitterCard} />
      )}
      {meta.twitterTitle && (
        <meta name="twitter:title" content={meta.twitterTitle} />
      )}
      {meta.twitterDescription && (
        <meta name="twitter:description" content={meta.twitterDescription} />
      )}
      {meta.twitterImage && (
        <meta name="twitter:image" content={meta.twitterImage} />
      )}
    </Helmet>
  );
};

export default Meta;
