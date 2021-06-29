import moment from 'moment'

export const updateObject = (oldObject, updateValue) => {
  return { ...oldObject, ...updateValue }
}

/**
 * @param {date|moment} start The start date
 * @param {date|moment} end The end date
 * @param {string} type The range type. eg: 'days', 'hours' etc
 */
export const getRange = (startDate, endDate, type) => {
  let fromDate = moment(startDate)
  let toDate = moment(endDate)
  let diff = toDate.diff(fromDate, type)
  let range = []
  for (let i = 0; i <= diff; i++) {
    range.push(moment(startDate).add(i, type).format('LL'))
  }
  return range
}
