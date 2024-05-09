import moment from "moment"

export const ticketMapper = (data) =>{
    return data.map(d=>{
        let sDate = moment(d.departureDate)
        let fSDATE = sDate.format('DD.MM.YYYY')
        let eDate = moment(d.arrivalDate)
        let fEDATE = eDate.format('DD.MM.YYYY')
        let sTime = moment(d.departureTime, "HH:mm:ss")
        let fSTIME = sTime.format("HH:mm")
        let eTime = moment(d.arrivalTime, "HH:mm:ss")
        let fETIME = eTime.format("HH:mm")
        let duration = moment(d.duration, "H.m")
        let formatDuration = duration.format("HH:mm")
        return{
        id:d.id,
        route: d.trainLineDescription,
        startTime: fSTIME,
        endTime: fETIME,
        startDate: fSDATE,
        endDate: fEDATE,
        duration: formatDuration,
        transportName: d.trainLineName,
        type: d.trainType,
        places:[
            {
                placeName: '',
                price: 326,
                numberOfPlaces:238
            }
        ]}
    })
}