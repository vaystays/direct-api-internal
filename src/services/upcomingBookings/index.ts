import {
  exists,
  findByKey,
  save
} from '../caching'
import crypto from 'crypto'

const format = (upcomingBookings = []) =>
upcomingBookings.map(
    ({
       booking_code: bookingCode,
       url,
       check_in: checkIn,
       check_out: checkOut,
       totals: {
         start_total: startTotal,
         direct_fee: directFee,
         stripe_fee: stripeFee,
         org_total: orgTotal,
       },
       organization: {
         name: orgName,
         currency: orgCurrency,
         url: orgUrl,
       },
       listing: {
         name: listingName,
         currency: listingCurrency,
         url: listingUrl,
       },
       customer: {
         name,
         email,
       },

     }) => ({
      bookingCode,
      url,
      checkIn,
      checkOut,
      totals: [{
        startTotal,
        directFee,
        stripeFee,
        orgTotal,
      }],
      organization: [{
        name: orgName,
        currency: orgCurrency,
        url: orgUrl,
      }],
      listing: [{
        listingName,
        listingCurrency,
        listingUrl,
      }],
      customer: [{
        name,
        email,
      }],

    }),
  )

export const getUpcomingBookings = async (client, ignoreCaching) => {

  const hashedUrl = crypto.createHash('md5').digest('base64')
  const key = `url:${hashedUrl}`

  if(!ignoreCaching) {
    console.log('cache is being ignored')
    const isCached = await exists(key)
      if (isCached){
        const { response } = await findByKey(key)
        const formatted = JSON.parse(response)
        console.log('result from cache', formatted)

        return formatted
      }
  }

  

  const { upcomingBookings = [] } = await client.get('https://app.getdirect.io/api/direct_admin/upcoming_bookings').json()
  console.log('bookings', upcomingBookings)

  const formattedUpcomingBookings = format(upcomingBookings)
  console.log(formattedUpcomingBookings)
  
  try {
    await save(key, { response: JSON.stringify(formattedUpcomingBookings) })
    console.log('saved to cache')
  } catch (ex) {
    console.log(exists)
  }

  return formattedUpcomingBookings
}
