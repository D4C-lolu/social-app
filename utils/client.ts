import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "lmjraw7j",
  dataset: "production",
  apiVersion: "2022-07-31",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
