import { IContext } from '../utils'
import { getOrganizations } from '../services/organizations'

export const organizations = async (_, params, context: IContext) => {
  const organizations = await getOrganizations(context.client)
  console.log(organizations)
  return organizations
}
