export const getUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://nxtlvltech.vercel.app";
  }

  return "http://localhost:3000";
};
