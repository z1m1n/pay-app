export enum ValidationMessage {
  FIELD_REQUIRED = 'This field is required',
  ONLY_NUMBERS_ALLOWED = 'Please enter only numbers',
  CARD_NUMBER_LENGTH = 'Card number should be exactly 16 digits',
  CVC_NUMBER_LENGTH = 'CVC should be exactly 3 digits',
  EXPIRATION_FORMAT = 'Incorrect format',
  EXPIRATION_DATE = 'Your card is expired'
};