// @ts-nocheck
import { adminChallengesQueryOptions } from '$lib/query/admin'
import type { PageLoad } from './$types'

export const load = async ({ parent }: Parameters<PageLoad>[0]) => {
  const { queryClient } = await parent()
  await queryClient.prefetchQuery(adminChallengesQueryOptions)
}
