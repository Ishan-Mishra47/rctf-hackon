// @ts-nocheck
import { userByIdQueryOptions } from '$lib/query/user'
import type { PageLoad } from './$types'

export const load = async ({ params, parent }: Parameters<PageLoad>[0]) => {
  const { queryClient } = await parent()
  await queryClient.prefetchQuery(userByIdQueryOptions(params.id))
}
