// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

const pageInfoQuery = groq`
  *[_type == "pageInfo"][0]
`;
 console.log('Sanity Config:', {
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
            baseUrl: process.env.NEXT_PUBLIC_BASE_URL
        });
type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);

  res.status(200).json({ pageInfo });
}
