const formatOne = ({
    id,
    name,
    active,
    summary_description: summaryDescription,
    features_accommodations: featuresAccommodations,
    features_amenities: featuresAmenities,
    features_dining: featuresDining,
    features_entertainment: featuresEntertainment,
    features_outdoor: featuresOutdoor,
    features_spa:featuresSpa,
    features_suitability: featuresSuitability,
    features_themes: featuresThemes,
    num_bathrooms: numBathrooms,
    num_bedrooms: numBedrooms,
    num_lounge: numLounge,
    num_sleep: numSleep,
    num_sleep_in_beds: numSleepInBeds,
    unit_type: unitType,
    property_id: propertyId,
    created_at: createdAt,
    updated_at: updatedAt,
    check_in_instructions: checkInInstructions,
    emergency_contact_phone: emergencyContactPhone,
    emergency_contact_first_name: emergencyContactFirstName,
    emergency_contact_last_name: emergencyContactLastName,
    portfolio_id: portfolioId,
    external_id: externalId,
    airbnb_headline: airbnbHeadline,
    external_contract_id: externalContractId,
    pointcentreal_customer_id: pointcentralCustomerId,
    organization_id: organizationId,
    extra,
    subportfolio_id: subportfolioId,
    unit_group_id: unitGroupId
   
     
  }) => ({
    id,
    name,
    active,
    summaryDescription,
    featuresAccommodations,
    featuresAmenities,
    featuresDining,
    featuresEntertainment,
    featuresOutdoor,
    featuresSpa,
    featuresSuitability,
    featuresThemes,
    numBathrooms,
    numBedrooms,
    numLounge,
    numSleep,
    numSleepInBeds,
    unitType,
    propertyId,
    createdAt,
    updatedAt,
    checkInInstructions,
    emergencyContactPhone,
    emergencyContactFirstName,
    emergencyContactLastName,
    portfolioId,
    externalId,
    airbnbHeadline,
    externalContractId,
    pointcentralCustomerId,
    organizationId,
    extra,
    subportfolioId,
    unitGroupId
    
   
  })


// This is calling a single unit right now we have units in the schema needs to be changed and mapped right

export const getUnit = async (client, organizationId: number, id: number) => {
  const unit = await client.get(`https://app.getdirect.io/api/${organizationId}/units/${id}`).json()
  console.log(unit)

  return formatOne(unit)
}
