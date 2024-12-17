import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';


export const collections = {
  assets: defineCollection({
    loader: cldAssetsLoader({
      limit: 99999,
      folder: 'photowall/walter'
    })
  }),
}