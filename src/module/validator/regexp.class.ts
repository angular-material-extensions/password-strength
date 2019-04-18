export const RegExpValidator = {
  'lowerCase': RegExp(/^(?=.*?[a-z])/),
  'upperCase': RegExp(/^(?=.*?[A-Z])/),
  'digit': RegExp(/^(?=.*?[0-9])/),
  'specialChar': RegExp(/^(?=.*?[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])/),
};
