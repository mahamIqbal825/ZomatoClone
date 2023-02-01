import { Platform } from 'react-native';
import VersionInfo from 'react-native-version-info';

export const APP_ID = 'q1gKAGUOEeak0QJCrBEABQ';
export const APP_KEY = 'rxeXkeiohOPFOhG3hAjBWtxy9BTNdNXg';
export const VERSION = VersionInfo.appVersion;
export const APP_VERSION_CODE = VersionInfo.appVersion.replace(/[\D]/g, '');
export const SUPPORT_URLS = {
  FB: 'https://www.facebook.com/Effort-Wallet-108744668076043',
  TW: 'https://twitter.com/EffortWallet',
  TL: 'https://t.me/EffortEconomy'
};
export const APP_PLAY_STORE_URL =
  Platform.OS === 'ios'
    ? 'itms://itunes.apple.com/app/id1567019614'
    : 'https://play.google.com/store/apps/details?id=com.efft.wallet';

// TEST
// export const WEB3URL = 'https://data-seed-prebsc-1-s1.binance.org:8545';
// export const CONTRACT_ID = '0x71aded539d5d37014d2953a8e26421c65aba9559';
// export const BENGGA_API_URL = 'https://kubedev.api.efforttoken.com/';
// export const APP_VERSION = `${VERSION} - TEST ENV`;
// export const BLOCKCHAIN_TXN_API = 'https://api-testnet.bscscan.com/';

// LIVE
export const WEB3URL = 'https://bsc-dataseed.binance.org';
export const CONTRACT_ID = '0x144e72b405530ad82a5e6833ef1bb73d0bd2a216';
export const BENGGA_API_URL = 'https://kubelive.api.efforttoken.com/';
export const APP_VERSION = VERSION;
export const BLOCKCHAIN_TXN_API = 'https://api.bscscan.com';
