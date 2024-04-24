import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.feld.sxlivetiming',
  appName: 'Supercross Live',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
