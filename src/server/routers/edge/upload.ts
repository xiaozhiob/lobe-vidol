import { z } from 'zod';

import { S3 } from '@/server/s3';
import { publicProcedure, router } from '@/server/trpc';

export const uploadRouter = router({
  createS3PreSignedUrl: publicProcedure
    .input(z.object({ pathname: z.string() }))
    .mutation(async ({ input }) => {
      const s3 = new S3();

      return await s3.createPreSignedUrl(input.pathname);
    }),
});

export type FileRouter = typeof uploadRouter;
