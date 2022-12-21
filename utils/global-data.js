export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Kifuliiru. Blog nyija Kifuliiru';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Blog nyija mu Kifuliiru';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved. Yakolwa na Ayivugwe Kabemba';

  return {
    name,
    blogTitle,
    footerText,
  };
};
