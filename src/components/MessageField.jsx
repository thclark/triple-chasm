import React from 'react'
import MuiTextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'

const MessageField = ({ control, name }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true, minLength: 1, maxLength: 10 },
    defaultValue: '',
  })
  // console.log('MESSAGE FIELD ERROR', error)

  const errorHelperText = {
    required: 'You need to send a short message',
    minLength: 'Message must be at least 1 character',
    maxLength: 'Message must be ten characters or less',
  }

  const helperText =
    (error?.type && errorHelperText[error.type]) ||
    error?.message ||
    'Submit a one-word message to see what happens...'

  const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' }

  return (
    <MuiTextField
      inputProps={{ style: inputStyle }} // removes background on autofill
      error={!!error}
      sx={{ width: '100%' }}
      label="Message"
      helperText={helperText}
      onChange={onChange} // send value to hook form
      onBlur={onBlur} // notify when input is touched/blur
      value={value} // input value
      name={name} // send down the input name
      inputRef={ref} // send input ref, so we can focus on input when error appear
    />
  )
}

MessageField.defaultProps = {
  name: 'message',
}

MessageField.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object.isRequired,
}

export default MessageField
