import '@testing-library/jest-dom'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const { fill, priority, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...imgProps} style={{ ...imgProps.style, width: fill ? '100%' : imgProps.width, height: fill ? '100%' : imgProps.height }} />
  },
}))

// Mock next-intl
jest.mock('next-intl', () => {
  const messages = require('./messages/es.json')
  
  const getNestedValue = (obj, path) => {
    const keys = path.split('.')
    let value = obj
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key]
      } else {
        return undefined
      }
    }
    return value
  }

  return {
    useTranslations: (namespace) => {
      return (key) => {
        // If namespace is provided, look in that namespace first
        let fullKey = key
        if (namespace) {
          fullKey = `${namespace}.${key}`
        }
        
        const translated = getNestedValue(messages, fullKey)
        if (translated) {
          return translated
        }
        
        // Fallback: try without namespace if namespace was provided
        if (namespace) {
          const fallback = getNestedValue(messages, key)
          if (fallback) {
            return fallback
          }
        }
        
        // Last resort: return the key
        return key
      }
    },
    useLocale: () => 'es',
    NextIntlClientProvider: ({ children }) => children,
  }
})

jest.mock('@/i18n/routing', () => ({
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
  usePathname: () => '/es',
  Link: ({ children, href, ...props }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))
