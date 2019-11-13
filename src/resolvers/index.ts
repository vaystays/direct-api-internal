import { IContext } from '../utils'
import { getOrganizations } from '../services/organizations'
import { getBookings } from '../services/bookings'
import { getUsers } from '../services/users'
import { getEmployees } from '../services/employess'

export const organizations = async (_, params, context: IContext) => await getOrganizations(context.client)
export const bookings = async (_, params, context: IContext) => await getBookings(context.client)
export const users = async (_, params, context: IContext) => await getUsers(context.client)
export const employees = async (organizationId, params, context: IContext) => await getEmployees(context.client, organizationId)

