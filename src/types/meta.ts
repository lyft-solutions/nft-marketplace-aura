export interface MetaData {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string; 
    ogImage?: string;
    twitterCard?: "summary" | "summary_large_image";
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
  }