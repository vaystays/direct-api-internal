import { organizationsUrl } from '../../config/urls'
import {
  exists,
  findByKey,
  save
} from '../caching'
import crypto from 'crypto'

const format = (organizations = []) => organizations.map(formatOne)

const formatOne =
  ({
     name: orgName,
     id,
     user,
     created_at: createdAt,
     type,
     confirmed: isConfirmed,
     address,
     subdomain: subDomain,
     total_brands: totalBrands,
     total_domains: totalDomains,
     total_employees: totalEmployees,
     total_properties: totalProperties,
     total_unit_listings: totalUnitListings,
     total_units: totalUnits,
     total_bookings: totalBookings,
     active: isActive,
     onboarded: isOnBoarded,
     url: orgUrl
   }) => ({
    orgName,
    id,
    createdAt,
    type,
    isConfirmed,
    address,
    subDomain,
    totalBrands,
    totalDomains,
    totalEmployees,
    totalProperties,
    totalUnits,
    isActive,
    isOnBoarded,
    totalUnitListings,
    totalBookings,
    user,
    orgUrl
  })

export const getOrganizations = async client => {
  console.log(organizationsUrl)

  const hashedUrl = crypto.createHash('md5').digest('base64')
  const key = `url:${hashedUrl}`
  console.log('Hashed Key', key)
  const isCached = await exists(key)
  if (isCached) {
    const { response } = await findByKey(key)
    const formatted = JSON.parse(response)
    console.log(`Result from cache`, formatted)

    return formatted
  }

  const { organizations = [] } = await client.get(organizationsUrl).json()

  const formatted = format(organizations)
  console.log(formatted)

  try {
    await save(key, { response: JSON.stringify(formatted) })
    console.log(`Saved to cache`)
  } catch (ex) {
    console.error(ex)
  }

  return formatted
}
