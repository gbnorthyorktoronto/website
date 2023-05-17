import { Button as ButtonMui, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, styled } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import Title from "./Title"
import InputWarning from "./InputWarning"
import { useState } from "react"

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.secondary.main,
  padding: 30,
  borderRadius: 8,
}))

const Input = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 4,

  '.MuiInputBase-root': {
    borderRadius: 4,
  }
}))

const Button = styled(ButtonMui)(({ theme }) => ({
  height: 56,
  fontWeight: 700,
  fontSize: 20,
  textTransform: 'none',
  backgroundColor: theme.palette.common.black,
}))
interface FormFields {
  name: string
  email: string
  phone: string
  additionalInformation?: string
  program: string
}

const FreeClassForm = () => {
  const [program, setProgram] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setProgram(event.target.value as string)
  };

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    program: '',
    additionalInformation: '',
  }

  const {
    formState: { errors, isSubmitted, isSubmitting },
    handleSubmit,
    register,
    clearErrors,
    reset
  } = useForm<FormFields>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues,
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        email: data.email,
        subject: `Sent from website - ${data.name}`,
        program: data.program,
        message: data?.additionalInformation,
        fullname: data.name,
        phone: data.phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }

    if (isSubmitted) {
      reset(defaultValues)
    }
  }

  return (
      <Form
        className="sm:h-[750px] mt-[10px] sm:mt-[98px] w-11/12 sm:w-[470px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Title color="#fff" width={300} mb={3} textAlign="start">Schedule for your free FREE CLASS today!</Title>
        <Input
          placeholder="Full name *"
          {...register('name', { required: true })}
          variant="outlined"
        />
        <InputWarning message={errors.name?.type === 'required' ? 'Missing full name field' : ''} />
        <Input
          placeholder="Email *"
          {...register('email', { required: true })}
          variant="outlined"
        />
        <InputWarning message={errors.email?.type === 'required' ? 'Missing email field' : ''} />
        <Input
          placeholder="Phone *"
          {...register('phone', { required: true })}
          variant="outlined"
        />
        <InputWarning message={errors.phone?.type === 'required' ? 'Missing phone field' : ''} />
        <FormControl>
          <InputLabel>I am interested in...</InputLabel>
          <Select
            {...register('program', { required: true })}
            label="I am interested in..."
            sx={{
              backgroundColor: 'white',
            }}
            value={program}
            onChange={handleChange}
          >
            <MenuItem value="kids-and-teens">Kids and Teens</MenuItem>
            <MenuItem value="adults">Adults</MenuItem>
            <MenuItem value="women-self-defense">Women&apos;s Self-Defense</MenuItem>
            <MenuItem value="private-training">Private Training</MenuItem>
          </Select>
        </FormControl>
        <InputWarning message={errors.program?.type === 'required' ? 'Select one of the programs' : ''} />
        <Input
          multiline
          maxRows={4}
          minRows={4}
          placeholder="Additional Information"
          {...register('additionalInformation', { required: false })}
          variant="outlined"
        />
        <InputWarning message='' />
        <Button onClick={() => clearErrors()} type="submit" variant="contained">
          {isSubmitting ? <CircularProgress /> : 'Sign me up'}
        </Button>
      </Form>
  )
}

export default FreeClassForm
