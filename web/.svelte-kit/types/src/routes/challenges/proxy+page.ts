// @ts-nocheck
import { challengesQueryOptions } from '$lib/query/challenges'
import type { PageLoad } from './$types'

export const load = async ({ parent }: Parameters<PageLoad>[0]) => {
  const { queryClient } = await parent()
  await queryClient.prefetchQuery(challengesQueryOptions)
}
