const format = (organizations = []) =>
  organizations.map(
    ({
       name,
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
     }) => ({
      name,
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
    }),
  )

export const getOrganizations = async client => {
  const { organizations = [] } = await client.get('https://app.getdirect.io/api/direct_admin/organizations').json()
  return format(organizations)
}
