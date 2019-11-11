const format = (bookings = []) => 
bookings.map(
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
        totals:[{
            startTotal,
            directFee,
            stripeFee,
            orgTotal,
        }],
        organization:[{
            orgName,
            orgCurrency,
            orgUrl,
        }],
        listing:[{ 
            listingName,
            listingCurrency,
            listingUrl,
        }],
        customer:[{ 
            name,
            email,
        }],

    }),
)

export const getBookings = async client => {
    const { bookings = [] } = await client.get('https://staging.getdirect.io/api/direct_admin/upcoming_bookings').json()
    // console.log('bookings', bookings);
    return format(bookings)
}