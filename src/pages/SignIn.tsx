import clsx from 'clsx'
import axios from 'axios'
import { Envelope, Eye, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Heading from '../components/Heading'
import Logo from '../components/Logo'
import Switch from '../components/Switch'
import Text from '../components/Text'
import TextButton from '../components/TextButton'
import { TextInput } from '../components/TextInput'

function SignIn() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');

  const handleSwitchTheme = () => {
    localStorage.setItem('dark-mode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }

  async function handleSingIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'dev.elisonmichell@gmail.com',
      password: '12345678'
    })
  }

  return(
    <main className={clsx({'dark': darkMode === true})}>
      <div className='flex items-center justify-center sm:h-full h-screen bg-dark-300 sm:py-16 sm:px-32 transition-colors duration-300 ease-in-out dark:bg-light-200'>
        <div className='flex overflow-hidden h-full sm:h-max w-full sm:max-w-[400px] md:max-w-[1184px] sm:rounded-2xl drop-shadow-login'>
          <div className='hidden md:flex flex-col justify-between flex-1 pt-16 px-16 pb-32 bg-login-gradient bg-cover bg-center'>
            <Logo variant='light' />

            <div className='drop-shadow-default'>
              <Heading color='light' size='xl' asChildren>
                <h1>
                  Welcome<br/> 
                  Back!
                </h1>
              </Heading>
              <Text color='light' size='lg'>
                React • Radix • Story Book • Tailwind • Figma
              </Text>
            </div>
          </div>

          <div className='flex flex-col justify-center sm:justify-start w-full md:w-[400px] gap-4 p-12 bg-light-200 transition-colors duration-300 ease-in-out dark:bg-dark-200'>
            <div className='flex justify-end mb-8'>
              <Switch onClick={() => handleSwitchTheme()}/>
            </div>
            <div className='mb-8'>
              <Heading size='sm' darkMode>
                Login
              </Heading>
              <Text color='gray'>
                Please login to your account.
              </Text>
            </div>
            <form onSubmit={handleSingIn} className='flex flex-col gap-4'>
              <div className='flex flex-col gap-8'>
                <TextInput.Root>
                  <TextInput.Title title='Email' />
                  <TextInput.Content>
                    <TextInput.Icon>
                      <Envelope size={24} weight='bold'/>
                    </TextInput.Icon>
                    <TextInput.Input placeholder='email@example.com'/>
                  </TextInput.Content>
                </TextInput.Root>

                <TextInput.Root>
                  <TextInput.Title title='Password' />
                  <TextInput.Content>
                    <TextInput.Icon>
                      <Lock size={24} weight='bold'/>
                    </TextInput.Icon>
                    <TextInput.Input type='password' placeholder='**********'/>
                    <TextInput.Icon>
                      <Eye size={24} weight='bold'/>
                    </TextInput.Icon>
                  </TextInput.Content>
                </TextInput.Root>
              </div>

              <label className='flex gap-4 items-center mb-8'>
                <Checkbox />
                <span className='flex-1'>
                  <Text>Remember me</Text>
                </span>
                <TextButton title='Forgot?' />
              </label>
              <Button title='Enter' type='submit'/>
            </form>

            <div className='flex mt-28 justify-center'>
              <Text color='gray' asChildren>
                <span>Not a Member? <TextButton title='Sign up' /> now</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignIn;