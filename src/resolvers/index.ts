import { IContext } from '../utils'
import { getOrganizations } from '../services/organizations'
import { getBookings } from '../services/bookings'
import { getUsers } from '../services/users'
import { getEmployees } from '../services/employess'
import { getProperty } from '../services/property'
import { getUnit } from '../services/unit'


export const organizations = async (_, { options }, context: IContext) => await getOrganizations(context.client, options && options.ignoreCache)
export const bookings = async (_, params, context: IContext) => await getBookings(context.client)
export const users = async (_, params, context: IContext) => await getUsers(context.client)
export const employees = async (_, params, context: IContext) => await getEmployees(context.client, params.organizationId)
export const property = async (_, params, context: IContext) => await getProperty(context.client, params.organizationId,params.id)
export const unit = async (_, params, context: IContext) => await getUnit(context.client, params.organizationId,params.id)
