const leftPad = (number, pad = '00') => pad.substring(0, pad.length - number.length) + number

export const FormattedTime = secs => `${parseInt(secs / 60, 10)} : ${leftPad(parseInt(secs % 60, 10).toString())}`
