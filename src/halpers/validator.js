export default (name, value) => {
  if ( name === 'name') {
    return value.length > 3 && value.length < 8
  }

  if (name === 'password') {
    return value.length === 8
  }

  if (name === 'email') {
    return value.length > 5 && value.includes('@')
  }

  if (name === 'phone') {
    return value[0] == 8 && value.length === 11 
  }
} 