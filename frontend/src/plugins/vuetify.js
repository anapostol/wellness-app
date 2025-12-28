import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const flairoLight = {
  dark: false,
  colors: {
    background: '#F6F7FB',
    surface: '#FFFFFF',
    primary: '#6C63FF',
    secondary: '#22C55E',
    info: '#38BDF8',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',

    'on-background': '#0F172A',
    'on-surface': '#0F172A',
  }
}

export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi }
    },
    theme: {
        defaultTheme: 'flairoLight',
        themes: {
        flairoLight
        }
    }
})
