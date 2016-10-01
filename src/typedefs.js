/**
 * @typedef {Object} PaymentRequestData
 * @property {string} authToken
 * @property {AddressData} billingAddress
 * @property {CartData} cart
 * @property {CustomerData} customer
 * @property {OrderData} order
 * @property {PaymentData|NoucePaymentData} payment
 * @property {PaymentMethodData} paymentMethod
 * @property {AddressData} shippingAddress
 * @property {StoreData} store
 */

/**
 * @typedef {Object} AddressData
 * @property {string} addressLine1
 * @property {string} addressLine2
 * @property {string} city
 * @property {string} company
 * @property {string} country
 * @property {string} countryCode
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} phone
 * @property {string} postCode
 * @property {string} province
 * @property {string} provinceCode
 */

/**
 * @typedef {Object} CartData
 * @property {string} currency
 * @property {Object} grandTotal
 * @property {number} grandTotal.integerAmount
 * @property {Object} handling
 * @property {number} handling.integerAmount
 * @property {ItemData[]} items
 * @property {Object} shipping
 * @property {number} shipping.integerAmount
 * @property {Object} subTotal
 * @property {number} subTotal.integerAmount
 * @property {Object} taxTotal
 * @property {number} taxTotal.integerAmount
 */

/**
 * @typedef {Object} CustomerData
 * @property {string} customerId
 * @property {string} firstName
 * @property {string} geoCountryCode
 * @property {string} lastName
 * @property {string} sessionHash
 */

/**
 * @typedef {Object} ItemData
 * @property {number} integerAmount
 * @property {number} quantity
 * @property {string} id
 * @property {string} name
 * @property {string} sku
 */

/**
 * @typedef {Object} OrderData
 * @property {string} callbackUrl
 * @property {string} orderId
 * @property {string} token
 */

/**
 * @typedef {Object} PaymentData
 * @property {string} ccCvv
 * @property {Object} ccExpiry
 * @property {number} ccExpiry.month
 * @property {number} ccExpiry.year
 * @property {string} ccName
 * @property {string} ccNumber
 * @property {string} deviceData
 */

/**
 * @typedef {Object} NoucePaymentData
 * @property {string} deviceData
 * @property {string} nouce
 */

/**
 * @typedef {Object} PaymentMethodData
 * @property {Object} config
 * @property {string} config.redirectUrl
 * @property {string} gateway
 * @property {string} id
 */

/**
 * @typedef {Object} StoreData
 * @property {string} storeHash
 * @property {string} storeId
 * @property {string} storeLanguage
 * @property {string} storeName
 */
