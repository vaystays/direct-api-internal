import { IContext } from '../utils'
import { getOrganizations } from '../services/organizations'
import { getUpcomingBookings } from '../services/upcomingBookings'
import { getUsers } from '../services/users'
import { getEmployees } from '../services/employess'
import { getInactiveProperties} from '../services/inactiveProperties'

export const organizations = async (_, { options }, context: IContext) => await getOrganizations(context.client, options && options.ignoreCache)
export const upcomingBookings = async (_,{ options }, context: IContext) => await getUpcomingBookings(context.client,options && options.ignoreCache)
export const users = async (_, params, context: IContext) => await getUsers(context.client)
export const employees = async (organizationId, params, context: IContext) => await getEmployees(context.client, organizationId)
export const inactiveProperties = async (organizationId, params, context: IContext) => await getInactiveProperties(context.client, organizationId)
