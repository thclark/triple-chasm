import { useCallback, useState } from 'react'
import axios from 'axios'

const useApi = ({ onSuccess }) => {
  const [apiErrors, setApiErrors] = useState({})
  const [submitting, setsubmitting] = useState(false)

  const post = useCallback(
    (data) => {
      setsubmitting(true)
      axios
        .post(
          'https://europe-west1-octue-amy.cloudfunctions.net/frontend-developer-case-study',
          data,
        )
        .then(function (response) {
          setApiErrors({})
          setsubmitting(false)
          onSuccess && onSuccess(response)
        })
        .catch(function ({ ...args }) {
          // console.error(
          //   'RECEVED API FIELD ERROR:',
          //   args.response?.data?.message,
          // )
          setApiErrors(args.response.data)
          setsubmitting(false)
        })
    },
    [onSuccess, setsubmitting, setApiErrors],
  )

  const resetApiErrors = useCallback(() => {
    setApiErrors({})
  }, [setApiErrors])

  return {
    apiErrors,
    post,
    resetApiErrors,
    submitting,
  }
}

export default useApi
