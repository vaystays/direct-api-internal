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
    
   
  })


// This is calling a single unit right now we have units in the schema needs to be changed and mapped right

export const getUnit = async (client, organizationId: number, id: number) => {
  const unit = await client.get(`https://app.getdirect.io/api/${organizationId}/units/${id}`).json()
  console.log(unit)

  return formatOne(unit)
}
