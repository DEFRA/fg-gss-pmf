import { findPigType } from '../models/pig-types.js'

const PENCE_PER_POUND = 100
const PAYMENT_MONTH_OFFSET = 3
const PAYMENT_DAY_OFFSET = 5

const toDateOnly = (date) => date.toISOString().slice(0, 10)

const calculateAgreementEndDate = (startDate) => {
  const anniversary = new Date(
    Date.UTC(
      startDate.getUTCFullYear() + 1,
      startDate.getUTCMonth(),
      startDate.getUTCDate()
    )
  )
  anniversary.setUTCDate(anniversary.getUTCDate() - 1)

  return anniversary
}

const calculatePaymentDueDate = (startDate) =>
  new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth() + PAYMENT_MONTH_OFFSET,
      startDate.getUTCDate() + PAYMENT_DAY_OFFSET
    )
  )

const toInvoiceLine = ({ pigType, quantity }) => {
  const configuredPigType = findPigType(pigType)
  const unitPricePence = configuredPigType.value * PENCE_PER_POUND

  return {
    pigType,
    description: configuredPigType.description,
    quantity,
    unitPricePence,
    amountPence: unitPricePence * quantity
  }
}

const totalInvoiceLines = (invoiceLines) =>
  invoiceLines.reduce((total, line) => total + line.amountPence, 0)

export const calculatePaymentSchedule = ({ agreementStartDate, pigTypes }) => {
  const startDate = new Date(agreementStartDate)
  const invoiceLines = pigTypes
    .filter(({ quantity }) => quantity > 0)
    .map(toInvoiceLine)
  const totalAmountPence = totalInvoiceLines(invoiceLines)

  return {
    payment: {
      agreementStartDate: toDateOnly(startDate),
      agreementEndDate: toDateOnly(calculateAgreementEndDate(startDate)),
      agreementTotalPence: totalAmountPence,
      payments: [
        {
          dueDate: toDateOnly(calculatePaymentDueDate(startDate)),
          totalAmountPence,
          invoiceLines
        }
      ]
    }
  }
}
