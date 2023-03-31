import { FC, ComponentProps } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
        danger: 'bg-red-500 text-white focus:ring-red-500'
      },
      fullWidth: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      intent: 'primary'
    }
  }
)

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>

interface Props extends VariantProps<typeof buttonStyles>, ButtonOrLinkProps {
  className?: string
}

const Button: FC<Props> = ({ intent, fullWidth, href, className = '', ...props }) => {
  const isLink = typeof href !== 'undefined'
  const customStyle = buttonStyles({ intent, fullWidth, className })

  if (isLink) {
    return <a href={href} className={customStyle} {...props} />
  }

  return <button className={customStyle} {...props} />
}

export default Button
