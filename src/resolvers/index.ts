import { IContext } from '../utils'
import { getOrganizations } from '../services/organizations'

export const organizations = async (_, params, context: IContext) => await getOrganizations(context.client)
